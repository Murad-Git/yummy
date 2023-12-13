'use client';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '@supabase/auth-helpers-nextjs';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '~/components/auth/AuthProvider';
import Comment from '~/components/ui/Comment';
import { Database } from '~/types/database';

interface Props {
  // recipeId: number;
  commentsType: 'blog_comments' | 'recipe_comments';
  onClick: (
    formData: React.FormEvent<HTMLFormElement>,
    user: User | null,
  ) => void;
  onDelete: (text: string, userId: string) => void;
  // onCommentHandle: (
  //   formData: React.FormEvent<HTMLFormElement>,
  //   user: User | null,
  // ) => void;
}

export const Comments = ({
  // recipeId,
  commentsType,
  onClick,
  onDelete,
}: Props) => {
  // const [errorMsg, setErrorMsg] = useState(``);
  // const [commentsList, setCommentsList] = useState<Comment[]>([]);

  const supabase = createClientComponentClient<Database>();
  const { user, recipeComments, blogComments } = useAuth();

  // const filteredComments = (recipeId: Props) => {
  //   if (comments.length > 0) {
  //     const fileted = comments.filter((comment) => comment.recipe_id === recipeId.toString());
  //     setCommentsList(fileted);
  //   }
  //   return
  // };
  // const commentHandle = async (formData: React.FormEvent<HTMLFormElement>) => {
  //   formData.preventDefault();
  //   if (user && user.id) {
  //     const { comment } = formData.target as typeof formData.target &
  //       commentForm;
  //     const { data, error } = await supabase
  //       .from(commentsType)
  //       .insert({
  //         user_id: user.id,
  //         comment_text: comment.value,
  //         recipe_id: recipeId,
  //       })
  //       .select();
  //     error
  //       ? setErrorMsg(error.message)
  //       : console.log(`your message was sent ${data.map((item) => item)}`);
  //   } else alert(`you should be logged in`);
  // };

  // const onClickWithUser = onClick.bind(null, user);
  return (
    <div className='mt-8'>
      <h1 className='font-semibold text-2xl mb-6 italic'>Comments:</h1>
      <div className='relative'>
        <ul className='space-x-2 divide-y divide-gray-300 mb-6'>
          <Comment
            user={user}
            comments={
              commentsType === `recipe_comments` ? recipeComments : blogComments
            }
          />
          {commentsType === `recipe_comments`
            ? recipeComments.length > 0 &&
              recipeComments.map((comment) => (
                <li
                  key={comment.id}
                  className='p-8 hover:bg-gray-200 flex justify-between items-center'
                >
                  <div>
                    <p className='text-sm text-left mb-3'>
                      {new Date(comment.created_at)
                        .toString()
                        .split(` `)
                        .slice(0, 5)
                        .join(` `)}
                    </p>
                    <p>{comment.comment_text}</p>
                  </div>
                  {comment.user_id === user?.id && (
                    <button>
                      <FontAwesomeIcon
                        className='hover:text-green-500 text-gray-500'
                        icon={faTrash}
                      />
                    </button>
                  )}
                </li>
              ))
            : blogComments.length > 0 &&
              blogComments.map((comment) => (
                <li
                  key={comment.id}
                  className='p-8 hover:bg-gray-200 flex justify-between items-center'
                >
                  <div>
                    <p className='text-sm text-left mb-3'>
                      {new Date(comment.created_at)
                        .toString()
                        .split(` `)
                        .slice(0, 5)
                        .join(` `)}
                    </p>
                    <p>{comment.comment_text}</p>
                  </div>
                  {comment.user_id === user?.id && (
                    <button
                      onClick={() =>
                        onDelete(comment.comment_text, comment.user_id)
                      }
                    >
                      <FontAwesomeIcon
                        className='hover:text-green-500 text-gray-500'
                        icon={faTrash}
                      />
                    </button>
                  )}
                </li>
              ))}
          {/* {comments.length > 0 &&
            comments.map(
              (comment, index) =>
                comment.recipe_id === recipeId.toString() && (
                  <li key={index} className='p-8'>
                    <p>{comment.comment_text}</p>
                  </li>
                )
            )} */}
        </ul>
      </div>

      {/* <textarea name='comment' id='comment' rows={5} cols={50} required /> */}
      {/* <form onSubmit={(formData) => onClick(formData, user)}> */}
      {/* <form action={onClickWithUser}> */}
      <form action={(formData) => onClick(formData, user)}>
        <label htmlFor='comment'>Comment</label>
        <input
          type='text'
          id='comment'
          name='comment'
          about='comments'
          className='text-gray-900 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:border-gray-500 focus:ring-0 pr-4'
          placeholder='This is my favourite meal'
          required
        />
        <button
          className='hover:bg-gray-300 rounded-lg px-4 py-2  text-gray-900'
          type='submit'
        >
          Add Comment
        </button>
      </form>
      {/* {errorMsg && <div className='text-red-600'>{errorMsg}</div>} */}
    </div>
  );
};

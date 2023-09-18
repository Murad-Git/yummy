'use client';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { useAuth } from '~/components/auth/AuthProvider';
import { Database } from '~/types/database';

interface Props {
  recipeId: number;
}

export const Comments = ({ recipeId }: Props) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  // const [commentsList, setCommentsList] = useState<Comment[]>([]);

  const supabase = createClientComponentClient<Database>();
  const { user, comments } = useAuth();
  // const filteredComments = (recipeId: Props) => {
  //   if (comments.length > 0) {
  //     const fileted = comments.filter((comment) => comment.recipe_id === recipeId.toString());
  //     setCommentsList(fileted);
  //   }
  //   return
  // };
  const commentHandle = async (formData: React.FormEvent<HTMLFormElement>) => {
    formData.preventDefault();
    if (user && user.id) {
      const { comment } = formData.target as typeof formData.target &
        commentForm;
      const { data, error } = await supabase
        .from('comments')
        .insert({
          user_id: user.id,
          comment_text: comment.value,
          recipe_id: recipeId,
        })
        .select();
      error
        ? setErrorMsg(error.message)
        : console.log(`your message was sent ${data.map((item) => item)}`);
    } else alert('you should be logged in');
    return;
  };
  return (
    <div className='mt-8'>
      <h1 className='font-semibold text-2xl mb-6 italic'>Comments:</h1>
      <div className='relative'>
        <ul className='space-x-2 divide-y divide-gray-300 mb-6'>
          {comments.length > 0 &&
            comments.map((comment) => (
              <li
                key={comment.id}
                className='p-8 hover:bg-gray-200 flex justify-between items-center'
              >
                <div>
                  <p className='text-sm text-left mb-3'>
                    {new Date(comment.created_at)
                      .toString()
                      .split(' ')
                      .slice(0, 5)
                      .join(' ')}
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
      <form action='' onSubmit={(formData) => commentHandle(formData)}>
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
      {errorMsg && <div className='text-red-600'>{errorMsg}</div>}
      {successMsg && (
        <p className='break-normal text-center text-green-500'>{successMsg}</p>
      )}
    </div>
  );
};

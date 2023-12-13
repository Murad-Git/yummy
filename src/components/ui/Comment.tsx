import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '@supabase/auth-helpers-nextjs';

interface Props {
  comments: RecipeComment[] | [];
  user: User | null;
}

const Comment = ({ comments, user }: Props) => {
  return (
    <div>
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
        ))}
    </div>
  );
};

export default Comment;

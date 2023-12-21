import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { User } from '@supabase/auth-helpers-nextjs';
import { sortComments } from '~/utils/helpers';

interface Props {
  pageId: string;
  comments: RecipeComment[] | [];
  user: User | null;
  onDelete: (user: User | null, userId: string, text: string) => void;
}

const Comment = ({ pageId, comments, user, onDelete }: Props) => {
  const sortedComments = sortComments(comments);
  return (
    <ul className='space-x-2 divide-y divide-gray-300 mb-6'>
      {sortedComments.length > 0 &&
        sortedComments.map(
          (comment) =>
            comment.page_id === pageId && (
              <li
                key={comment.id}
                className='p-8 hover:bg-gray-200 flex justify-between items-center text-left text-sm'
              >
                <div>
                  <p className='text-xs text-left mb-3'>
                    {new Date(comment.created_at)
                      .toString()
                      .split(` `)
                      .slice(0, 5)
                      .join(` `)}
                  </p>
                  <p className='text-base'>{comment.comment_text}</p>
                </div>
                {comment.user_id === user?.id && (
                  <button
                    onClick={() =>
                      onDelete(user, comment.user_id, comment.comment_text)
                    }
                  >
                    <FontAwesomeIcon
                      className='hover:text-green-500 text-gray-500'
                      icon={faTrash}
                    />
                  </button>
                )}
              </li>
            ),
        )}
    </ul>
  );
};

export default Comment;

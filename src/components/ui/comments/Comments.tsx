'use client';
import type { User } from '@supabase/auth-helpers-nextjs';
import { useAuth } from '~/components/auth/AuthProvider';
import { Button } from '~/components/ui/Button';
import Comment from '~/components/ui/comments/Comment';

interface Props {
  pageId: string;
  commentsType: 'blog_comments' | 'recipe_comments';
  onClick: (
    formData: React.FormEvent<HTMLFormElement>,
    user: User | null,
  ) => void;
  onDelete: (user: User | null, userId: string, text: string) => void;
}

export const Comments = ({
  pageId,
  commentsType,
  onClick,
  onDelete,
}: Props) => {
  const { user, recipeComments, blogComments } = useAuth();
  return (
    <div className='mt-8'>
      <h1 className='font-semibold text-2xl mb-6 italic'>Comments:</h1>
      <div className='relative'>
        <Comment
          pageId={pageId}
          user={user}
          comments={
            commentsType === `recipe_comments` ? recipeComments : blogComments
          }
          onDelete={onDelete}
        />
      </div>

      <form
        className='column items-center'
        onSubmit={(formData) => onClick(formData, user)}
      >
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
        <Button bType='btn-filled' type='submit'>
          Add Comment
        </Button>
        {/* <button
          className='hover:bg-gray-300 rounded-lg px-4 py-2  text-gray-900'
          type='submit'
        >
          Add Comment
        </button> */}
      </form>
    </div>
  );
};

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { User } from '@supabase/supabase-js';
import { Database } from '~/types/database';

export const addComments = async (
  pageId: string,
  commentsType: 'blog_comments' | 'recipe_comments',
  formData: React.FormEvent<HTMLFormElement>,
  user: User | null,
) => {
  try {
    formData.preventDefault();
    if (user && user.id) {
      const supabase = createClientComponentClient<Database>();
      const { comment } = formData.target as typeof formData.target &
        commentForm;
      const { data, error } = await supabase
        .from(
          commentsType === `recipe_comments`
            ? `recipe_comments`
            : `blog_comments`,
        )
        .insert({
          user_id: user.id,
          comment_text: comment.value,
          page_id: pageId,
        })
        .select();
      error
        ? error.message
        : `your message was sent ${data.map((item) => item)}`;
      comment.value = ``;
    } else alert(`you should be logged in`);
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

export const deleteComment = async (
  // formData: React.FormEvent<HTMLFormElement>,
  commentsType: 'blog_comments' | 'recipe_comments',
  user: User | null,
  commentUser: string,
  comment: string,
) => {
  try {
    if (user && user.id && user.id === commentUser) {
      const supabase = createClientComponentClient<Database>();
      const { error } = await supabase
        .from(
          commentsType === `recipe_comments`
            ? `recipe_comments`
            : `blog_comments`,
        )
        .delete()
        .eq(`comment_text`, comment);
      error ? error.message : `your message was sent`;
    }
  } catch (error) {
    if (error instanceof Error) return error.message;
  }
};

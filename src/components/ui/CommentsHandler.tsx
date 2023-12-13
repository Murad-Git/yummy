'use client';

import {
  createClientComponentClient,
  User,
} from '@supabase/auth-helpers-nextjs';
import { Comments } from '~/components/ui/Comments';
import { Database } from '~/types/database';

interface Props {
  recipeId: number;
  commentsType: 'blog_comments' | 'recipe_comments';
  // onCommentHandle: (
  //   formData: React.FormEvent<HTMLFormElement>,
  //   user: User | null,
  // ) => void;
}

export const CommentsHandler = ({ recipeId, commentsType }: Props) => {
  const onCommentHandle = async (
    formData: React.FormEvent<HTMLFormElement>,
    user: User | null,
  ) => {
    formData.preventDefault();
    if (user && user.id) {
      const supabase = createClientComponentClient<Database>();
      const { comment } = formData.target as typeof formData.target &
        commentForm;
      const { data, error } = await supabase
        .from(`recipe_comments`)
        .insert({
          user_id: user.id,
          comment_text: comment.value,
          recipe_id: recipeId,
        })
        .select();
      error
        ? console.error(error.message)
        : console.log(`your message was sent ${data.map((item) => item)}`);
    } else alert(`you should be logged in`);
  };
  // useEffect(() => {
  //   const onCommentHandle = (
  //     formData: React.FormEvent<HTMLFormElement>,
  //     user: User | null,
  //   ) => {
  //     formData.preventDefault();
  //     return console.log(`functions works`);
  //   if (user && user.id) {
  //     const supabase = createClientComponentClient<Database>();
  //     // const supabase = createPagesBrowserClient<Database>();
  //     const { comment } = formData.target as typeof formData.target &
  //       commentForm;
  //     const { data, error } = await supabase
  //       .from(`recipe_comments`)
  //       .insert({
  //         user_id: user.id,
  //         comment_text: comment.value,
  //         recipe_id: recipeId,
  //       })
  //       .select();
  //     error
  //       ? console.error(error.message)
  //       : console.log(`your message was sent ${data.map((item) => item)}`);
  //   } else alert(`you should be logged in`);
  // };
  // }, []);

  return (
    <Comments
      // recipeId={recipeId}
      commentsType={commentsType}
      onClick={onCommentHandle}
    />
  );
};

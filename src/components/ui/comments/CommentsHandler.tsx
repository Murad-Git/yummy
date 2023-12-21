'use client';

import { User } from '@supabase/auth-helpers-nextjs';
import { useState } from 'react';
import { Comments } from '~/components/ui/comments/Comments';
import { addComments, deleteComment } from '~/utils/fetch-comments';

interface Props {
  pageId: string;
  commentsType: 'blog_comments' | 'recipe_comments';
}

export const CommentsHandler = ({ pageId, commentsType }: Props) => {
  const [comState, setComState] = useState<string | undefined>(``);
  const [comDelState, setComDelState] = useState<string | undefined>(``);
  const onCommentHandle = async (
    formData: React.FormEvent<HTMLFormElement>,
    user: User | null,
  ) => {
    const res = await addComments(pageId, commentsType, formData, user);
    setComState(res);
  };
  const onCommentDelete = async (
    user: User | null,
    commentUser: string,
    comment: string,
  ) => {
    const res = await deleteComment(commentsType, user, commentUser, comment);
    setComDelState(res);
  };

  return (
    <Comments
      pageId={pageId}
      commentsType={commentsType}
      onClick={onCommentHandle}
      onDelete={onCommentDelete}
    />
  );
};

// import blockContent from 'sanity/schemas/blockContent';
import { notFound } from 'next/navigation';
import { BlogPage } from '~/pages/BlogPage';
import { getBlog } from '~/utils/sanity/sanity-helper';

interface Props {
  params: {
    blogId: string;
  };
}

export default async function Blog({ params: { blogId } }: Props) {
  const post = await getBlog(blogId);
  if (!post) notFound();

  return (
    <main className='mb-6'>
      <BlogPage post={post} />
    </main>
  );
}

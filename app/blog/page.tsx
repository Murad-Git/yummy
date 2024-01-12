import { notFound } from 'next/navigation';
import { BlogsPage } from '~/page/BlogsPage';
import { getBlogs } from '~/utils/sanity/sanity-helper';

export default async function Blogs() {
  const posts = await getBlogs();
  if (!posts) notFound();
  return (
    <main>
      <BlogsPage posts={posts} />
    </main>
  );
}

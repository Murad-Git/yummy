import Image from 'next/image';
import { BlogAuthor } from '~/components/blog/BlogAuthor';
import { BlogContent } from '~/components/blog/BlogContent';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { CommentsHandler } from '~/components/ui/comments/CommentsHandler';

interface Props {
  post: Blog;
}

export const BlogPage = ({ post }: Props) => {
  return (
    <>
      <HeroImg title={post.title ? post.title : `blog post`} img={post.image} />
      <Container>
        <div className='my-8'>
          <BlogAuthor post={post} />
        </div>
        <div className='px-6 mb-6 max-w-[60%]'>
          <div>
            <h1 className='text-3xl font-semibold mb-3'>
              {post.title ? post.title : `blog post`}
            </h1>
            <p className='text-md px-4'>{post.text}</p>
            <Image
              className='w-full mt-8'
              src={post.image || `/images/hero/blog.jpg`}
              width={500}
              height={500}
              alt='post'
            />
          </div>
          <BlogContent post={post} />
          <hr className='max-w-lg my-5 mx-auto border' />
          <div>
            <CommentsHandler pageId={post.id} commentsType='blog_comments' />
          </div>
        </div>
      </Container>
    </>
  );
};

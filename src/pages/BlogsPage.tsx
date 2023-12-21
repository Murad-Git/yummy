import Image from 'next/image';
import Link from 'next/link';
import { BlogList } from '~/components/blog/BlogList';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';

interface Props {
  posts: Blog[];
}

export const BlogsPage = ({ posts }: Props) => {
  return (
    <>
      <HeroImg title='blog' img='/images/hero/blog.jpg' />
      <Container>
        <div className='flex justify-end mt-4 items-center hover:underline underline-offset-8'>
          <h1 className='text-2xl mr-3'>Try</h1>
          <Link href='/studio'>
            <Image
              className='w-10'
              src='/logo/sanity.png'
              alt='sanity'
              height={500}
              width={500}
            />
          </Link>
        </div>
        <BlogList postsList={posts} />
      </Container>
    </>
  );
};

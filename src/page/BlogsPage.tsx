import Image from 'next/image';
import Link from 'next/link';
import { BlogList } from '~/components/blog/BlogList';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { SanityLogo } from '~/components/ui/SanityLogo';

interface Props {
  posts: Blog[];
}

export const BlogsPage = ({ posts }: Props) => {
  return (
    <>
      <HeroImg title='blog' img='/images/hero/blog.jpg' />
      <Container>
        <div className='flex justify-end mt-4 items-center hover:underline underline-offset-8'>
          <h1 className='text-2xl mr-3'>
            Try {/* Try <p className='italic'>Sanity CMS</p> */}
          </h1>
          <Link href='/studio/structure' className='text-orange-500 text-2xl'>
            <SanityLogo />
          </Link>
        </div>
        <BlogList postsList={posts} />
      </Container>
    </>
  );
};

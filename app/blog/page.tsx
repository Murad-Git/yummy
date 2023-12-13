import Image from 'next/image';
import Link from 'next/link';
import { BlogList } from '~/components/blog/BlogList';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { sanityFetch } from '~/utils/sanity/sanity-fetch';

const getBlogs = async () => {
  try {
    const query = `*[_type== 'post']{
      "id":_id,
      title,
      description,
      "image":mainImage.asset->url,
      "published":publishedAt,
      "slug":slug.current,
      "category": categories[0]->title,
      "text": body[0].children[0].text}`;
    const posts: Blog[] | [] = await sanityFetch({
      query,
      tags: [`post`, `author`],
      cache: `no-cache`,
    });
    return posts;
    // console.log(posts);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      // return {
      //   notFound: true,
      // };
    }
  }
};

export default async function Blogs() {
  const posts = await getBlogs();
  console.log(posts);
  // return <BlogList postsList={posts} />;
  return (
    <section>
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
    </section>
  );
}

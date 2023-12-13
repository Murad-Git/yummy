import Image from 'next/image';
import Link from 'next/link';

interface Props {
  post: Blog;
}
export const BlogItem = ({ post }: Props) => {
  console.log(`post`);
  console.log(post);
  return (
    <div className='shadow-md rounded-b-sm max-w-lg'>
      <Link href={`/blog/${post.slug}`}>
        <Image
          src={post.image}
          className='w-full cursor-pointer rounded-sm'
          height={500}
          width={500}
          alt='blog'
        />
      </Link>
      <div className='px-8 pb-1 pt-6 h-48 hover:bg-gray-100'>
        <Link href={`/blog/${post.slug}`}>
          <h2 className='mb-3 cursor-pointer text-xl font-bold hover:text-gray-600'>
            {post.title}
          </h2>
        </Link>
        <p className='line-clamp-2 inline-block'>{post.text}</p>
        <p className='text-xs mt-1'>
          Published on{` `}
          {new Date(post?.published).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

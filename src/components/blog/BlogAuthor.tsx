import Image from 'next/image';

interface Props {
  post: Blog;
}

export const BlogAuthor = ({ post }: Props) => {
  return (
    <div className='flex items-center space-x-3'>
      <Image
        className='w-20 rounded-full'
        src={post.authorImg || `/images/profile/no-person.png`}
        width={500}
        height={500}
        alt={post?.author || `author`}
      />
      {` `}
      <h3>{post?.author}</h3>
      <p>
        Published on{` `}
        {new Date(post?.published).toLocaleDateString()}
      </p>
    </div>
  );
};

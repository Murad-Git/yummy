import { BlogItem } from '~/components/blog/BlogItem';

interface Props {
  postsList: Blog[] | undefined;
}

export const BlogList = ({ postsList }: Props) => {
  return (
    <section className='my-10'>
      <div className='grid grid-cols-fluid-three md:grid-cols-fluid-five gap-6'>
        {!!postsList &&
          postsList.map((post) => <BlogItem key={post.id} post={post} />)}
      </div>
    </section>
  );
};

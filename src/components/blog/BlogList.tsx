import { BlogItem } from '~/components/blog/BlogItem';

interface Props {
  postsList: Blog[] | undefined;
}

export const BlogList = ({ postsList }: Props) => {
  return (
    <section className='my-10'>
      <div className='grid md:grid-cols-fluid-five gap-6'>
        {!!postsList?.length &&
          postsList.map((post) => <BlogItem key={post.id} post={post} />)}
      </div>
    </section>
  );
};

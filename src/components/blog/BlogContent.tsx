import PortableText from 'react-portable-text';

interface Props {
  post: Blog;
}

export const BlogContent = ({ post }: Props) => {
  return (
    <div className='my-6'>
      <PortableText
        className=''
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={post.body}
        serializers={{
          h1: (props: any) => (
            <h1 className='text-2xl font-bold my-5' {...props} />
          ),
          p: (props: any) => (
            <p className='text-2xl font-bold my-5' {...props} />
          ),
          span: ({ children }: any) => (
            <span className='text-2xl font-bold my-5'>{children}</span>
          ),

          h2: (props: any) => (
            <h2 className='text-xl font-bold my-5' {...props} />
          ),
          li: ({ children }: any) => (
            <li className='ml-4 list-disc'>{children}</li>
          ),
          link: ({ href, children }: any) => (
            <a href={href} className='text-blue-500 hover:underline'>
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

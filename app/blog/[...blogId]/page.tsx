// import blockContent from 'sanity/schemas/blockContent';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';
import { FormEvent } from 'react';
import PortableText from 'react-portable-text';
import { User } from 'sanity';
import { HeroImg } from '~/components/header/HeroImg';
import Container from '~/components/layout/Container';
import { Comments } from '~/components/ui/Comments';
import { sanityFetch } from '~/utils/sanity/sanity-fetch';

interface Props {
  params: {
    blogId: string;
  };
}

const getBlog = async (blogId: string) => {
  try {
    const query = `*[_type== 'post' && slug.current == "${blogId}"][0]{
      "id":_id,
      title,
      description,
      "image":mainImage.asset->url,
      "published":publishedAt,
      "slug":slug.current,
      "category": categories[0]->title,
      "text": body[0].children[0].text,
      "author":author->name,
      "authorImg":author->image.asset->url,
      body,
      'comments': *[
        _type=="comment" && post._ref == ^._id
      ]
}`;
    const posts: Blog = await sanityFetch({
      query,
      tags: [`post`, `author`],
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

export default async function BlogPage({ params: { blogId } }: Props) {
  const post = await getBlog(blogId);
  const supabase = createServerComponentClient({ cookies });
  // const onCommentHandle = async (
  //   formData: React.FormEvent<HTMLFormElement>,
  //   user: User | null,
  // ) => {
  //   formData.preventDefault();
  //   if (user && user.id) {
  //     const supabase = createPagesBrowserClient<Database>();
  //     const { comment } = formData.target as typeof formData.target &
  //       commentForm;
  //     const { data, error } = await supabase
  //       .from(`recipe_comments`)
  //       .insert({
  //         user_id: user.id,
  //         comment_text: comment.value,
  //         blog_id: blogId,
  //       })
  //       .select();
  //     error
  //       ? console.error(error.message)
  //       : console.log(`your message was sent ${data.map((item) => item)}`);
  //   } else alert(`you should be logged in`);
  // };
  //   const query = `*[_type== 'comment' && post._ref == "${blogId}"][0]{
  //       comment,
  //         name,
  //         "created":_createdAt
  // }`;
  // const params = { blogId };
  // const subscription = client.listen(query).subscribe((update) => {
  //   client.fetch(query).then((data) => console.log(`compeleted`, data));
  //   const comment = update.result;
  //   console.log(`comment`);
  //   console.log(comment);
  // });
  // subscription.unsubscribe();
  // const subscription = client
  //   .listen(commentQuery(blogId))
  //   .subscribe((update) => {
  //     const comment = update.result;
  //     console.log(`comment`);
  //     console.log(comment);
  //   });
  // console.log(subscription);
  const commentHandle = async (
    formData: FormEvent<HTMLFormElement>,
    // DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
    // formData: React.FormEvent<HTMLFormElement>,
    user: User | null,
  ) => {
    'use server';
    // formData.preventDefault();

    try {
      console.log(formData);
      if (user && user.id) {
        // const supabase = createClientComponentClient<Database>();
        // const { comment } = formData.target as typeof formData.target &
        //   commentForm;
        // const name = formData.get(`name`);
        const comment = formData.get(`comment`);
        console.log(`post.id`);
        console.log(post?.id);
        const { data, error } = await supabase
          .from(`blog_comments`)
          .insert({
            user_id: user.id,
            comment_text: comment,
            blog_id: post?.id,
          })
          .select();
        error
          ? console.error(error.message)
          : console.log(`your message was sent ${data.map((item) => item)}`);
        // formData.preventDefault();
      }
      // const name = formData.get(`name`);
      // const comment = formData.get(`comment`);
      // const req = await client.create({
      //   _type: `comment`,
      //   post: {
      //     _type: `reference`,
      //     _ref: `${post && post.id}`,
      //   },
      //   name,
      //   comment,
      // });
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  };

  const deleteComment = async (text: string, userId: string) => {
    'use server';
    const userData = await supabase.auth.getUser();
    const user_id = userData.data.user?.id;
    console.log(`user_id, useId, text`);
    console.log(user_id, userId, text);
    // if (userId === user_id) {
    //   const { error } = await supabase
    //     .from(`blog_comments`)
    //     .delete()
    //     .eq(`comment_text`, text);

    //   error
    //     ? console.error(error.message)
    //     : console.log(`your comment was deleted`);
    // } else alert(`you can only delete your own comments`);
  };

  return (
    <section className='mb-6'>
      {post ? (
        <>
          <HeroImg title={post.title || `blog post`} img={post?.image} />
          <Container>
            <div className='my-8'>
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
            </div>
            <div className='px-6 mb-6 max-w-[60%]'>
              <div>
                <h1 className='text-3xl font-semibold mb-3'>{post.title}</h1>
                <p className='text-md px-4'>{post?.text}</p>
                <Image
                  className='w-full mt-8'
                  src={post?.image || `/images/hero/blog.jpg`}
                  width={500}
                  height={500}
                  alt='post'
                />
              </div>
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
                      <span className='text-2xl font-bold my-5'>
                        {children}
                      </span>
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
                {/* <BlockContent
                  blocks={post.body}
                  serializers={{
                    types: {
                      code: (props: any) => (
                        <pre
                          className='[&>*]:p-4'
                          data-language={props.node.language}
                        >
                          <code className='[&>*]:p-4'>{props.node.code}</code>
                        </pre>
                      ),
                    },
                  }}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                /> */}
              </div>
              <hr className='max-w-lg my-5 mx-auto border' />
              <h1 className='my-8 text-2xl font-bold'>Comments</h1>
              {/* <ul>
                {post.comments.map((comment) => (
                  <li key={comment._id}>
                    <h3>{comment.name}</h3>
                    <p>{comment._updatedAt}</p>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul> */}
              <div>
                <Comments
                  onClick={commentHandle}
                  onDelete={deleteComment}
                  commentsType='blog_comments'
                />
                {/* <CommentsHandler
                  recipeId={Number(blogId)}
                  commentsType='blog_comments'
                /> */}
                {/* <Comments
                  commentsType='blog_comments'
                  onCommentHandle={onCommentHandle}
                /> */}
                {/* <form
                  action={commentHandle}
                  // onSubmit={(formData) => commentHandle(formData)}
                >
                  <label htmlFor='name'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      about='names'
                      className='text-gray-900 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:border-gray-500 focus:ring-0 pr-4'
                      placeholder='Your name'
                      required
                    />
                  </label>
                  <label
                    htmlFor='comment
                  '
                  >
                    <input
                      type='text'
                      id='comment'
                      name='comment'
                      about='comments'
                      className='text-gray-900 border border-gray-300 rounded-lg w-1/2 focus:outline-none focus:border-gray-500 focus:ring-0 pr-4'
                      placeholder='This is my favourite meal'
                      required
                    />
                  </label>
                  <button
                    className='hover:bg-gray-300 rounded-lg px-4 py-2  text-gray-900'
                    type='submit'
                  >
                    Add Comment
                  </button>
                </form> */}
                {/* {errorMsg && <div className='text-red-600'>{errorMsg}</div>} */}
              </div>
            </div>
          </Container>
        </>
      ) : (
        <p>We could not find your post</p>
      )}
      {/* <BlogComments blogId={blogId} post={post} /> */}
    </section>
  );
}

'use client';
import { useCallback, useEffect, useState } from 'react';
import { client } from '~/utils/sanity/sanity-client';

export const BlogComments = ({
  blogId,
  post,
}: {
  blogId: string;
  post: Blog;
}) => {
  const [docs, setDocs] = useState([]);
  const query = `*[_type== 'comment' && post._ref == "${blogId}"][0]{
      comment,
        name,
        "created":_createdAt
}`;
  // const query = '*[_type == "comment" && authorId != $ownerId]';
  // const params = { ownerId: 'bikeOwnerUserId' };

  // client.listen(query).subscribe((update) => {
  //   const comment = update.result;
  //   console.log(`${comment.author} commented: ${comment.text}`);
  // });
  const commentHandle = useCallback(
    async (formData: any) => {
      formData.preventDefault();
      try {
        const name = formData.currentTarget.name.value.return;
        const comment = formData.currentTarget.comment.value;
        const req = await client.create({
          _type: `comment`,
          post: {
            _type: `reference`,
            _ref: `${post && post.id}`,
          },
          name,
          comment,
        });
        console.log(`req`);
        console.log(req);
      } catch (error) {
        if (error instanceof Error) console.error(error.message);
      }
    },
    [post],
  );
  useEffect(() => {
    // client.fetch(blogId).then(setDocs);
    const subscription = client.listen(query).subscribe((update) => {
      console.log(`update`);
      console.log(update);
      setDocs(update.result);

      // client.fetch(query).then((data) => {
      //   setDocs(data);
      //   console.log(`data`);
      //   console.log(data);
      // });
    });
    const checkfetch = async () => {
      fetch(
        `https://tsv70vqx.api.sanity.io/v2021-06-07/data/listen/production?query=${query}`,
      );
    };
    // return () => {
    //   subscription.unsubscribe();
    // };
  }, [commentHandle, blogId]);
  console.log(`docs`);
  console.log(docs);

  return (
    <>
      <h1>Documents</h1>
      <div>
        <form
          onSubmit={commentHandle}
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
        </form>
      </div>
      {/* <small>{docs.length} documents</small> */}
      <ul>
        {/* <li>{docs}</li> */}
        {/* {docs.map((d,index) => (
          <li key={index}>
          <Link to={`/doc/${d._id}`}>
            ({d._type}) {d._id}
          </Link>
          </li>
        ))} */}
      </ul>
    </>
  );
};

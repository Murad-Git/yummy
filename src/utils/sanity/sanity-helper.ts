import { sanityFetch } from '~/utils/sanity/sanity-fetch';

export const getBlogs = async () => {
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
  } catch (error) {
    error instanceof Error && error.message;
  }
};

export const getBlog = async (blogId: string) => {
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
  } catch (error) {
    error instanceof Error && error.message;
  }
};

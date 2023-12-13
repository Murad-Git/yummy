import { defineField, defineType } from 'sanity';

export default defineType({
  name: `comment`,
  type: `document`,
  title: `Comment`,
  fields: [
    defineField({
      name: `name`,
      type: `text`,
      title: `Name`,
    }),
    // defineField({
    //   name: `email`,
    //   title: `Email`,
    //   type: `text`,
    // }),
    defineField({
      name: `comment`,
      title: `Comment`,
      type: `text`,
    }),
    defineField({
      name: `post`,
      title: `Post`,
      type: `reference`,
      to: [{ type: `post` }],
    }),
  ],
});

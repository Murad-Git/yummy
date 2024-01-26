const date = new Date();
const year = new Intl.DateTimeFormat(`en`, { year: `numeric` }).format(date);
const month = new Intl.DateTimeFormat(`en`, { month: `long` }).format(date);
const day = new Intl.DateTimeFormat(`en`, { day: `2-digit` }).format(date);
export const formattedDate = `${month} ${day}, ${year}`;

export const idGenerator = `id` + Math.random().toString(16).slice(2);

export const sortComments = (comments: RecipeComment[]) => {
  return comments.sort(
    (a, b) =>
      new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
  );
};

export const makeSlug = (id: number, title: string) => {
  const formatTitle =
    title.length > 1
      ? title
          .split(` `)
          .map((letter) => letter.toLocaleLowerCase())
          .join(`-`)
      : title;

  return `/recipes/${id}/${formatTitle}`;
};

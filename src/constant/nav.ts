export const navRecipes = [
  { id: 1, text: `pizza`, src: `/` },
  { id: 2, text: `hamburgers`, src: `/` },
  { id: 3, text: `pasta`, src: `/` },
  { id: 4, text: `ramen`, src: `/` },
  { id: 5, text: `paella`, src: `/` },
  { id: 6, text: `moussaka`, src: `/` },
  { id: 7, text: `sushi`, src: `/` },
];
export const navCategory = [
  { id: 1, text: `american`, src: `/` },
  { id: 2, text: `british`, src: `/` },
  { id: 3, text: `chinese`, src: `/` },
  { id: 4, text: `mexican`, src: `/` },
  { id: 5, text: `european`, src: `/` },
  { id: 6, text: `french`, src: `/` },
  { id: 7, text: `italian`, src: `/` },
  { id: 8, text: `indian`, src: `/` },
  { id: 9, text: `japanese`, src: `/` },
  { id: 10, text: `mediterranean`, src: `/` },
];

export const navDishes = [
  { id: 1, text: `main course`, src: `/` },
  { id: 2, text: `side dish`, src: `/` },
  { id: 3, text: `breakfast`, src: `/` },
  { id: 4, text: `soup`, src: `/` },
  { id: 5, text: `dessert`, src: `/` },
  { id: 6, text: `salad`, src: `/` },
  { id: 7, text: `drink`, src: `/` },
];

export const navList = [
  {
    id: 1,
    name: `Recipes`,
    subRecipes: [
      { id: 1, text: `pizza`, src: `/search?term=pizza&type=recipe` },
      { id: 2, text: `hamburgers`, src: `/search?term=hamburgers&type=recipe` },
      { id: 3, text: `pasta`, src: `/search?term=pasta&type=recipe` },
      { id: 4, text: `ramen`, src: `/search?term=ramen&type=recipe` },
      { id: 5, text: `paella`, src: `/search?term=paella&type=recipe` },
      { id: 6, text: `moussaka`, src: `/search?term=moussaka&type=recipe` },
      { id: 7, text: `sushi`, src: `/search?term=sushi&type=recipe` },
    ],
  },
  {
    id: 2,
    name: `Category`,
    subRecipes: [
      { id: 1, text: `american`, src: `/category/american` },
      { id: 2, text: `british`, src: `/category/british` },
      { id: 3, text: `chinese`, src: `/category/chinese` },
      { id: 4, text: `mexican`, src: `/category/mexican` },
      { id: 5, text: `european`, src: `/category/european` },
      { id: 6, text: `french`, src: `/category/french` },
      { id: 7, text: `italian`, src: `/category/italian` },
      { id: 8, text: `indian`, src: `/category/indian` },
      { id: 9, text: `japanese`, src: `/category/japanese` },
      { id: 10, text: `mediterranean`, src: `/category/mediterranean` },
    ],
  },
  {
    id: 3,
    name: `Dishes`,
    subRecipes: [
      { id: 1, text: `main course`, src: `/category/main course` },
      { id: 2, text: `side dish`, src: `/category/side dish` },
      { id: 3, text: `breakfast`, src: `/category/breakfast` },
      { id: 4, text: `soup`, src: `/category/soup` },
      { id: 5, text: `dessert`, src: `/category/dessert` },
      { id: 6, text: `salad`, src: `/category/salad` },
      { id: 7, text: `drink`, src: `/category/drink` },
    ],
  },
];

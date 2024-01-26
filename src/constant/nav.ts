export const navList = [
  {
    id: 1,
    name: `Recipes`,
    subRecipes: [
      { id: 1, text: `pizza`, src: `/search?term=pizza&type=query` },
      { id: 2, text: `hamburgers`, src: `/search?term=hamburgers&type=query` },
      { id: 3, text: `pasta`, src: `/search?term=pasta&type=query` },
      { id: 4, text: `ramen`, src: `/search?term=ramen&type=query` },
      { id: 5, text: `paella`, src: `/search?term=paella&type=query` },
      { id: 6, text: `moussaka`, src: `/search?term=moussaka&type=query` },
      { id: 7, text: `sushi`, src: `/search?term=sushi&type=query` },
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
      {
        id: 1,
        text: `main course`,
        src: `/search?term=main course&type=query`,
      },
      { id: 2, text: `side dish`, src: `/search?term=side dish&type=query` },
      { id: 3, text: `breakfast`, src: `/search?term=breakfast&type=query` },
      { id: 4, text: `soup`, src: `/search?term=soup&type=query` },
      { id: 5, text: `dessert`, src: `/search?term=dessert&type=query` },
      { id: 6, text: `salad`, src: `/search?term=salad&type=query` },
      { id: 7, text: `drink`, src: `/search?term=drink&type=query` },
    ],
  },
];

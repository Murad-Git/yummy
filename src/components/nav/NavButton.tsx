interface Props {
  item: string;
  isActive: boolean;
  setCategories: (prev: string) => void;
}

export const NavButton = ({ item, setCategories, isActive }: Props) => {
  const onChangeCategory = (item: string) => {
    setCategories(item);
    // window.history.replaceState({cuisine:item}, item, `?cuisine=${item}`);
  };
  return (
    <li
      onClick={() => onChangeCategory(item)}
      className={`navLink ${
        !!isActive && `link--active`
      } text-2xl font-semibold`}
    >
      {item}
    </li>
  );
};

const useNavbar = () => {
  const mapMenu = (menus: string[]) =>
    menus.map((menu: string, i: number) => (
      <li key={i}>
        <a>{menu}</a>
      </li>
    ));

  return { mapMenu };
};
export default useNavbar;

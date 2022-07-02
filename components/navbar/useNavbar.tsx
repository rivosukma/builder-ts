import { Fragment, ReactElement } from "react";

const useNavbar = () => {
  function todo() {
    console.log("navbar data here");
  }

  return { todo };
};
export default useNavbar;

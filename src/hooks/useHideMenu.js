import { useContext, useEffect } from "react";
import { UIContext } from "../context/UIContext";

const useHideMenu = (hidde) => {
  const { showMenu, hideMenu } = useContext(UIContext);
  useEffect(() => {
    if (hidde) {
      hideMenu();
    } else {
      showMenu();
    }
  }, [hidde, hideMenu, showMenu]);
};

export default useHideMenu;

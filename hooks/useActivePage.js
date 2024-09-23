import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../redux/pageSlice";

export const useActivePage = () => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.page.activePage);

  const updateActivePage = (page) => {
    dispatch(setActivePage(page));
  };

  return { activePage, updateActivePage };
};

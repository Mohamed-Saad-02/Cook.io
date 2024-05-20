import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  getCurrentItem,
  removeItem,
} from "../redux/slices/saved recipes/savedSlice";
import toast from "react-hot-toast";

function useSaveRecipe(id, recipe, link) {
  const isFound = useSelector(getCurrentItem(id));
  const dispatch = useDispatch();

  const handleSaveRecipe = () => {
    if (isFound) {
      dispatch(removeItem(id));
      toast.success("Recipe UnSaved");
    } else {
      dispatch(addItems({ recipe, link, id }));
      toast.success("Recipe Saved");
    }
  };

  return { handleSaveRecipe, isFound };
}

export default useSaveRecipe;

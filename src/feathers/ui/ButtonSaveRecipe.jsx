import PropTypes from "prop-types";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import Button from "./Button";
import useSaveRecipe from "../../hooks/useSaveRecipe";

function ButtonSaveRecipe({ id, recipe, link, kind = "", type = "" }) {
  const { handleSaveRecipe, isFound } = useSaveRecipe(id, recipe, link);

  return (
    <Button
      kind={kind}
      className={
        type === "icon"
          ? "ml-auto p-1 text-xl"
          : "flex items-center gap-x-2 px-3 py-2"
      }
      onClick={handleSaveRecipe}
    >
      {!isFound ? (
        <>
          <IoBookmarkOutline className="text-xl" />
          {type !== "icon" && <span className="font-medium">Save</span>}
        </>
      ) : (
        <>
          <IoBookmark />
          {type !== "icon" && <span className="font-medium">UnSave</span>}
        </>
      )}
    </Button>
  );
}

export default ButtonSaveRecipe;

ButtonSaveRecipe.propTypes = {
  recipe: PropTypes.object,
  id: PropTypes.string,
  link: PropTypes.object,
  type: PropTypes.string,
  kind: PropTypes.string,
};

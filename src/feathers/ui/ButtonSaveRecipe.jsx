import PropTypes from "prop-types";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import useSaveRecipe from "../../hooks/useSaveRecipe";

function ButtonSaveRecipe({ id, recipe, link, kind = "", type = "" }) {
  const { handleSaveRecipe, isFound } = useSaveRecipe(id, recipe, link);

  return (
    <button
      kind={kind}
      aria-label="Save Recipes"
      className={`${
        type === "icon"
          ? "ml-auto p-1 text-xl"
          : "flex items-center gap-x-2 px-3 py-2"
      } rounded bg-light-active-indicator transition-all duration-300 hover:bg-light-primary hover:text-white`}
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
    </button>
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

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/slices/search recipes/searchRecipesSlice";

const RecipesItems = ({ children }) => {
  const { error } = useSelector(getItems);

  if (error)
    return <div className="h-fit w-full pt-8 text-center">{error}</div>;

  return (
    <div className="recipes-items relative flex-1 overflow-y-auto px-6 py-4">
      {children}
    </div>
  );
};

export default RecipesItems;

RecipesItems.propTypes = {
  children: PropTypes.node,
};

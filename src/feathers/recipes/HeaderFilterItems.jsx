import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getItems } from "../../redux/slices/search recipes/searchRecipesSlice";
import Button from "../ui/Button";
import { MdFilterList } from "react-icons/md";

function HeaderFilterItems({ isActiveFilter }) {
  const { loading: isLoading, searchQuery } = useSelector(getItems);

  return (
    <div className="flex items-center justify-between pb-6">
      {isLoading === "succeeded" && (
        <h2 className="text-2xl font-medium">
          All{" "}
          {searchQuery && (
            <span className="capitalize text-light-primary">
              {" "}
              {searchQuery}{" "}
            </span>
          )}
          Recipes
        </h2>
      )}
      <Button
        kind="second"
        className="flex items-center gap-3 rounded px-3 py-1 lg:hidden"
        onClick={isActiveFilter}
      >
        <MdFilterList className="text-3xl" />{" "}
        <span className="medium">Filter</span>
      </Button>
    </div>
  );
}

export default HeaderFilterItems;

HeaderFilterItems.propTypes = {
  isActiveFilter: PropTypes.func,
};

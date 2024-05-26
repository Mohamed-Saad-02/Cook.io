import PropTypes from "prop-types";
import { MdFilterList } from "react-icons/md";
import SearchRecipe from "./Filter option/SearchRecipe";
import { IoClose } from "react-icons/io5";
import Button from "../ui/Button";

const style = {
  aside: `filter-items absolute right-0 top-0 z-30 h-full w-72 overflow-y-auto border-r border-l-light-outline bg-white shadow transition-all duration-300 lg:static lg:translate-x-0 lg:border-r-light-outline lg:bg-none`,
};

function FilterRecipes({ children, activeFilter, handleActiveFilter }) {
  return (
    <aside
      className={`${style.aside} ${activeFilter ? "translate-x-0" : "translate-x-72"}`}
    >
      <div className="flex h-full flex-col pt-4">
        <div className="flex items-center justify-between px-3">
          <div className="icon flex items-center gap-x-3">
            <MdFilterList className="text-3xl" />
            <h2 className="font-medium">Filters</h2>
          </div>
          <Button
            kind="solid"
            className="px-2 py-1 text-2xl lg:hidden"
            onClick={handleActiveFilter}
          >
            <IoClose />
          </Button>
        </div>
        <SearchRecipe />
        {children}
      </div>
    </aside>
  );
}

export default FilterRecipes;

FilterRecipes.propTypes = {
  children: PropTypes.node,
  activeFilter: PropTypes.bool,
  handleActiveFilter: PropTypes.func,
};

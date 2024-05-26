import { useState } from "react";
import FilterRecipes from "./FilterRecipes";
import RecipesItems from "./RecipesItems";
import HeaderFilterItems from "./HeaderFilterItems";
import Feathers from "./Feathers";
import RecipesItemData from "./RecipesItemData";

function Recipes() {
  const [activeFilter, setActiveFilter] = useState(false);

  function handleActiveFilter() {
    setActiveFilter((prev) => !prev);
  }

  return (
    <div className="relative flex h-auto flex-1 overflow-hidden pt-20">
      <FilterRecipes
        activeFilter={activeFilter}
        handleActiveFilter={handleActiveFilter}
      >
        <Feathers />
      </FilterRecipes>
      <RecipesItems>
        <HeaderFilterItems isActiveFilter={handleActiveFilter} />
        <RecipesItemData />
      </RecipesItems>
    </div>
  );
}

export default Recipes;

import FilterRecipes from "./FilterRecipes";
import RecipesItem from "./RecipesItem";

function Recipes() {
  return (
    <div className="flex h-auto flex-1 pt-20">
      <FilterRecipes />
      <RecipesItem />
    </div>
  );
}

export default Recipes;

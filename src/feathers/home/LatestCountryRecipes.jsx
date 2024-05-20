import PropTypes from "prop-types";
import useSearchRecipes from "../../hooks/useSearchRecipes";
import CardRecipe from "../ui/CardRecipe";
import CardShowMore from "../ui/CardShowMore";

function LatestCountryRecipes({ countryRecipe }) {
  const { isLoading, recipes, error } = useSearchRecipes(
    `cuisineType=${countryRecipe}`,
  );

  if (error) return;

  return (
    <div className="country-recipes py-10">
      <h2 className="text-2xl font-semibold">Latest {countryRecipe} Recipes</h2>
      <div className="recipes mt-8 flex gap-x-3 overflow-hidden overflow-x-auto rounded pb-4">
        {!isLoading &&
          recipes &&
          recipes.map((item) => (
            <div key={item.recipe.image} className="min-w-72">
              <CardRecipe link={item._links} recipe={item.recipe} />
            </div>
          ))}
        <CardShowMore />
      </div>
    </div>
  );
}

export default LatestCountryRecipes;

LatestCountryRecipes.propTypes = {
  countryRecipe: PropTypes.string.isRequired,
};

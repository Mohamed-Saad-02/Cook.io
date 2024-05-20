import { useCallback, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardRecipe from "../ui/CardRecipe";
import Spinner from "../ui/Spinner";
import actGetRecipesSearch from "../../redux/slices/search recipes/actSearchRecipes";
import {
  clearRecipes,
  getItems,
  getQuery,
} from "../../redux/slices/search recipes/searchRecipesSlice";
import actMoreRecipes from "../../redux/slices/search recipes/actMoreRecipes";

const recipesQuery = `&dishType=Biscuits%20and%20cookies&dishType=Drinks&dishType=Pancake&dishType=Salad&dishType=Soup&dishType=Sweets`;

const RecipesItem = () => {
  const exploreMore = useRef(null);

  const {
    recipesSearched: recipes,
    loading: isLoading,
    error,
    searchQuery,
    nextPage,
  } = useSelector(getItems);

  const dispatch = useDispatch();

  const memoizeMoreData = useCallback(() => {
    dispatch(actMoreRecipes());
    dispatch(getQuery(""));
  }, [dispatch]);

  useEffect(() => {
    if (recipes.length === 0 && searchQuery.length <= 2)
      dispatch(
        actGetRecipesSearch({
          word: "",
          queries: recipesQuery,
        }),
      );

    return () => dispatch(clearRecipes());
  }, []);

  useEffect(() => {
    const button = exploreMore.current;
    button.addEventListener("click", memoizeMoreData);
    return () => {
      button.removeEventListener("click", memoizeMoreData);
      dispatch(clearRecipes());
    };
  }, [memoizeMoreData]);

  if (error)
    return <div className="h-fit w-full pt-8 text-center">{error}</div>;

  return (
    <div className="recipes-items relative flex-1 overflow-y-auto px-6 py-4">
      {isLoading === "succeeded" && (
        <h2 className="pb-6 text-2xl font-medium">
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

      <div className="grid-col-6 gap-x-6 gap-y-4">
        {isLoading === "pending" && <Spinner />}

        {recipes.map((item) => (
          <CardRecipe
            key={Math.random()}
            link={item._links}
            recipe={item.recipe}
          />
        ))}
      </div>

      <button
        ref={exploreMore}
        className={`mx-auto mt-8 flex items-center gap-x-3 rounded-md bg-light-primary ${nextPage && "px-3 py-2"} text-white transition-all duration-300 hover:bg-light-primary-hover`}
      >
        {nextPage && "Explore More"}
      </button>
    </div>
  );
};

export default RecipesItem;

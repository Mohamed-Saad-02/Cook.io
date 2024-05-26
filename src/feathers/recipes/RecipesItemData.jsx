import { useDispatch, useSelector } from "react-redux";
import {
  clearRecipes,
  getItems,
  getQuery,
} from "../../redux/slices/search recipes/searchRecipesSlice";
import Spinner from "../ui/Spinner";
import CardRecipe from "../ui/CardRecipe";
import { useCallback, useEffect, useRef } from "react";
import actGetRecipesSearch from "../../redux/slices/search recipes/actSearchRecipes";
import actMoreRecipes from "../../redux/slices/search recipes/actMoreRecipes";

const recipesQuery = `&dishType=Biscuits%20and%20cookies&dishType=Drinks&dishType=Pancake&dishType=Salad&dishType=Soup&dishType=Sweets`;

function RecipesItemData() {
  const exploreMore = useRef(null);

  const {
    recipesSearched: recipes,
    loading: isLoading,
    nextPage,
    searchQuery,
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

  return (
    <>
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
    </>
  );
}

export default RecipesItemData;

import { useDispatch, useSelector } from "react-redux";
import {
  clearRecipes,
  getQuery,
  getSearchQuery,
} from "../../../redux/slices/search recipes/searchRecipesSlice";
import actGetRecipesSearch from "../../../redux/slices/search recipes/actSearchRecipes";
import { memo, useEffect } from "react";

const inputStyle =
  "w-full rounded border-2 border-light-input-outline p-3 text-sm transition-all duration-300 focus:border-2 focus:border-light-primary focus:outline-0";

const SearchRecipe = memo(function SearchRecipe() {
  const dispatch = useDispatch();

  const query = useSelector(getSearchQuery);

  const handleSearchRecipes = (e) => {
    const value = e.target.value;
    dispatch(getQuery(value));
    if (value.length === 0) dispatch(clearRecipes());
  };

  useEffect(() => {
    if (query.length >= 3) {
      dispatch(
        actGetRecipesSearch({
          word: query,
        }),
      );
    }
  }, [query, dispatch]);

  return (
    <div className="search mt-4 px-3">
      <input
        type="search"
        name="search"
        placeholder="Search Recipe..."
        onChange={handleSearchRecipes}
        className={inputStyle}
        value={query}
      />
    </div>
  );
});

export default SearchRecipe;

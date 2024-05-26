import { useCallback, useEffect, useRef } from "react";
import Calories from "./Filter option/Calories";
import CookingTime from "./Filter option/CookingTime";
import Cuisine from "./Filter option/Cuisine";
import Diet from "./Filter option/Diet";
import Dish from "./Filter option/Dish";
import Health from "./Filter option/Health";
import Ingredients from "./Filter option/Ingredients";
import Meal from "./Filter option/Meal";
import actGetRecipesSearch from "../../redux/slices/search recipes/actSearchRecipes";
import { useDispatch } from "react-redux";

function Feathers() {
  const selectedTags = useRef({});
  const clearBtn = useRef(null);
  const fetchFilterRecipes = useRef(null);

  const dispatch = useDispatch();

  const handleSelectTagFetch = (value) => {
    selectedTags.current = { ...selectedTags.current, ...value };
  };

  const memoizeFetchRecipes = useCallback(() => {
    const isContainKey = Object.keys(selectedTags.current).length;

    if (isContainKey === 0) return;

    const {
      time = "",
      ingr = "",
      calories = "",
      diet = "",
      health = "",
      mealType = "",
      dishType = "",
      cuisineType = "",
    } = selectedTags.current;

    dispatch(
      actGetRecipesSearch({
        word: "",
        queries: `${time && `&time=${time}`}${ingr && `&ingr=${ingr}`}${calories && `&calories=${calories}`}${diet && `&diet=${diet}`}${health && `&health=${health}`}${mealType && `&mealType=${mealType}`}${dishType && `&dishType=${dishType}`}${cuisineType && `&cuisineType=${cuisineType}`}`,
      }),
    );
  }, [dispatch]);

  useEffect(() => {
    const buttonFilterFetch = fetchFilterRecipes.current;
    buttonFilterFetch.addEventListener("click", memoizeFetchRecipes);

    return () =>
      buttonFilterFetch.removeEventListener("click", memoizeFetchRecipes);
  }, [memoizeFetchRecipes]);

  useEffect(() => {
    const filterOptions = document.querySelectorAll("aside .filter-options li");
    const btn = clearBtn.current;

    const handleRemoveTags = () => {
      selectedTags.current = {};
      filterOptions.forEach((el) => {
        el.classList.remove("bg-light-badge-btn");
      });
    };

    btn.addEventListener("click", handleRemoveTags);
    return () => btn.removeEventListener("click", handleRemoveTags);
  }, []);

  return (
    <>
      <CookingTime addTag={handleSelectTagFetch} />
      <Ingredients addTag={handleSelectTagFetch} />
      <Calories addTag={handleSelectTagFetch} />
      <Diet addTag={handleSelectTagFetch} />
      <Health addTag={handleSelectTagFetch} />
      <Meal addTag={handleSelectTagFetch} />
      <Dish addTag={handleSelectTagFetch} />
      <Cuisine addTag={handleSelectTagFetch} />

      <div className="mt-auto flex gap-3 px-3 py-4">
        <button
          className="flex-1 rounded border border-light-outline transition-all duration-300 hover:bg-light-background"
          ref={clearBtn}
        >
          Clear
        </button>
        <button
          className="flex flex-1 items-center justify-center gap-x-3 rounded-md bg-light-primary px-3 py-2 text-white transition-all duration-300 hover:bg-light-primary-hover"
          ref={fetchFilterRecipes}
        >
          Apply
        </button>
      </div>
    </>
  );
}

export default Feathers;

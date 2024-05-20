import { useState } from "react";
import Tabs from "./Tabs";
import CardRecipe from "../ui/CardRecipe";
import Spinner from "../ui/Spinner";
import Button from "../ui/Button";
import useSearchRecipes from "../../hooks/useSearchRecipes";
import { useNavigate } from "react-router-dom";

function MealType() {
  const [tab, setTab] = useState("Breakfast");
  const { recipes, isLoading, error } = useSearchRecipes(
    `mealType=${tab}&field=image&field=label&field=totalTime`,
  );

  const navigate = useNavigate();

  const handleShowTab = (value) => {
    setTab(() => value);
  };

  const handleNextFetchRecipes = () => {
    navigate("/recipes");
  };

  if (error) return;

  return (
    <div className="food min-h-screen">
      <Tabs tab={tab} selectTab={handleShowTab} />
      <div className="grid-col-6 gap-x-6 gap-y-4 py-4">
        {isLoading && <Spinner />}
        {!isLoading &&
          recipes &&
          recipes.map((item) => (
            <CardRecipe
              key={item.recipe.image}
              link={item._links}
              recipe={item.recipe}
            />
          ))}
      </div>
      {!isLoading && (
        <div className="flex items-center justify-center py-4">
          <Button
            kind="second"
            className="px-3 py-2"
            onClick={handleNextFetchRecipes}
          >
            Show more
          </Button>
        </div>
      )}
    </div>
  );
}

export default MealType;

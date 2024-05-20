import Button from "../ui/Button";
import { formatTime } from "../../helper";
import PropTypes from "prop-types";
import ButtonSaveRecipe from "../ui/ButtonSaveRecipe";

function InfoDetail({ recipe = {}, id, link = {} }) {
  const { label, totalTime, calories, ingredientLines, dietLabels } = recipe;

  return (
    <div className="info flex-1 pb-4">
      <div className="caption flex items-center gap-x-2 md:gap-x-6">
        <h2 className="font-secondary text-2xl md:text-4xl">{label}</h2>
        <ButtonSaveRecipe id={id} recipe={recipe} link={link} kind="second" />
      </div>
      <div className="results mt-6 flex items-center ">
        <div className="border-r border-r-light-outline py-3 text-center md:py-8">
          <p className="pb-3 text-3xl font-medium md:text-5xl">
            {ingredientLines?.length}
          </p>
          <span className="text-sm opacity-70 md:text-base">
            IngredientLines
          </span>
        </div>

        <div className="py-3 text-center md:py-8">
          <p className="pb-3 text-3xl font-medium md:text-5xl">
            {totalTime === 0 && "+1"}
            {totalTime > 0 && parseInt(formatTime(totalTime))}
          </p>
          <span className="text-sm opacity-70 md:text-base">Minutes</span>
        </div>

        <div className="border-l border-l-light-outline py-3 text-center md:py-8">
          <p className="pb-3 text-3xl font-medium md:text-5xl">
            {calories?.toFixed(0)}
          </p>
          <span className="text-sm opacity-70 md:text-base">Calories</span>
        </div>
      </div>
      <div className="diet-labels mt-8 flex justify-center gap-x-3 md:justify-start">
        {dietLabels?.map((item) => (
          <Button
            kind="ss"
            key={item}
            className="h-auto rounded border border-light-outline px-4 py-1 text-sm font-medium transition-all duration-300 hover:bg-light-alpha-10"
          >
            {item}
          </Button>
        ))}
      </div>
      <div className="ingredientLines">
        <div className="caption mt-4 flex items-center justify-between pb-4 pt-4">
          <h3 className="font-semibold">Ingredients</h3>
          <span className="text-sm opacity-75">
            for {ingredientLines?.length} Servings
          </span>
        </div>
        <div className="details border-t border-t-light-outline pt-4">
          <ul className="list-disc space-y-3 pl-4 opacity-90">
            {ingredientLines?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InfoDetail;

InfoDetail.propTypes = {
  recipe: PropTypes.object,
  id: PropTypes.string,
  link: PropTypes.object,
};

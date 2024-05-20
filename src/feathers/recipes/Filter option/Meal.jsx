import PropTypes from "prop-types";

import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Expend from "../../ui/Expend";
import { GiKnifeFork } from "react-icons/gi";
import Li from "../../ui/Li";
import { memo } from "react";

const Meal = memo(function Meal({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "mealType",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<GiKnifeFork />}
      >
        Meal
      </Expend>

      <ul
        className={`filter-options flex ${showSelected ? "visible h-[86px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 overflow-hidden pl-2 pt-4 transition-all duration-300`}
      >
        <Li dataSet="Breakfast" onClick={handleSelectTag}>
          Breakfast
        </Li>
        <Li dataSet="Lunch" onClick={handleSelectTag}>
          Lunch
        </Li>
        <Li dataSet="Dinner" onClick={handleSelectTag}>
          Dinner
        </Li>
        <Li dataSet="Snack" onClick={handleSelectTag}>
          Snack
        </Li>
        <Li dataSet="Teatime" onClick={handleSelectTag}>
          Teatime
        </Li>
      </ul>
    </div>
  );
});

export default Meal;

Meal.propTypes = {
  addTag: PropTypes.func,
};

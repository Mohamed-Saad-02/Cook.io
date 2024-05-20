import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PiChartPieSliceLight } from "react-icons/pi";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Li from "../../ui/Li";
import Expend from "../../ui/Expend";
import { memo } from "react";

const Ingredients = memo(function Ingredients({ addTag }) {
  const { showSelected, handleExpend, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "ingr",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<PiChartPieSliceLight />}
      >
        Ingredients
      </Expend>

      <ul
        className={`filter-options flex ${showSelected ? "visible h-[127px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 pl-2 pt-4 transition-all duration-300`}
      >
        <Li dataSet="1-5" onClick={handleSelectTag}>
          <FaAngleLeft className="text-[10px]" /> 5 ingredients
        </Li>

        <Li dataSet="5-10" onClick={handleSelectTag}>
          5 - 10 ingredients
        </Li>
        <Li dataSet="10-20" onClick={handleSelectTag}>
          10 - 20 ingredients
        </Li>
        <Li dataSet="20-30" onClick={handleSelectTag}>
          20 - 30 ingredients
        </Li>
        <Li dataSet="30%2B" onClick={handleSelectTag}>
          <FaAngleRight className="text-[10px]" /> 30 ingredients
        </Li>
      </ul>
    </div>
  );
});

export default Ingredients;

Ingredients.propTypes = {
  addTag: PropTypes.func,
};

import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoMedicalOutline } from "react-icons/io5";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Li from "../../ui/Li";
import Expend from "../../ui/Expend";
import { memo } from "react";

const Calories = memo(function Calories({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "calories",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<IoMedicalOutline />}
      >
        Calories
      </Expend>

      <ul
        className={`filter-options flex ${showSelected ? "visible h-[168px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 overflow-hidden pl-2 pt-4 transition-all duration-300`}
      >
        <Li dataSet="1-50" onClick={handleSelectTag}>
          <FaAngleLeft className="text-[10px]" /> 50 calories
        </Li>

        <Li dataSet="50-100" onClick={handleSelectTag}>
          50 - 100 calories
        </Li>
        <Li dataSet="100-200" onClick={handleSelectTag}>
          100 - 200 calories
        </Li>
        <Li dataSet="200-300" onClick={handleSelectTag}>
          200 - 300 calories
        </Li>
        <Li dataSet="300-400" onClick={handleSelectTag}>
          300 - 400 calories
        </Li>
        <Li dataSet="400-500" onClick={handleSelectTag}>
          400 - 500 calories
        </Li>
        <Li dataSet="500%2B" onClick={handleSelectTag}>
          <FaAngleRight className="text-[10px]" /> 500 calories
        </Li>
      </ul>
    </div>
  );
});

export default Calories;

Calories.propTypes = {
  addTag: PropTypes.func,
};

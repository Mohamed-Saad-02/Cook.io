import PropTypes from "prop-types";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Expend from "../../ui/Expend";
import Li from "../../ui/Li";
import { RiTimerLine } from "react-icons/ri";
import { memo } from "react";

const CookingTime = memo(function CookingTime({ addTag }) {
  const { showSelected, handleExpend, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "time",
  );

  return (
    <div className="pt-4">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<RiTimerLine />}
      >
        Cooking Time
      </Expend>

      <ul
        className={`filter-options flex ${showSelected ? "visible h-[168px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap gap-x-1 gap-y-3 pl-2 pt-4 transition-all duration-300`}
      >
        <Li dataSet="1-5" onClick={handleSelectTag}>
          <FaAngleLeft className="text-[10px]" /> 5 minutes
        </Li>
        <Li dataSet="5-10" onClick={handleSelectTag}>
          5 - 10 minutes
        </Li>
        <Li dataSet="10-20" onClick={handleSelectTag}>
          10 - 20 minutes
        </Li>
        <Li dataSet="20-30" onClick={handleSelectTag}>
          20 - 30 minutes
        </Li>
        <Li dataSet="30-40" onClick={handleSelectTag}>
          30 - 40 minutes
        </Li>
        <Li dataSet="40-50" onClick={handleSelectTag}>
          40 - 50 minutes
        </Li>
        <Li dataSet="50-60" onClick={handleSelectTag}>
          50 - 60 minutes
        </Li>
        <Li dataSet="60%2B" onClick={handleSelectTag}>
          <FaAngleRight className="text-[10px]" /> 1 hours
        </Li>
      </ul>
    </div>
  );
});

export default CookingTime;

CookingTime.propTypes = {
  addTag: PropTypes.func,
};

import PropTypes from "prop-types";

import { TbPlant2 } from "react-icons/tb";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Expend from "../../ui/Expend";
import Li from "../../ui/Li";
import { FaAngleLeft } from "react-icons/fa6";
import { memo } from "react";

const Diet = memo(function Diet({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "diet",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<TbPlant2 />}
      >
        Diet
      </Expend>
      <ul
        className={`filter-options flex ${showSelected ? "visible h-[86px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 pl-2 pt-4 transition-all duration-300`}
      >
        <Li dataSet="balanced" onClick={handleSelectTag}>
          <FaAngleLeft className="text-[10px]" /> Balanced
        </Li>

        <Li dataSet="high-fiber" onClick={handleSelectTag}>
          High-Fiber
        </Li>
        <Li dataSet="high-protein" onClick={handleSelectTag}>
          High-Protein
        </Li>
        <Li dataSet="low-carb" onClick={handleSelectTag}>
          Low-Carb
        </Li>
        <Li dataSet="low-fat" onClick={handleSelectTag}>
          Low-Fat
        </Li>
        <Li dataSet="low-sodium" onClick={handleSelectTag}>
          Low-Sodium
        </Li>
      </ul>
    </div>
  );
});

export default Diet;

Diet.propTypes = {
  addTag: PropTypes.func,
};

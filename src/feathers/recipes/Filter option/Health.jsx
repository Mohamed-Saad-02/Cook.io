import PropTypes from "prop-types";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import Expend from "../../ui/Expend";
import HealthBtn from "../../ui/HealthBtn";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import { memo } from "react";

const Health = memo(function Health({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "health",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<MdOutlineHealthAndSafety />}
      >
        Health
      </Expend>
      <ul
        className={`filter-options flex ${showSelected ? "visible h-[662px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 overflow-hidden pl-2 pt-4 transition-all duration-300`}
      >
        <HealthBtn onClick={handleSelectTag} kind="second" />
      </ul>
    </div>
  );
});

export default Health;

Health.propTypes = {
  addTag: PropTypes.func,
};

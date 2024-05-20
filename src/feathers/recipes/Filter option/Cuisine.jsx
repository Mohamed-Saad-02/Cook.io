import PropTypes from "prop-types";
import { FaEarthAmericas } from "react-icons/fa6";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import Expend from "../../ui/Expend";
import Li from "../../ui/Li";
import { memo } from "react";

const Cuisine = memo(function Cuisine({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "cuisineType",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<FaEarthAmericas />}
      >
        cuisineType
      </Expend>
      <ul
        className={`filter-options flex ${showSelected ? "visible h-[292px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 overflow-hidden pl-2 pt-4 transition-all duration-300`}
      >
        <Li onClick={handleSelectTag} dataSet="American">
          American
        </Li>
        <Li onClick={handleSelectTag} dataSet="Asian">
          Asian
        </Li>
        <Li onClick={handleSelectTag} dataSet="British">
          British
        </Li>
        <Li onClick={handleSelectTag} dataSet="Caribbean">
          Caribbean
        </Li>
        <Li onClick={handleSelectTag} dataSet="Central Europe">
          Central Europe
        </Li>
        <Li onClick={handleSelectTag} dataSet="Chinese">
          Chinese
        </Li>
        <Li onClick={handleSelectTag} dataSet="Eastern Europe">
          Eastern Europe
        </Li>
        <Li onClick={handleSelectTag} dataSet="French">
          French
        </Li>
        <Li onClick={handleSelectTag} dataSet="Indian">
          Indian
        </Li>
        <Li onClick={handleSelectTag} dataSet="Italian">
          Italian
        </Li>
        <Li onClick={handleSelectTag} dataSet="Japanese">
          Japanese
        </Li>
        <Li onClick={handleSelectTag} dataSet="Kosher">
          Kosher
        </Li>
        <Li onClick={handleSelectTag} dataSet="Mediterranean">
          Mediterranean
        </Li>
        <Li onClick={handleSelectTag} dataSet="Mexican">
          Mexican
        </Li>
        <Li onClick={handleSelectTag} dataSet="Middle Eastern">
          Middle Eastern
        </Li>
        <Li onClick={handleSelectTag} dataSet="Nordic">
          Nordic
        </Li>
        <Li onClick={handleSelectTag} dataSet="South American">
          South American
        </Li>
        <Li onClick={handleSelectTag} dataSet="South East Asian">
          South East Asian
        </Li>
      </ul>
    </div>
  );
});

export default Cuisine;

Cuisine.propTypes = {
  addTag: PropTypes.func,
};

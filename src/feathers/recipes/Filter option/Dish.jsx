import PropTypes from "prop-types";
import { PiHamburger } from "react-icons/pi";
import Expend from "../../ui/Expend";
import Li from "../../ui/Li";
import useExpendFilterOpt from "../../../hooks/useExpendFilterOpt";
import { memo } from "react";

const Dish = memo(function Dish({ addTag }) {
  const { handleExpend, showSelected, handleSelectTag } = useExpendFilterOpt(
    addTag,
    "dishType",
  );

  return (
    <div className="pt-2">
      <Expend
        handleExpend={handleExpend}
        showSelected={showSelected}
        icon={<PiHamburger />}
      >
        Dish
      </Expend>

      <ul
        className={`filter-options flex ${showSelected ? "visible h-[251px] opacity-100" : "invisible h-0 opacity-0"} flex-wrap items-center gap-x-1 gap-y-3 overflow-hidden pl-2 pt-4 transition-all duration-300`}
      >
        <Li onClick={handleSelectTag} dataSet="Biscuits and cookies">
          Biscuits and cookies
        </Li>
        <Li onClick={handleSelectTag} dataSet="Bread">
          Bread
        </Li>
        <Li onClick={handleSelectTag} dataSet="Cereals">
          Cereals
        </Li>
        <Li onClick={handleSelectTag} dataSet="Condiments and sauces">
          Condiments and sauces
        </Li>
        <Li onClick={handleSelectTag} dataSet="Desserts">
          Desserts
        </Li>
        <Li onClick={handleSelectTag} dataSet="Drinks">
          Drinks
        </Li>
        <Li onClick={handleSelectTag} dataSet="Main course">
          Main course
        </Li>
        <Li onClick={handleSelectTag} dataSet="Pancake">
          Pancake
        </Li>
        <Li onClick={handleSelectTag} dataSet="Preps">
          Preps
        </Li>
        <Li onClick={handleSelectTag} dataSet="Preserve">
          Preserve
        </Li>
        <Li onClick={handleSelectTag} dataSet="Salad">
          Salad
        </Li>
        <Li onClick={handleSelectTag} dataSet="Sandwiches">
          Sandwiches
        </Li>
        <Li onClick={handleSelectTag} dataSet="Side dish">
          Side dish
        </Li>
        <Li onClick={handleSelectTag} dataSet="Soup">
          Soup
        </Li>
        <Li onClick={handleSelectTag} dataSet="Starter">
          Starter
        </Li>
        <Li onClick={handleSelectTag} dataSet="Sweets">
          Sweets
        </Li>
      </ul>
    </div>
  );
});

export default Dish;

Dish.propTypes = {
  addTag: PropTypes.func,
};

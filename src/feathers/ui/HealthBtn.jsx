import PropTypes from "prop-types";
import Li from "./Li";

function HealthBtn({ onClick, kind = "first" }) {
  return (
    <>
      <Li kind={kind} dataSet="alcohol-cocktail" onClick={onClick}>
        alcohol-cocktail
      </Li>
      <Li kind={kind} dataSet="alcohol-free" onClick={onClick}>
        alcohol-free
      </Li>
      <Li kind={kind} dataSet="celery-free" onClick={onClick}>
        celery-free
      </Li>
      <Li kind={kind} dataSet="crustacean-free" onClick={onClick}>
        crustacean-free
      </Li>
      <Li kind={kind} dataSet="dairy-free" onClick={onClick}>
        dairy-free
      </Li>
      <Li kind={kind} dataSet="DASH" onClick={onClick}>
        DASH
      </Li>
      <Li kind={kind} dataSet="egg-free" onClick={onClick}>
        egg-free
      </Li>
      <Li kind={kind} dataSet="fish-free" onClick={onClick}>
        fish-free
      </Li>
      <Li kind={kind} dataSet="fodmap-free" onClick={onClick}>
        fodmap-free
      </Li>
      <Li kind={kind} dataSet="gluten-free" onClick={onClick}>
        gluten-free
      </Li>
      <Li kind={kind} dataSet="immuno-supportive" onClick={onClick}>
        immuno-supportive
      </Li>
      <Li kind={kind} dataSet="keto-friendly" onClick={onClick}>
        keto-friendly
      </Li>
      <Li kind={kind} dataSet="kidney-friendly" onClick={onClick}>
        kidney-friendly
      </Li>
      <Li kind={kind} dataSet="kosher" onClick={onClick}>
        kosher
      </Li>
      <Li kind={kind} dataSet="low-fat-abs" onClick={onClick}>
        low-fat-abs
      </Li>
      <Li kind={kind} dataSet="low-potassium" onClick={onClick}>
        low-potassium
      </Li>
      <Li kind={kind} dataSet="low-sugar" onClick={onClick}>
        low-sugar
      </Li>
      <Li kind={kind} dataSet="lupine-free" onClick={onClick}>
        lupine-free
      </Li>
      <Li kind={kind} dataSet="Mediterranean" onClick={onClick}>
        Mediterranean
      </Li>
      <Li kind={kind} dataSet="mollusk-free" onClick={onClick}>
        mollusk-free
      </Li>
      <Li kind={kind} dataSet="mustard-free" onClick={onClick}>
        mustard-free
      </Li>
      <Li kind={kind} dataSet="no-oil-added" onClick={onClick}>
        no-oil-added
      </Li>
      <Li kind={kind} dataSet="paleo" onClick={onClick}>
        paleo
      </Li>
      <Li kind={kind} dataSet="peanut-free" onClick={onClick}>
        peanut-free
      </Li>
      <Li kind={kind} dataSet="pescatarian" onClick={onClick}>
        pescatarian
      </Li>
      <Li kind={kind} dataSet="pork-free" onClick={onClick}>
        pork-free
      </Li>
      <Li kind={kind} dataSet="red-meat-free" onClick={onClick}>
        red-meat-free
      </Li>
      <Li kind={kind} dataSet="sesame-free" onClick={onClick}>
        sesame-free
      </Li>
      <Li kind={kind} dataSet="shellfish-free" onClick={onClick}>
        shellfish-free
      </Li>
      <Li kind={kind} dataSet="soy-free" onClick={onClick}>
        soy-free
      </Li>
      <Li kind={kind} dataSet="sugar-conscious" onClick={onClick}>
        sugar-conscious
      </Li>
      <Li kind={kind} dataSet="sulfite-free" onClick={onClick}>
        sulfite-free
      </Li>
      <Li kind={kind} dataSet="tree-nut-free" onClick={onClick}>
        tree-nut-free
      </Li>
      <Li kind={kind} dataSet="vegan" onClick={onClick}>
        vegan
      </Li>
      <Li kind={kind} dataSet="vegetarian" onClick={onClick}>
        vegetarian
      </Li>
      <Li kind={kind} dataSet="wheat-free" onClick={onClick}>
        wheat-free
      </Li>
    </>
  );
}

export default HealthBtn;

HealthBtn.propTypes = {
  onClick: PropTypes.func,
  kind: PropTypes.string,
};

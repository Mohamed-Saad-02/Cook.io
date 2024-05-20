import { memo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaRegClock } from "react-icons/fa6";
import { formatTime } from "../../helper";
import ButtonSaveRecipe from "./ButtonSaveRecipe";

const CardRecipe = memo(function CardRecipe({ recipe = {}, link = {} }) {
  const { image, label, totalTime } = recipe;
  const id = link?.self?.href
    .split("&")[0]
    .slice(
      link?.self?.href.split("&")[0].lastIndexOf("/") + 1,
      link?.self?.href.split("&")[0].lastIndexOf("?"),
    );

  const handleLoadImage = (e) => {
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });
  };

  return (
    <div className="recipe relative overflow-hidden rounded bg-white pb-3 shadow-sm">
      <Link to={`/detail/${id}`}>
        <div className="image grid h-60 overflow-hidden bg-light-image-background">
          <img
            src={image}
            alt={label}
            loading="lazy"
            className="block h-full w-full opacity-0 transition-all duration-500 hover:scale-125"
            onLoad={handleLoadImage}
          />
        </div>
        <div className="info mt-3 px-2">
          <h2 className="truncate transition-all duration-300" title={label}>
            {label}
          </h2>
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <FaRegClock />
              <span>{formatTime(totalTime)}</span>
            </div>
          </div>
        </div>
      </Link>
      <div className="absolute bottom-2 right-2">
        <ButtonSaveRecipe
          id={id}
          link={link}
          recipe={recipe}
          kind="second"
          type="icon"
        />
      </div>
    </div>
  );
});

export default CardRecipe;

CardRecipe.propTypes = {
  recipe: PropTypes.object,
  link: PropTypes.object,
};

import { useParams } from "react-router-dom";
import Container from "../ui/Container";
import useSearchRecipes from "../../hooks/useSearchRecipes";
import Spinner from "../ui/Spinner";
import InfoDetail from "./InfoDetail";
import { useMemo } from "react";

const queryField =
  "field=label&field=image&field=dietLabels&field=ingredientLines&field=calories&field=totalTime";

function DetailRecipe() {
  const { id } = useParams();
  const { isLoading, recipes = {} } = useSearchRecipes(queryField, id);

  const { recipe = {}, _links: link = {} } = recipes;

  const memoizeRecipe = useMemo(() => {
    return recipe;
  }, [recipe]);

  const { image, label } = recipe;

  const handleLoadImage = (e) => {
    e.target.animate({ opacity: 1 }, { duration: 1000, fill: "forwards" });
    e.target.parentElement.classList.remove("animate-pulse");
  };

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && (
        <div className="details xl:pt-30 pb-10 pt-32 sm:pb-20 sm:pt-40 xl:pb-0">
          <Container>
            <div className="flex flex-col justify-between gap-x-8 xl:flex-row">
              <div
                className={`image" ${isLoading && ""} mx-auto mb-8 h-auto max-h-[500px] w-72 animate-pulse overflow-hidden rounded bg-light-image-background bg-cover bg-center md:w-96 xl:sticky xl:left-0 xl:top-24 xl:mb-0 xl:w-[500px]
                `}
              >
                <img
                  src={image}
                  alt={label}
                  className="w-full opacity-0 xl:h-full"
                  loading="lazy"
                  onLoad={handleLoadImage}
                  draggable="false"
                />
              </div>
              {memoizeRecipe && (
                <InfoDetail recipe={memoizeRecipe} id={id} link={link} />
              )}
            </div>
          </Container>
        </div>
      )}
    </>
  );
}

export default DetailRecipe;

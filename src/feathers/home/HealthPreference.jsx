import { useDispatch } from "react-redux";
import useSearchRecipes from "../../hooks/useSearchRecipes";
import { useNavigate } from "react-router-dom";
import actGetRecipesSearch from "../../redux/slices/search recipes/actSearchRecipes";
import HealthBtn from "../ui/HealthBtn";

function HealthPreference() {
  const { error } = useSearchRecipes();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchPreference = (e) => {
    const query = e.target.textContent.toUpperCase()
      ? e.target.textContent
      : e.target.textContent.toLowerCase();

    if (!query) return;
    navigate("/recipes");
    dispatch(
      actGetRecipesSearch({
        word: "",
        queries: `&health=${query}`,
      }),
    );
  };

  if (error) return;

  return (
    <div className="health-preference mb-5 pb-6">
      <div className="title flex flex-col items-center justify-center gap-3 text-center">
        <h2 className="font-secondary text-4xl">
          Choose your health preference.
        </h2>
        <p className="max-w-[500px] opacity-80">
          Choosing your health preference is an important Step towards achieving
          a healthier lifestyle.
        </p>
      </div>
      <ul className="reference mt-6 flex flex-wrap items-center justify-center gap-3">
        <HealthBtn onClick={handleSearchPreference} />
      </ul>
    </div>
  );
}

export default HealthPreference;

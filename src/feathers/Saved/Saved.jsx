import { useDispatch, useSelector } from "react-redux";
import Container from "../ui/Container";
import CardRecipe from "../ui/CardRecipe";
import {
  clearItems,
  getItems,
} from "../../redux/slices/saved recipes/savedSlice";
import NotFoundRecipes from "./NotFoundRecipes";
import Button from "../ui/Button";
import { LuTrash } from "react-icons/lu";

function Saved() {
  const { saved } = useSelector(getItems);
  const savedCount = saved.length;

  const dispatch = useDispatch();

  if (savedCount === 0) return <NotFoundRecipes />;

  const handleRemoveAllSaved = () => {
    dispatch(clearItems());
  };

  return (
    <Container>
      <section className="pt-20">
        <div className="flex items-center justify-between pb-4 pt-6">
          <h1 className="text-xl font-medium">All Saved Recipes</h1>
          {savedCount > 1 && (
            <Button onClick={handleRemoveAllSaved}>
              Remove All <LuTrash />
            </Button>
          )}
        </div>
        <div className="recipes grid-col-6 gap-x-6 gap-y-4 py-4">
          {saved.map((item) => (
            <CardRecipe
              key={item.recipe.image}
              link={item.link}
              recipe={item.recipe}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}

export default Saved;

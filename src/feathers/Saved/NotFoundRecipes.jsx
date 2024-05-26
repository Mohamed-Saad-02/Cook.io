import { IoFastFoodOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

function NotFoundRecipes() {
  return (
    <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 p-5 sm:w-3/4 md:w-1/2 md:p-0">
      <div className="flex items-center justify-between gap-x-3 rounded bg-light-badge-btn px-4 py-2 font-secondary text-lg">
        Please Save Recipe First
        <IoFastFoodOutline className="text-2xl opacity-80" />
      </div>
      <Button className="mx-auto mt-4">
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  );
}

export default NotFoundRecipes;

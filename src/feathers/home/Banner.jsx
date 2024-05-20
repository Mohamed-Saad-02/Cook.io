import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GiKnifeFork } from "react-icons/gi";
import { IoSearchSharp } from "react-icons/io5";
import { getQuery } from "../../redux/slices/search recipes/searchRecipesSlice";
import image from "../../../public/hero-banner-large.jpg";
import Button from "../ui/Button";

function Banner() {
  const inputSearch = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchRecipes = () => {
    const inputValue = inputSearch.current.value;

    if (inputValue.length < 2) return;
    dispatch(getQuery(inputSearch.current.value));
    navigate("/recipes");
  };

  return (
    <div
      className="caption mt-4 flex h-96 flex-col items-center justify-center rounded-md bg-cover text-center text-white lg:bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="font-secondary text-5xl">Your desired dish?</h1>
      <div className="relative mt-4">
        <input
          ref={inputSearch}
          type="text"
          placeholder="Search recipes..."
          className="h-14 w-[300px] rounded-sm border-none bg-light-background pl-10 pr-2 text-light-on-background outline-none sm:w-[500px] md:w-[600px]"
        />
        <GiKnifeFork className="absolute left-2 top-1/2 -translate-y-1/2 text-xl text-light-on-background" />
        <Button
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-3 text-xl text-white"
          onClick={handleSearchRecipes}
        >
          <IoSearchSharp />
        </Button>
      </div>
      <p className="mt-3 px-6 text-sm text-light-image-background sm:px-0">
        Search any recipe e g: burger. pizza. sandwich, toast.
      </p>
    </div>
  );
}

export default Banner;

import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CardShowMore() {
  return (
    <Link
      to="/recipes"
      className="recipe flex h-auto min-w-72 cursor-pointer items-center justify-center gap-x-2 overflow-hidden rounded bg-light-badge-btn font-medium shadow-sm"
    >
      Show More
      <span className="text-sm">
        <FaAngleRight />
      </span>
    </Link>
  );
}

export default CardShowMore;

import { FaBellConcierge } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="logo w-1/2">
      <Link
        to="/"
        className="flex w-fit items-center gap-1 font-secondary text-3xl"
      >
        <FaBellConcierge className="text-4xl text-light-primary" />
        Cook.io
      </Link>
    </div>
  );
}

export default Logo;

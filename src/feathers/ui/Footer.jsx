import image from "../../../public/edamam.svg";
import { FaBellConcierge } from "react-icons/fa6";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer className="px-12">
      <div className="flex flex-wrap items-center justify-center gap-y-3 border-t border-t-light-outline py-3 sm:justify-between">
        <a
          href="https://www.linkedin.com/in/mohamed-saad-025268304/"
          target="_blank"
        >
          Copyright {year}{" "}
          <span className="font-semibold text-light-primary">
            Mohamed 💙 Saad
          </span>
        </a>
        <div className="logo flex items-center justify-center gap-1 font-secondary text-3xl">
          <FaBellConcierge className="text-4xl text-light-primary" />
          Cook.io
        </div>
        <a href="https://www.edamam.com/">
          <img src={image} alt="edamam" loading="lazy" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

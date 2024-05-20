import PropTypes from "prop-types";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const style = `flex cursor-pointer items-center justify-between rounded px-4 py-2 transition-all duration-300 hover:bg-light-background hover:opacity-100`;

function Expend({ showSelected, handleExpend, icon, children }) {
  return (
    <div
      className={`${showSelected ? "bg-light-background opacity-100" : "opacity-80"} ${style}`}
      onClick={handleExpend}
    >
      <h3 className="flex items-center gap-3 font-medium">
        <span
          className={`text-lg ${showSelected ? "opacity-100" : "opacity-80"}`}
        >
          {icon}
        </span>
        {children}
      </h3>
      <span className={`${showSelected ? "opacity-100" : "opacity-80"}`}>
        {showSelected ? <FaAngleUp /> : <FaAngleDown />}
      </span>
    </div>
  );
}

export default Expend;

Expend.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.node,
  showSelected: PropTypes.bool,
  handleExpend: PropTypes.func,
};

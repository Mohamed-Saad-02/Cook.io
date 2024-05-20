import PropTypes from "prop-types";

const style = {
  primary:
    "bg-light-primary hover:bg-light-primary-hover flex items-center gap-x-3 rounded-md px-3 py-2 text-white transition-all duration-300",
  second:
    "rounded bg-light-active-indicator transition-all duration-300 hover:bg-light-primary hover:text-white",
  solid: "",
};

function Button({ children, kind = "primary", className = "", onClick, ref }) {
  return (
    <button
      className={`${style[kind]} ${className}`}
      onClick={onClick}
      ref={ref}
    >
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  ref: PropTypes.any,
};

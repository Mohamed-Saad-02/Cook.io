import PropTypes from "prop-types";

const styleTag = {
  first: `rounded-full bg-light-badge-btn px-3 py-2 capitalize text-light-on-badge-btn transition-all duration-300 hover:bg-light-active-indicator cursor-pointer`,
  second: `flex cursor-pointer items-center rounded border border-light-outline px-2 py-1 text-[13px] font-medium transition-all duration-300 hover:bg-light-badge-btn`,
};

function Li({ className = "", dataSet, kind = "second", onClick, children }) {
  return (
    <li
      className={`${styleTag[kind]} ${className}`}
      data-value={dataSet}
      onClick={onClick}
    >
      {children}
    </li>
  );
}

export default Li;

Li.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.string,
  dataSet: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

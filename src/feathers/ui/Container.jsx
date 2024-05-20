import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="px-3 sm:px-5 md:px-20 lg:px-32">{children}</div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node,
};

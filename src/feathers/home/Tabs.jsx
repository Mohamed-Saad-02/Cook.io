import PropTypes from "prop-types";

const tabStyle = `before:bg-light-primary relative block py-4 transition-all
            before:absolute before:bottom-0 before:left-0 before:h-[3px] before:w-0 before:transition-all before:duration-300 hover:before:w-full before:rounded opacity-70 hover:opacity-100 duration-500 cursor-pointer text-center text-sm sm:text-base`;

function Tabs({ tab, selectTab }) {
  const getValueContent = (e) => {
    selectTab(e.target.textContent);
  };

  return (
    <ul className="flex flex-wrap items-center justify-center shadow-sm">
      <li
        className={`${tabStyle} ${tab === "Breakfast" ? "active" : ""} `}
        onClick={getValueContent}
      >
        Breakfast
      </li>
      <li
        className={`${tabStyle} ${tab === "Lunch" ? "active" : ""}`}
        onClick={getValueContent}
      >
        Lunch
      </li>
      <li
        className={`${tabStyle} ${tab === "Dinner" ? "active" : ""}`}
        onClick={getValueContent}
      >
        Dinner
      </li>
      <li
        className={`${tabStyle} ${tab === "Snack" ? "active" : ""}`}
        onClick={getValueContent}
      >
        Snack
      </li>
      <li
        className={`${tabStyle} ${tab === "Teatime" ? "active" : ""}`}
        onClick={getValueContent}
      >
        Teatime
      </li>
    </ul>
  );
}

export default Tabs;

Tabs.propTypes = {
  tab: PropTypes.string.isRequired,
  selectTab: PropTypes.func,
};

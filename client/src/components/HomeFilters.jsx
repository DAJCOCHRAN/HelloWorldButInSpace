import * as PropTypes from "prop-types";

function HomeFilters(props) {
  const onFilterChange = (e) => {
    console.log(e.target.name);
    const { name, checked } = e.target;

    props.setFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[name] = checked;
      return newFilters;
    });
  };

  return (
    <div className="home-grid-space home-filters">
      <div className="home-filters__title">
        <h2 className="heading-secondary">Choose what you see:</h2>
      </div>
      <div className="home-filters__body">
        <ul>
          <li className="filter-list-item">
            Test Mode:{" "}
            <input name="test" onChange={onFilterChange} type="checkbox" />
          </li>
        </ul>
      </div>
    </div>
  );
}

HomeFilters.propTypes = {
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};

export { HomeFilters };

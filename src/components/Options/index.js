import React from "react";
import "./styles.css";

function Options({ counter, setFilter, onClear: handleOnClear }) {
  let items = counter > 1 ? "items" : "item";

  return (
    <div className="options">
      <p className="counter">
        {!counter ? "All done" : `${counter} ${items} left`}
      </p>
      <div className="filters">
        <div>
          <label className="filter" htmlFor="filter-all">
            <input
              className="filter"
              type="radio"
              id="filter-all"
              name="status"
              onClick={() => setFilter("all")}
              defaultChecked
            />
            <span>All</span>
          </label>
        </div>
        <div>
          <label className="filter" htmlFor="filter-active">
            <input
              type="radio"
              id="filter-active"
              name="status"
              onClick={() => setFilter("active")}
            />
            <span>Active</span>
          </label>
        </div>
        <div>
          <label className="filter" htmlFor="filter-completed">
            <input
              type="radio"
              id="filter-completed"
              name="status"
              onClick={() => setFilter("completed")}
            />
            <span>Completed</span>
          </label>
        </div>
      </div>
      <button className="btn-clear" onClick={handleOnClear}>
        Clear completed
      </button>
    </div>
  );
}

export default Options;

import React from "react";
import DropDown from "./DropDown";
import { INPUT_PLACEHOLDER } from "./constants";
import "./styles.scss";

const Form = ({
  handleSearch,
  searchText,
  teamList,
  selectedTeam,
  handleSelectTeam,
  clearFilter,
}) => {
  return (
    <div className="filter-form">
      <label>Search</label>
      <input
        className="field"
        type="text"
        onChange={handleSearch}
        value={searchText}
        name="filter"
        placeholder={INPUT_PLACEHOLDER.FILTER_INPUT}
      />
      <DropDown
        options={teamList}
        value={selectedTeam}
        onChange={handleSelectTeam}
        placeholder={INPUT_PLACEHOLDER.FILTER_DROPDOWN}
      />
      <button
        className="clear-btn"
        onClick={clearFilter}
        disabled={!selectedTeam.length && !searchText}
      >
        Clear All Applied Filter
      </button>
    </div>
  );
};

export default Form;

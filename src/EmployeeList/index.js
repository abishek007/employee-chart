// Library Imports
import React, { useState, useEffect, useMemo } from "react";

// Component Imports
import Form from "../Form";
import Card from "../Card";
import Shimmer from "../Card/Shimmer";

// Helper Imports
import { filterEmployeeList, getFormattedEmpList } from "../Helpers/helpers";

const EmployeeList = ({ isLoading, empList }) => {
  const [initialEmpList, setInitialEmpList] = useState([]);
  const [cardList, setCardList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedTeam, setSelectedTeam] = useState([]);

  const teamList = useMemo(() => {
    const teams = [];
    initialEmpList.forEach(({ team }) => {
      if (!teams.includes(team) && team) {
        teams.push(team);
      }
    });
    return teams.map((team) => ({
      value: team,
      label: team,
    }));
  }, [initialEmpList]);

  const clearFilter = () => {
    setSearchText("");
    setCardList(initialEmpList);
    setSelectedTeam([]);
  };

  const handleSelectTeam = (value) => {
    setSelectedTeam([...value]);
  };

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchText(value);
  };

  useEffect(() => {
    setCardList(filterEmployeeList(initialEmpList, searchText, selectedTeam));
  }, [searchText, selectedTeam]);

  useEffect(() => {
    const formattedEmpList = getFormattedEmpList(empList);
    setInitialEmpList(formattedEmpList);
    setCardList(formattedEmpList);
  }, [empList]);

  return (
    <>
      <Form
        handleSearch={handleSearch}
        searchText={searchText}
        teamList={teamList}
        selectedTeam={selectedTeam}
        handleSelectTeam={handleSelectTeam}
        clearFilter={clearFilter}
      />
      <div className="list-view">
        {isLoading ? (
          <Shimmer />
        ) : (
          cardList.map((data, ind) => (
            <Card data={data} key={`${data.id}-${ind}`} />
          ))
        )}
      </div>
    </>
  );
};

export default EmployeeList;

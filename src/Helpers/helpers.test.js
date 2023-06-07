import {
  filterEmployeeList,
  getFormattedEmpList,
  updateEmpList,
} from "./helpers";
import {
  INITIAL_EMPLOYEE_DATA,
  RESULT_SEARCH_TEXT,
  RESULT_SELECTED_TEAM,
  RESULT_FILTERED_EMPLOYEES,
  SELECTED_TEAM,
  API_RESPONSE_DATA,
  FORMATTED_EMPLOYEE_DATA,
  RESULT_UPDATED_EMPLOYEE_INFO,
  OLD_EMPLOYEE_INFO,
} from "./mock";

describe("test #filterEmployeeList helper functions", () => {
  test("#filterEmployeeList when only search text is added", () => {
    const searchText = "joe";
    const selectedTeam = [];
    expect(
      filterEmployeeList(
        INITIAL_EMPLOYEE_DATA,
        searchText,
        selectedTeam,
        API_RESPONSE_DATA
      ).filteredData
    ).toMatchObject(RESULT_SEARCH_TEXT);
  });
  test("#filterEmployeeList when only team is selected", () => {
    const searchText = "";
    expect(
      filterEmployeeList(
        INITIAL_EMPLOYEE_DATA,
        searchText,
        SELECTED_TEAM,
        API_RESPONSE_DATA
      ).filteredData
    ).toMatchObject(RESULT_SELECTED_TEAM);
  });
  test("#filterEmployeeList when both team is selected and search text is added", () => {
    const searchText = "Blomquist";
    expect(
      filterEmployeeList(
        INITIAL_EMPLOYEE_DATA,
        searchText,
        SELECTED_TEAM,
        API_RESPONSE_DATA
      ).filteredData
    ).toMatchObject(RESULT_FILTERED_EMPLOYEES);
  });
  test("#filterEmployeeList when both team and search text is not applied", () => {
    const searchText = "";
    const selectedTeam = [];
    expect(
      filterEmployeeList(
        INITIAL_EMPLOYEE_DATA,
        searchText,
        selectedTeam,
        API_RESPONSE_DATA
      ).filteredData
    ).toMatchObject(INITIAL_EMPLOYEE_DATA);
  });
});

describe("test #getFormattedEmpList helper functions", () => {
  test("#getFormattedEmpList should return formatted employees data", () => {
    expect(getFormattedEmpList(API_RESPONSE_DATA)).toMatchObject(
      FORMATTED_EMPLOYEE_DATA
    );
  });
});

describe("test #updateEmpList helper functions", () => {
  test("#updateEmpList should return formatted employees data", () => {
    updateEmpList(OLD_EMPLOYEE_INFO);
    expect(OLD_EMPLOYEE_INFO).toMatchObject(RESULT_UPDATED_EMPLOYEE_INFO);
  });
});

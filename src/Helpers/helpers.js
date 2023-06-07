/**
 * Returns the employee list based on the given search text & selected team
 * @param {Array<Object>} initialEmpList
 * @param {String} searchText
 * @param {Array<string>} selectedTeam
 *
 * @returns {Array<Object>}
 */
export const filterEmployeeList = (
  initialEmpList,
  searchText,
  selectedTeam = [],
  defaultEmpList
) => {
  let filteredData = initialEmpList.filter((data) => {
    return Object.values(data)
      .join(" ")
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  const updatedHierarchyData = JSON.parse(JSON.stringify(defaultEmpList));

  if (selectedTeam.length) {
    const teamList = selectedTeam.map((team) => team.value);
    filteredData = filteredData.filter((data) => teamList.includes(data.team));

    updatedHierarchyData?.children.forEach((data, ind) => {
      if (!teamList.includes(data.team)) {
        delete updatedHierarchyData.children[ind];
      }
    });
  }

  return { filteredData, updatedHierarchyData };
};

/**
 * Returns the formatted employee list.
 * @param {Array<Object>} employeeData
 *
 * @returns {Array<Object>}
 */
export const getFormattedEmpList = (employeeData) => {
  const finalEmpList = [employeeData];
  function flattenEmpList(employeeList) {
    employeeList?.forEach((employee) => {
      if (Array.isArray(employee)) {
        flattenEmpList(employee);
      } else if (
        Array.isArray(employee.children) &&
        employee.children?.length
      ) {
        finalEmpList.push(employee);
        flattenEmpList(employee.children);
      } else {
        finalEmpList.push(employee);
      }
    });
    return;
  }
  flattenEmpList(employeeData.children);
  return finalEmpList;
};

/**
 * Updates the manager information for modified employee
 * @param {Array<Object>} employeeData
 */
export const updateEmpList = (employeeData) => {
  function updateManagerInfo(id, name, employeeList, team) {
    employeeList?.forEach((employee) => {
      if (Array.isArray(employee.children) && employee.children?.length) {
        const { id, name, children, team } = employee;
        updateManagerInfo(id, name, children, team);
      } else {
        employee.manager_id = id;
        employee.manager_name = name;
        employee.team = team;
      }
    });
    return;
  }
  const { id, name, children, team } = employeeData;
  updateManagerInfo(id, name, children, team);
};

// Library Imports
import { useState, useEffect } from "react";

// Component Imports
import EmployeeHierarchy from "./EmployeeHierarchy";
import EmployeeList from "./EmployeeList";

// Helper Imports
import { updateEmpList } from "./Helpers/helpers";

// Constant Imports
import { API_ROTES } from "./constants";

// Style Imports
import "./App.scss";

const App = () => {
  const [empList, setEmpList] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getEmployeeData = async () => {
    setIsLoading(true);
    const response = await fetch(API_ROTES.GET_EMPLOYEE);
    const employeeList = await response.json();
    updateEmpList(employeeList);
    setEmpList(employeeList);
    setIsLoading(false);
  };

  useEffect(() => {
    getEmployeeData();
  }, []);

  return (
    <div className="container">
      <div className="left-section">
        <EmployeeList isLoading={isLoading} empList={empList} />
      </div>
      <div className="right-section">
        <p className="section-title">Organisation Chart for ABC Co.</p>
        <div className="chart-section">
          <EmployeeHierarchy
            isLoading={isLoading}
            empList={empList}
            getEmployeeData={getEmployeeData}
          />
        </div>
      </div>
    </div>
  );
};

export default App;

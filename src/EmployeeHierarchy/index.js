// Components Imports
import HierarchyTree from "./HierarchyTree";
import SpinLoader from "./SpinLoader";

const EmployeeHierarchy = ({ isLoading, empList, getEmployeeData }) => (
  <>
    {isLoading ? (
      <SpinLoader />
    ) : (
      <HierarchyTree empList={empList} getEmployeeData={getEmployeeData} />
    )}
  </>
);

export default EmployeeHierarchy;

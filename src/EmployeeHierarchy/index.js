// Components Imports
import HierarchyTree from "./HierarchyTree";
import SpinLoader from "./SpinLoader";

const EmployeeHierarchy = ({
  isLoading,
  empList,
  getEmployeeData,
  selectedTeam,
}) => (
  <>
    {isLoading ? (
      <SpinLoader />
    ) : (
      <HierarchyTree
        empList={empList}
        getEmployeeData={getEmployeeData}
        selectedTeam={selectedTeam}
      />
    )}
  </>
);

export default EmployeeHierarchy;

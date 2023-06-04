// Library Imports
import { useRef } from "react";
import { isEmpty } from "lodash";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";

// Component Imports
import HierarchyCard from "./HierarchyCard";

// Constant Imports
import { API_ROTES } from "../constants";

const HierarchyTree = ({ empList, getEmployeeData }) => {
  const { treeRef } = useTree();
  const prevData = useRef({});

  const updateEmployeeData = async (data) => {
    await fetch(API_ROTES.POST_EMPLOYEE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    getEmployeeData();
  };

  return (
    <div>
      <OrgTreeComponent
        data={empList}
        ref={treeRef}
        collapsable={false}
        renderCard={(event) => {
          const { isDragging, data } = event;
          if (!isDragging && data?.id === 1) {
            if (!isEmpty(prevData.current)) {
              updateEmployeeData(data);
            }
            prevData.current = data;
          }
          return <HierarchyCard data={event.data} />;
        }}
      />
    </div>
  );
};

export default HierarchyTree;

// Library Imports
import { useRef, useEffect, useState } from "react";
import { isEmpty } from "lodash";
import OrgTreeComponent, { useTree } from "react-drag-hierarchy-tree";

// Component Imports
import HierarchyCard from "./HierarchyCard";
import SpinLoader from "./SpinLoader";

// Constant Imports
import { API_ROTES } from "../constants";

const HierarchyTree = ({ empList, getEmployeeData, selectedTeam }) => {
  const { treeRef } = useTree();
  const [isLoad, setIsLoad] = useState(false);
  const prevData = useRef({});

  useEffect(() => {
    if (selectedTeam?.length) {
      setIsLoad(true);
      setTimeout(() => {
        setIsLoad(false);
      }, 100);
    }
  }, [empList]);

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
      {isLoad ? (
        <SpinLoader />
      ) : (
        <OrgTreeComponent
          data={empList}
          ref={treeRef}
          collapsable={false}
          renderCard={(event) => {
            const { isDragging, data } = event;
            if (!isDragging && data?.id === 1) {
              if (!isEmpty(prevData.current) && !selectedTeam?.length) {
                updateEmployeeData(data);
              }
              prevData.current = data;
            }
            return <HierarchyCard data={event.data} />;
          }}
        />
      )}
    </div>
  );
};

export default HierarchyTree;

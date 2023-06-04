import { render } from "@testing-library/react";
import EmployeeHierarchy from "./index";
import { EMPLOYEE_LIST } from "../constants";

/* eslint-disable testing-library/no-node-access */
describe("test EmployeeHierarchy component", () => {
  test("render the EmployeeHierarchy component when loading", () => {
    const { container } = render(<EmployeeHierarchy isLoading />);
    expect(container.firstChild).toHaveClass("spin-loader-wrapper");
  });
  test("render the EmployeeHierarchy component when not loading", () => {
    const { container } = render(
      <EmployeeHierarchy
        isLoading={false}
        getEmployeeData={jest.fn()}
        empList={EMPLOYEE_LIST}
      />
    );
    expect(container.firstChild).not.toHaveClass("spin-loader-wrapper");
  });
});

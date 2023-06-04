import { render, screen } from "@testing-library/react";
import HierarchyCard from "./HierarchyCard";

test("render the HierarchyCard component with given data", () => {
  const data = {
    id: 10,
    name: "Erica Reel",
    designation: "Customer Officer",
    team: "Finance",
    manager_id: 4,
    manager_name: "John Green",
    img_src:
      "https://www.shutterstock.com/image-photo/passport-photo-cool-blond-businesswoman-260nw-359058026.jpg",
    children: [],
  };
  render(<HierarchyCard data={data} />);
  const { name, team, designation } = data;
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(team)).toBeInTheDocument();
  expect(screen.getByText(designation)).toBeInTheDocument();
});

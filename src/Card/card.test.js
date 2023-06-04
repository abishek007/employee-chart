import { render, screen } from "@testing-library/react";
import Card from "./index";

test("render the Card component with given data", () => {
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
  render(<Card data={data} />);
  const { name, team, id, designation, manager_name } = data;
  expect(screen.getByText(name)).toBeInTheDocument();
  expect(screen.getByText(team)).toBeInTheDocument();
  expect(screen.getByText(id)).toBeInTheDocument();
  expect(screen.getByText(designation)).toBeInTheDocument();
  expect(screen.getByText(manager_name)).toBeInTheDocument();
});

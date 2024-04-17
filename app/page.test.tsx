/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HomePage from "./page";

it("App Router: Works with Server Components", () => {
  render(<HomePage />);
  expect(screen.getByRole("heading")).toHaveTextContent("Operations Platform");
});

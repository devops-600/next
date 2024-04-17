/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Home", () => {
  it("renders a heading", () => {
    render(<HomePage />);

    const heading = screen.getByRole("heading", {
      name: /Operations Platform/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

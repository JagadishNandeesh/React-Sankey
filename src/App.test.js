import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Header } from "./Header";

const changeLanguage = jest.fn();

describe("Header Component", () => {
  it("renders header wihtout crashing", () => {
    render(<Header />);
  });

  it("Contains image tag with correct alt text", () => {
    render(<Header />);
    screen.getByAltText("centime logo");
  });
});

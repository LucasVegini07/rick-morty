import React from "react";
import Characters from "./Characters";
import { render } from "@testing-library/react-native";

describe("Search page tests", () => {
  let characters = [
    {
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      gender: "Male",
      species: "Human",
      status: "Alive",
      location: {
        name: "Earth (Replacement Dimension)",
      },
      origin: {
        name: "Earth ",
      },
    },
  ];

  it("Characters should be renderized", () => {
    render(<Characters characters={characters} />);
  });

  // it("Text should be renderized", () => {
  //   const page = render(<Characters characters={characters} />);
  //   expect(page.queryByTestId("text")).toBeInTheDocument;
  // });

  // it("Image should be renderized", () => {
  //   const page = render(<Characters characters={characters} />);
  //   page.getByTestId("image");
  //   expect(page.queryByTestId("image").children[0]).toBeVisible();
  // });

  it("Image should not be renderized if the characters is empty", () => {
    const page = render(<Characters characters={[]} />);
    const image = page.queryByTestId("image");
    expect(image).toBeNull();
  });
});

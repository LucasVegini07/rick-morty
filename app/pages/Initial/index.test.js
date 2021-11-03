import React from "react";
import Initial from ".";
import { render, fireEvent } from "@testing-library/react-native";

describe("Initial page tests", () => {
  it("Button should be renderized", () => {
    const navigation = { navigate: () => {} };
    const page = render(<Initial navigation={navigation} />);
    page.getByTestId("searchButton");
  });

  it("Button should go to the search page", () => {
    const navigation = { navigate: () => {} };
    spyOn(navigation, "navigate");
    const page = render(<Initial navigation={navigation} />);
    const searchButton = page.getByTestId("searchButton");
    fireEvent.press(searchButton);
    expect(navigation.navigate).toHaveBeenCalledWith("Search", {
      textSearched: "",
    });
  });

  it("Verify if the image is renderized", () => {
    const navigation = { navigate: () => {} };
    const page = render(<Initial navigation={navigation} />);
    page.getByTestId("logo");
  });

  // it("Button should be disabled when renderized", () => {
  //   const page = render(<Initial />);
  //   const searchButton = page.getByTestId("searchButton");
  //   expect(searchButton).toBeDisabled();
  // });
});

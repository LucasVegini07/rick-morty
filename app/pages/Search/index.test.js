import React from "react";
import Search from ".";
import { fireEvent, render } from "@testing-library/react-native";

describe("Search page tests", () => {
  it("Search should be renderized", () => {
    var route = {
      params: {
        textSearched: "Teste",
      },
    };
    const page = render(<Search route={route} />);
    page.getByText("Loading");
  });
});

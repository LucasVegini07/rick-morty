import React from "react";
import Pagination from "./Pagination";
import { render } from "@testing-library/react-native";

describe("Search page tests", () => {
  const postsPerPage = 4;
  const totalPosts = 20;
  const paginate = () => {};

  it("Pagation should be renderized", () => {
    const page = render(
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={totalPosts}
        paginate={paginate}
      />
    );
  });
});

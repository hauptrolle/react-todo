import React from "react";
import { render } from "@testing-library/react";

import { Shell } from ".";

describe("Shell Component", () => {
  it("should render the app shell", () => {
    const { getByText } = render(<Shell>test content</Shell>);

    expect(getByText("React Todo")).toBeInTheDocument();
    expect(getByText("test content")).toBeInTheDocument();
  });
});

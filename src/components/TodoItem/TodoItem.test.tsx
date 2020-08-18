import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { TodoItem } from ".";

describe("TodoItem Component", () => {
  it("should render a todo item", () => {
    const mockToggle = jest.fn();
    const { getByText } = render(
      <TodoItem
        todo={{ text: "Test Todo", isCompleted: false }}
        id={1}
        toggleTodo={mockToggle}
      />
    );

    expect(getByText("Test Todo")).toBeInTheDocument();
  });

  it("should call the toggleTodo method when click on icon button", () => {
    const mockToggle = jest.fn();
    const { getByLabelText } = render(
      <TodoItem
        todo={{ text: "Test Todo", isCompleted: false }}
        id={1}
        toggleTodo={mockToggle}
      />
    );

    fireEvent.click(getByLabelText("todo status"));
    expect(mockToggle).toHaveBeenCalledWith(1);
  });
});

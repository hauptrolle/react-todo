import React from "react";
import { fireEvent } from "@testing-library/dom";
import { render } from "@testing-library/react";

import { TodoForm } from ".";

describe("TodoForm Component", () => {
  it("should render the todo form", () => {
    const mockAddTodo = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(
      <TodoForm addTodo={mockAddTodo} />
    );

    expect(getByPlaceholderText("Add todo ...")).toBeInTheDocument();
    expect(getByLabelText("Add todo")).toBeInTheDocument();
  });

  it("should call the addTodo method when click on add button", () => {
    const mockAddTodo = jest.fn();
    const { getByPlaceholderText, getByLabelText } = render(
      <TodoForm addTodo={mockAddTodo} />
    );

    fireEvent.change(getByPlaceholderText("Add todo ..."), {
      target: { value: "New Todo" },
    });

    fireEvent.click(getByLabelText("Add todo"));

    expect(mockAddTodo).toHaveBeenCalledWith({
      text: "New Todo",
      isCompleted: false,
    });
  });
});

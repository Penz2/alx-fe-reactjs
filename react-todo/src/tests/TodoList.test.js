import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../src/components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Add new todo");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test New Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test New Todo")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");

    // Initially not completed
    expect(todo).not.toHaveStyle("text-decoration: line-through");

    // Click to toggle
    fireEvent.click(todo);
    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const todo = screen.getByText("Learn React");
    const deleteButton = todo.nextSibling;

    fireEvent.click(deleteButton);

    expect(todo).not.toBeInTheDocument();
  });
});

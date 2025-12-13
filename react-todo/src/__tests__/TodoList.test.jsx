import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';

describe('TodoList component', () => {
  test('renders initial demo todos', () => {
    render(<TodoList />);

    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write tests')).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);

    const input = screen.getByLabelText('todo-input');
    const form = screen.getByRole('form', { hidden: true }) || screen.getByLabelText('add-todo-form');

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.submit(form);

    expect(screen.getByText('New task')).toBeInTheDocument();
  });

  test('toggles a todo completed state', () => {
    render(<TodoList />);

    const todoItem = screen.getByText('Learn React').closest('li');
    expect(todoItem).toHaveStyle('text-decoration: none');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: none');
  });

  test('deletes a todo', () => {
    render(<TodoList />);

    const todoText = 'Build a Todo App';
    expect(screen.getByText(todoText)).toBeInTheDocument();

    const deleteButton = screen.getByLabelText(`delete-${todoText}`);
    fireEvent.click(deleteButton);

    expect(screen.queryByText(todoText)).toBeNull();
  });
});

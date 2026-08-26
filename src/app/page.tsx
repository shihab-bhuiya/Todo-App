"use client";

import { useState } from "react";

import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import { Todo } from "@/type/todo";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Learn TypeScript Generics",
      completed: false,
    },
    {
      id: 2,
      title: "Build a Todo App",
      completed: true,
    },
  ]);

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos((previousTodos) => [
      ...previousTodos,
      newTodo,
    ]);
  };

  const toggleTodo = (id: number) => {
    setTodos((previousTodos) =>
      previousTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              completed: !todo.completed,
            }
          : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((previousTodos) =>
      previousTodos.filter(
        (todo) => todo.id !== id
      )
    );
  };

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <main className="min-h-screen bg-gray-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-4xl font-bold">
          My Todo App
        </h1>

        <p className="mb-8 text-gray-400">
          {completedCount} of {todos.length} tasks completed
        </p>

        <TodoForm onAdd={addTodo} />

        <TodoList
          todos={todos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}
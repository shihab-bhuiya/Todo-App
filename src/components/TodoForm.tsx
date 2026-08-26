"use client";

import { FormEvent, useState } from "react";

interface TodoFormProps {
  onAdd: (title: string) => void;
}

export default function TodoForm({
  onAdd,
}: TodoFormProps) {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    onAdd(trimmedTitle);

    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex gap-3"
    >
      <input
        type="text"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
        placeholder="What do you need to do?"
        className="flex-1 rounded-lg border border-gray-700 bg-gray-800 px-4 py-3 text-white outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
      >
        Add
      </button>
    </form>
  );
}
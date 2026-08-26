import { Todo } from "@/type/todo";


interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onToggle,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-700 bg-gray-800 p-4">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-5 w-5"
        />

        <span
          className={
            todo.completed
              ? "text-gray-500 line-through"
              : "text-white"
          }
        >
          {todo.title}
        </span>
      </div>

      <button
        onClick={() => onDelete(todo.id)}
        className="rounded bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
      >
        Delete
      </button>
    </div>
  );
}
import React from "react";

const TaskItem = React.memo(function TaskItem({
  task,
  onToggle,
  onDelete,
}) {
  console.log("Rendering:", task.title);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span>
        {task.title}
      </span>

      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
});

export default TaskItem;
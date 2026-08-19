import { useReducer, useCallback } from "react";

import TaskStats from "./TaskStats";
import AddTaskForm from "./AddTaskForm";
import TaskList from "./TaskList";


const initialTasks = [
  {
    id: 1,
    title: "Finish DBMS assignment",
    completed: false,
  },
  {
    id: 2,
    title: "Revise React hooks",
    completed: false,
  },
  {
    id: 3,
    title: "Submit lab report",
    completed: true,
  },
];


// ---------------- REDUCER ----------------

function taskReducer(state, action) {
  switch (action.type) {

    case "SET_TASKS":
      return action.payload;


    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];


    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      );


    case "DELETE_TASK":
      return state.filter(
        (task) => task.id !== action.payload
      );


    default:
      return state;
  }
}


// ---------------- COMPONENT ----------------

function TaskManager() {

  const [tasks, dispatch] = useReducer(
    taskReducer,
    initialTasks
  );


  const handleAdd = useCallback((title) => {
    dispatch({
      type: "ADD_TASK",
      payload: title,
    });
  }, []);


  const handleToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: id,
    });
  }, []);


  const handleDelete = useCallback((id) => {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }, []);


  return (
    <section>

      <TaskStats tasks={tasks} />

      <AddTaskForm onAdd={handleAdd} />

      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />

    </section>
  );
}

export default TaskManager;
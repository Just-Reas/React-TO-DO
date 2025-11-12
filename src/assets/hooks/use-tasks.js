import { useState, useEffect } from "react";


export const useTasks = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("tasks");

      if (savedTasks) {
        return JSON.parse(savedTasks);
      }

      return [
        { id: "task-1", title: "Сойти с ума", isDone: true },
        { id: "task-2", title: "Погладить кота", isDone: false },
      ];
    } catch (error) {
      console.log("Error with local storage, please fix meeee");
    }
  });

  const deleteAllTasks = () => {
    const isConfirmed = confirm("Are you sure?");

    if (isConfirmed) {
      setTasks([]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const toggleTaskComplete = (taskId, isDone) => {
    console.log("AA");
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, isDone };
        }
        return task;
      })
    );
  };

  const addTask = (title) => {
    if (!title.length) {
      alert("заголовок не должен быть пустым");
    }
    const newTask = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: title,
      isDone: false,
    };

    setTasks((prev) => [...prev, newTask]);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return {tasks, setTasks, addTask, toggleTaskComplete, deleteTask, deleteAllTasks};
};

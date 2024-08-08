import React, { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newDeadline, setNewDeadline] = useState(null);
  const [editingTask, setEditingTask] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setNewDeadline(e.target.value ? new Date(e.target.value).getTime() : null);
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: newTask,
          completed: false,
          deadline: newDeadline,
        },
      ]);
      setNewTask("");
      setNewDeadline(null);
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const startEditing = (task) => {
    setEditingTask(task.id);
    setEditedText(task.text);
  };

  const saveEdit = () => {
    if (editedText.trim()) {
      setTasks(
        tasks.map((task) =>
          task.id === editingTask ? { ...task, text: editedText } : task
        )
      );
      setEditingTask(null);
      setEditedText("");
    }
  };

  const cancelEdit = () => {
    setEditingTask(null);
    setEditedText("");
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleInputChange}
        placeholder="Enter a new task"
      />
      <input
        type="datetime-local"
        value={newDeadline || ""}
        onChange={handleDeadlineChange}
        placeholder="Enter a deadline"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {editingTask === task.id ? (
              <>
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
                <button onClick={cancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                    color:
                      task.deadline - Date.now() < 3600000 && !task.completed
                        ? "red"
                        : "inherit",
                  }}
                  onClick={() => toggleTaskCompletion(task.id)}Z
                >
                  {task.text}
                  {task.deadline && (
                    <span>
                      {" ("}
                      {new Date(task.deadline).toLocaleString()}
                      {" )"}
                    </span>
                  )}
                </span>
                <button onClick={() => startEditing(task)}>Edit</button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;

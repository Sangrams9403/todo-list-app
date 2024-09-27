import React, { useState } from 'react';

function TaskForm({ onSave, initialTask = { title: '', description: '' } }) {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.title.trim()) {
      onSave(task);
      setTask({ title: '', description: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Task Title"
        required
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Task Description"
      />
      <button type="submit">Save Task</button>
    </form>
  );
}

export default TaskForm;

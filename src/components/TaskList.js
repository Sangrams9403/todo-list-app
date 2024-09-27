import React, { useState } from 'react';
import TaskForm from './TaskForm';

function TaskList({ tasks, onUpdate, onDelete }) {
  const [editTask, setEditTask] = useState(null);

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          {editTask?.id === task.id ? (
            <TaskForm
              initialTask={task}
              onSave={(updatedTask) => {
                onUpdate(updatedTask);
                setEditTask(null);
              }}
            />
          ) : (
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button onClick={() => setEditTask(task)}>Edit</button>
              <button onClick={() => onDelete(task.id)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TaskList;

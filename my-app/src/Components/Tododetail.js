import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const TodoDetail = () => {
  const [task, setTask] = useState(null);
  const [newText, setNewText] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const task = location.state.task;
    setTask(task);
    setNewText(task.text);
  }, [location.state.task]);

  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  const updateTask = () => {
    setTask((prevTask) => ({ ...prevTask, text: newText }));
    navigate('/todos');
  };

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Task</h1>
      <input type="text" value={newText} onChange={handleChange} />
      <button onClick={updateTask}>Update</button>
    </div>
  );
};

export default TodoDetail;

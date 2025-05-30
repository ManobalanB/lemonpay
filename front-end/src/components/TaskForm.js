import { useState } from 'react';
import axios from 'axios';

export default function TaskForm({ task, onSave }) {
  const [taskName, setTaskName] = useState(task?.taskName || '');
  const [description, setDescription] = useState(task?.description || '');
  const [dueDate, setDueDate] = useState(task?.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : '');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!taskName || !dueDate) {
      setError('Task name and due date are required');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      if (task) {
        await axios.put(`http://localhost:5000/api/tasks/${task._id}`, { taskName, description, dueDate }, config);
      } else {
        await axios.post(`http://localhost:5000/api/tasks`, { taskName, description, dueDate }, config);
      }
      onSave();
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save task');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
        className="border p-3 mb-4 w-full rounded-lg font-nunito text-black text-base font-bold"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="border p-3 mb-4 w-full rounded-lg font-nunito text-black text-base font-bold"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border p-3 mb-4 w-full rounded-lg font-nunito text-black text-base font-bold"
        required
      /><br/>
      <button type="submit" className="add-task-button flex items-center justify-center gap-2">
        <svg className="vector vector-fill-white" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" stroke="white" strokeWidth="2" />
        </svg>
        {task ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
}
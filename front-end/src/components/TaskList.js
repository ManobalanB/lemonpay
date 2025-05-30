import axios from 'axios';
import '../style/TaskList.module.css';

export default function TaskList({ tasks, onEdit, onDelete }) {
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      onDelete();
    } catch (err) {
      console.error('Failed to delete task:', err);
    }
  };

  return (
    
    <div className="task-card">
      <br/>
      <div className="grid grid-cols-5 gap-4 p-4 border-b">
        <div className="task-table-header">No</div>
        <div className="task-table-header">Task</div>
        <div className="task-table-header">Description</div>
        <div className="task-table-header">Action</div>
        <div className="task-table-header">Date & Time</div>
      </div>
      {tasks.map((task, index) => (
        <div key={task._id} className="grid grid-cols-5 gap-4 p-4 border-b">
          <div className="task-table-text">{index + 1}</div>
          <div className="task-table-text">{task.taskName}</div>
          <div className="task-table-subtext">{task.description || 'No description'}</div>
          <div className="flex gap-2">
            <button
              onClick={() => onEdit(task)}
              className="bg-yellow-500 text-white px-3 py-1 rounded-lg font-nunito text-base font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(task._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg font-nunito text-base font-bold"
            >
              Delete
            </button>
          </div>
          <div className="task-table-subtext">
            {new Date(task.dueDate).toLocaleString('en-US', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
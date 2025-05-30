import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getToken, logout } from '../components/lib_auth';

export default function TasksPage() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const navigate = useNavigate();

  const fetchTasks = useCallback(async () => {
    try {
      const token = getToken();
      const response = await axios.get(`http://localhost:5000/api/tasks`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
      logout();
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate('/login');
      return;
    }
    fetchTasks();
  }, [navigate, fetchTasks]);

  return (
    <div className="desktop-version min-h-screen bg-text-white p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="task-header">Tasks Management</h1><br/>
        <button
          onClick={() => {
            logout();
            navigate('/login');
          }}
          className="bg-red-500 text-white px-4 py-2 mb-4 rounded-lg font-nunito text-base font-bold">
          Logout
        </button>
        <br/>
        <TaskForm
          task={editingTask}
          onSave={() => {
            setEditingTask(null);
            fetchTasks();
          }}
        />
        <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={fetchTasks} />
      </div>
    </div>
  );
}

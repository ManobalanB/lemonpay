const express = require('express');
const Task = require('../back-end/models_Task');
const authMiddleware = require('../back-end/middleware_auth');
const { validate, taskSchema } = require('../back-end/middleware_validate');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', validate(taskSchema), async (req, res) => {
  try {
    const { taskName, description, dueDate } = req.body;
    const task = new Task({ taskName, description, dueDate, userId: req.user.userId });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.put('/:id', validate(taskSchema), async (req, res) => {
  try {
    const { taskName, description, dueDate } = req.body;
    const task = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.userId },
      { taskName, description, dueDate },
      { new: true }
    );
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ _id: req.params.id, userId: req.user.userId });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
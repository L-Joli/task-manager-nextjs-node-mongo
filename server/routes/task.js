import { Router } from 'express';

class TaskRouter {
  constructor(taskService) {
    this.taskService = taskService;
  }

  getRouter() {
    const router =  Router();

    router.post('/', this.createTask);
    router.get('/', this.getAllTasks);
    router.put('/:id', this.updateTask);
    router.delete('/:id', this.deleteTask);

    return router;
  }

  createTask = async (req, res) => {
    try {
      const task = await this.taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  getAllTasks = async (req, res) => {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  updateTask = async (req, res) => {
    try {
      const task = await this.taskService.updateTask(req.params.id, req.body);
      res.json(task);
    } catch (error) {
      if (error.message === 'Task not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(400).json({ message: error.message });
      }
    }
  };

  deleteTask = async (req, res) => {
    try {
      const task = await this.taskService.deleteTask(req.params.id);
      res.json(task);
    } catch (error) {
      if (error.message === 'Task not found') {
        res.status(404).json({ message: error.message });
      } else {
        res.status(500).json({ message: error.message });
      }
    }
  };
}

export default TaskRouter;

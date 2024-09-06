import Task from '../models/Task.js';

class TaskService {

  createTask = async (taskData) => {
    try {
      const task = new Task(taskData);
      return await task.save();
    } catch (error) {
      throw new Error(error.message);
    }
  };

  getAllTasks = async () => {
    try {
      return await Task.find().sort({ completed: 1, createdAt: -1 });
    } catch (error) {
      throw new Error(error.message);
    }
  };  

  updateTask = async (id, taskData) => {
    try {
      const task = await Task.findByIdAndUpdate(id, taskData, { new: true, runValidators: true });
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  deleteTask = async (id) => {
    try {
      const task = await Task.findByIdAndDelete(id);
      if (!task) {
        throw new Error('Task not found');
      }
      return task;
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export default TaskService;

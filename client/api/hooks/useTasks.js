import { useState, useEffect } from 'react'
import { fetchTasks, addTask, deleteTask, updateTask } from '../task.js'

export const useTasks = () => {
  const [tasks, setTasks] = useState([])
  const [loading, setInitialLoading] = useState(true)
  const [error, setError] = useState(null)

  const loadTasks = async() => {
    try {
      const tasks = await fetchTasks()

      setTasks(tasks)
      setError(null)
      setInitialLoading(false)

    } catch (err) {
      setError('Failed to load tasks')
    }
  }

  const handleAddTask = async(newTask) => {
    try {
      await addTask(newTask)
      await loadTasks()
    } catch (err) {
      setError('Failed to add task')
    }
  }

  const handleUpdateTask = async(taskId, updatedField) => {
    try {
      await updateTask(taskId, updatedField)
      await loadTasks()
    } catch (err) {
      setError('Failed to update task')
    }
  }

  const handleDeleteTask = async(taskId) => {
    try {
      await deleteTask(taskId)
      await loadTasks()
    } catch (err) {
      setError('Failed to delete task')
    }
  }

  useEffect(() => {
    loadTasks()
  }, [])

  return { tasks, loading, error, handleAddTask, handleUpdateTask, handleDeleteTask, loadTasks }
}

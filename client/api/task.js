import { apiUrl } from './constants.js'

const taskAPI = `${apiUrl}/tasks`

export const fetchTasks = async() => {
  try {
    const response = await fetch(taskAPI)
    const tasks = await response.json()
    return tasks
  } catch (error) {
    console.error('Error fetching tasks:', error)
  }
}

export const addTask = async(newTask) => {
  try {
    const response = await fetch(taskAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTask, completed: false }),
    })
    const task = await response.json()
    return task
  } catch (error) {
    console.error('Error adding task:', error)
  }
}

export const updateTask = async(id, updatedField) => {
  try {
    const response = await fetch(`${taskAPI}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedField),
    })
    const task = await response.json()
    return task
  } catch (error) {
    console.error('Error adding task:', error)
  }
}

export const deleteTask = async(id) => {
  try {
    await fetch(`${taskAPI}/${id}`, {
      method: 'DELETE',
    })
  } catch (error) {
    console.error('Error deleting task:', error)
  }
}

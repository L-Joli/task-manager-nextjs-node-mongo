import { useState } from 'react'
import Button from './Button'

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = async(event) => {
    event.preventDefault()
    try {
      const task = title.trim()
      if (task) {
        onTaskCreated(title)
        setTitle('')
      }
    } catch (error) {
      console.error('Error creating task:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="p-2 border-b mr-4 outline-none bg-transparent placeholder-gray-500 placeholder-opacity-80"
        placeholder="New task"
      />
      <Button label="+" type="submit"/>
    </form>
  )
}

export default TaskForm

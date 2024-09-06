'use client'

import TaskList from '../components/TaskList'
import TaskForm from '../components/TaskForm'
import Loading from '../components/Loading'
import { useTasks } from '../api/hooks/useTasks'

export default function Home() {
  const { tasks, loading, error, handleAddTask, handleUpdateTask, handleDeleteTask } = useTasks()

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Task Manager</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <TaskForm onTaskCreated={handleAddTask} />
      {
        loading ?
          <Loading /> :
          <TaskList tasks={tasks} onTaskUpdated={handleUpdateTask} onTaskDeleted={handleDeleteTask} />
      }
    </div>
  )
}

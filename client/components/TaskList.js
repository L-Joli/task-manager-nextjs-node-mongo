import { useState, useEffect } from 'react'
import Button from './Button'

const TaskList = ({ tasks, onTaskUpdated, onTaskDeleted }) => {
    const [isTaskCompleted, setIsTaskCompleted] = useState({})

    useEffect(() => {
        const initialTaskCompletion = tasks.reduce((acc, task) => {
            acc[task._id] = task.completed
            return acc
        }, {})
        setIsTaskCompleted(initialTaskCompletion)
    }, [tasks])

    const handleCompletion = (taskId) => {
        const updatedCompletedState = !isTaskCompleted[taskId]
        setIsTaskCompleted({
            ...isTaskCompleted,
            [taskId]: updatedCompletedState
        })

        onTaskUpdated(taskId, { completed: updatedCompletedState })
    }

    const handleDelete = (taskId) => {
        if (taskId in isTaskCompleted) {
            const updatedTasks = { ...isTaskCompleted }
            delete updatedTasks[taskId]
            setIsTaskCompleted(updatedTasks)
        }
        onTaskDeleted(taskId)
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task._id} className="p-2 border-b flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id={`checkbox-${task._id}`}
                            type="checkbox"
                            checked={isTaskCompleted[task._id] || false}
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                            onChange={() => handleCompletion(task._id)}
                        />
                        <label htmlFor={`checkbox-${task._id}`} className={`${isTaskCompleted[task._id] ? 'line-through' : ''} ms-2 text-gray-900`}>
                            {task.title}
                        </label>
                    </div>
                    <Button label="x" onClick={() => handleDelete(task._id)} />
                </li>
            ))}
        </ul>
    )
}

export default TaskList

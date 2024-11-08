import React from 'react'

const TaskListNumbers = ({ data }) => {
    return (
        <div className='flex m-10 justify-between gap-5 screen'>
            <div className='rounded-xl px-9 py-6 w[45%] bg-red-500'>
                <h2 className='text-3xl font-bold'>{data.taskCounts.newTask}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl px-9 py-6 w[45%] bg-blue-500'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl px-9 py-6 w[45%] bg-green-500'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>

            <div className='rounded-xl px-9 py-6 w[45%] bg-yellow-500'>
                <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>



        </div>
    )
}

export default TaskListNumbers

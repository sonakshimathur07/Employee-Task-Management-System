import React from 'react'

const CompleteTask = ({data}) => {
  return (
   <div className='flex-shrink-0 p-5 h-full w-[300px] bg-green-400 rounded-xl '>
        <div className='flex justify-between items-center'>
             <h3 className='bg-red-600 px-3 py-1text-sm rounded'>{data.category}</h3>
             <h4 className='text-base'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm'> {data.taskDescription}</p>
      <div className='mt-2'>
        <button className='w-full'>Completed</button>
      </div>
      </div>
  )
}

export default CompleteTask
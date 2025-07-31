import React from 'react'

const NewTask = ({data}) => {
  return (
     <div className='flex-shrink-0 p-5 h-full w-[300px] bg-blue-400 rounded-xl '>
        <div className='flex justify-between items-center'>
             <h3 className='bg-red-600 px-3 py-1text-sm rounded'>{data.category}</h3>
             <h4 className='text-base'>{data.taskDate}</h4>
          </div>
          <h2 className='mt-5 text-xl font-semibold'>{data.taskTitle}</h2>
          <p className='text-sm'> {data.taskDescription}</p>
      <div className='mt-4'>
        <button>Accept Task</button>
      </div>
      </div>
  )
}

export default NewTask
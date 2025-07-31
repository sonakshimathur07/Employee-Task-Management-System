import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
const [userData,setUserData] = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded h-48'>
      <div className='bg-red-400 mt-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5 '>Employye Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Status</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
       </div>
       <div className='h-[80%] overflow-auto'> 
        {userData.map(function(elem,idx){
        return <div key={idx} className='border-2 bg-black-500 mb-2 py-2 px-4 flex justify-between rounded'>
        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.newTask}</h3>
        <h3 className='text-lg font-medium w-1/5 text-blue-600'>{elem.taskCounts.active}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.completed}</h5>
         <h5 className='text-lg font-medium w-1/5 bg-red-600'>{elem.taskCounts.failed}</h5>
       </div>
       })}
    </div>
      
      
    </div>
  )
}

export default AllTask
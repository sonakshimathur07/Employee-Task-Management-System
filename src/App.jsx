import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'



const App = () => {
  const [user, setUser] = useState(null);
  const [userData,setUserData] = useContext(AuthContext)
  const [loggedInUserData , setLoggedInUserData] = useState(null);
// console.log(authData.employees);
//  useEffect(() => {
//   // setLocalStorage()
//   getLocalStorage();
//  },)

// useEffect(() => {
// if(authData){
// const logedInUser = localStorage.getItem("loggedInUser")
// if(logedInUser){
// setUser(logedInUser.role)
// }}
// }, [authData])'

useEffect(()=>{
  const loggedInUser = localStorage.getItem('loggedInUser')
  // console.log(loggedInUser)
  if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data)
    console.log("userdata")
  }
},[])


const handleLogin = (email, password) => {
if(email == 'admin@me.com' && password == '123'){
  setUser('admin')
  localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
}else if(userData){  //email == 'user@me.com'&& password == '123'
  const employee =  userData.find((e)=>email == e.email && e.password == password)
  if(employee){
  setUser('employee')
  setLoggedInUserData(employee)
  localStorage.setItem('loggedInUser', JSON.stringify({role:'employee',data: employee}))
}
}else{
  alert("ivalid")
}
}


// handleLogin('admin@me.com', 123);

  return (
    <>
    {!user ? <Login handleLogin={handleLogin} />: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    {/* <EmployeeDashboard /> */}
    {/* <AdminDashboard /> */}
    </>
  )
}

export default App

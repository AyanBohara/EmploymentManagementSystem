import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import AuthProvider, { AuthContext } from './context/AuthProvider'




const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setloggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  //authData bata airako xa data haru 


  //check who is logged in user or admin
  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser')

  //     if (loggedInUser) {
  //       setUser(JSON.parse(loggedInUser).role)
  //     }

  //   }

  // }, [authData]) //[authData] edi auth data change bhayo bhani pheri run hosh



  //function to check weather to open admin or employee
  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == '123') {
      setUser({ role: 'admin' })
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' })) //local storage ma admin janxa
    }
    else if (authData) {
      const employee = authData.employees.find((e) => e.email === email && e.password === password)
      if (employee) {
        setUser({ role: 'employee' })
        set
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
    } else {
      alert('Invalid credentials')
    }

  }





  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user === 'admin' ? <AdminDashboard /> : ((user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : ''))}




    </>
  )
}

export default App

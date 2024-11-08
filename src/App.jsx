import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'



const App = () => {

  const [user, setUser] = useState(null)


  //function to check weather to open admin or employee
  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == 'admin') {
      setUser('admin')
    }
    else {
      setUser('employee')
    }

  }

  const data = useContext(AuthContext)
  console.log(data)





  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}

      {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}




    </>
  )
}

export default App

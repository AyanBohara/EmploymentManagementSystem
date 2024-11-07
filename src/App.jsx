import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {

  const [user, setUser] = useState(null)


  //function to check weather to open admin or employee
  const handleLogin = (email, password) => {

    if (email == 'admin@me.com' && password == 'admin') {
      console.log('admin login')
    }
    else {
      console.log('employee login')
    }



    // useEffect(() => {
    //   // setLocalStorage()
    //   getLocalStorage()


    // },)




    return (
      <>
        {!user ? <Login handleLogin={handleLogin} /> : ''}

        {user === 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}




      </>
    )
  }
}
export default App

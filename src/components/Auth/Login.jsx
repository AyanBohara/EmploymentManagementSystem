import React, { useState } from 'react'

//handleLogin is a prop
const Login = (handleLogin) => {

    const [email, setEmail] = useState('') //twoway binding
    const [password, setPassword] = useState('')




    //twoway binding
    const submitHandler = (e) => {
        e.preventDefault()
        console.log("Email is", email);
        console.log("Pass is", password);
        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }








    return (
        <div className='flex h-screen w-screen items-center justify-center'>

            <div className='border-2 rounded-xl border-cyan-600 p-20'>

                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'>

                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required className='border-2 outline-none bg-transparent border-cyan-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400' type="email" placeholder='Enter your email' />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required className='border-2 outline-none bg-transparent border-cyan-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400 mt-4' type="password" placeholder='Enter your password' />

                    <button className='mt-5 text-white  outline-none  bg-cyan-600 rounded-full text-xl py-3 px-5 border-none'>Login</button>
                </form>
            </div>

        </div>
    )
}

export default Login

import React from 'react'

const Header = ({ data }) => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-bold'>Hello<br /> <span className='text-3xl font-semibold'>{data.firstName}👋</span> </h1>
            <button className='bg-red-600 text-white px-5 py-2 rounded text-lg font-medium'>Logout</button>
        </div>
    )
}

export default Header

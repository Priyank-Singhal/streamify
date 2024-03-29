import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      <div className='ml-2 w-[100%]'>
        <Outlet />
      </div>
    </div>
  )
}

export default Body
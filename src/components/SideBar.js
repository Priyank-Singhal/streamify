import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const showMenuBar = useSelector(store => store.app.isSideMenuOpen);

  // Early return pattern
  if(!showMenuBar) return null;

  return (
    <div className='w-52 p-4'>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>Shorts</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>You</h1>
        <ul>
          <li>History</li>
          <li>Watch Later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <div>
        <h1 className='font-bold'>Explore</h1>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
        </ul>
      </div>
    </div>
  )
}

export default SideBar
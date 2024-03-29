import React from 'react'
import FilterButtonList from './FilterButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div>
      <div className=''>
      <FilterButtonList />
      </div>
      <VideoContainer />
    </div>
  )
}

export default MainContainer
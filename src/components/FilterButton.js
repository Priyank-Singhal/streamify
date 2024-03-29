import React from 'react'

const FilterButton = ({name}) => {
  return (
    <div>
        <button className='m-3 px-3 whitespace-nowrap bg-gray-200 py-1 rounded-lg'>{name}</button>
    </div>
  )
}

export default FilterButton
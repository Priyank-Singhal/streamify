import React from 'react'
import FilterButton from './FilterButton'
import { useSelector } from 'react-redux';

const FilterButtonList = () => {
  const List = ["All", "News", "DSA", "Motivation", "Gaming", "Airplanes",
    "Software Development", "New to you", "Physics", "ReactJS", "Interview Experience",
    "AI", "Computer Programming", "Planet", "Movie Reiews", "OOPS", "Workout", "Ramayana", "Narendra Modi", "Uttrakhand"
  ];

  const showMenuBar = useSelector(store => store.app.isSideMenuOpen);
  const width = showMenuBar ? 'w-[calc(100vw-13rem)]' : 'w-screen';
  return (
    <div className={`flex overflow-x-scroll ${width} no-scrollbar`}>
      {List.map((item, ind) => {
        return <FilterButton key={ind} name={item} />
      })}
    </div>
  )
}

export default FilterButtonList;
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSideMenu } from '../utils/appSlice';
import { Link, Outlet } from 'react-router-dom';
import { YOUTUBE_SEARCH_SUGGEST_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search)
  const dispatch = useDispatch();

  useEffect(() => {
    // Debouncing
    // make an API call after every keypress
    // but if difference 2 api calls is < 200ms
    // decline the API call

    const queryTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(queryTimer);
    }
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGEST_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }

  const handleToggleMenu = () => {
    dispatch(toggleSideMenu());
  }


  return (
    <div>
      <div className='grid grid-flow-col shadow-lg px-2 pt-1 pb-3 my-2'>
        <div className='flex col-span-1 pt-1'>
          <img
            className='h-7 cursor-pointer'
            onClick={() => handleToggleMenu()}
            alt='menu'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png'
          />
          <Link to="/">
            <img
              className='h-7 mx-3'
              alt='youtube'
              src='https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png'
            />
          </Link>
        </div>
        <div className='col-span-10 ml-[50%] -translate-x-[60%]'>
          <div className='w-full'>
            <input
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className='border w-4/5 border-gray-800 py-2 px-4 rounded-l-full'
              type='text'
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => {
                setTimeout(() => setShowSuggestions(false), 200)
              }}
            />
            <button className='border border-gray-800 rounded-r-full px-4 py-2 bg-gray-100 hover:bg-gray-200'>🔍</button>
          </div>
          {showSuggestions && <div className='fixed bg-white w-4/5 mx-2 rounded-lg shadow-xl border border-gray-200'>
            <ul>
              {suggestions.map(s =>
              (
                <Link to={'/search/' + s} className='cursor-default' key={s}>
                  <li className='py-2 px-3 hover:bg-gray-100'>
                    🔍 {s}
                  </li>
                </Link>
              )
              )}

            </ul>
          </div>}
        </div>
        <div className='col-span-1 pt-1'>
          <img className='h-8' alt='user-icon' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default Head
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { closeSideMenu } from '../utils/appSlice';

const SearchVideoCard = ({ info }) => {
    console.log(info);
    const { snippet } = info;
    // console.log(snippet)
    const { title, channelTitle, thumbnails } = snippet;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSideMenu());
      }, [])

    return (
        <div className='p-2 m-2 w-[50%] bg-gray-50 rounded-md shadow-lg flex'>
            <img
                className='rounded-lg'
                alt='thumbnail'
                src={thumbnails.medium.url}
            />
            <div className='px-3'>
                <h2 className='font-bold py-2'>{title}</h2>
                <p>{channelTitle}</p>
            </div>
        </div>
    )
}

export default SearchVideoCard
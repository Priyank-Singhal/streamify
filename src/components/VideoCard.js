import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;
    return (
        <div className='p-2 rounded-lg m-2 w-80 shadow-lg'>
            <img
                className='rounded-lg'
                alt='thumbnail'
                src={thumbnails.medium.url}
            />
            <h2 className='font-bold py-2'>{title}</h2>
            <p>{channelTitle}</p>
            <span>{statistics.viewCount}</span>
        </div>
    )
}

export default VideoCard
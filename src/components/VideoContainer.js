import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { VIDEO_LIST } from '../data/VideoList';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // fetchVideos();
    console.log("Videos", VIDEO_LIST);
    setVideos(VIDEO_LIST.items)
  }, []);

  const fetchVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    console.log("video api json",json);
    setVideos(json.items);
  }

  if (videos == []) return null;
  return (
    <div className='flex flex-wrap'>
      {videos.map(video =>
        <Link to={"/watch?v=" + video.id} key={video.id} >
          <VideoCard info={video} />
        </Link>
      )}
    </div>
  )
}

export default VideoContainer
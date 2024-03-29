import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeSideMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const VideoId = searchParams.get("v");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeSideMenu());
  }, [])

  return (
    <div>
    <div className='m-5 flex'>
      <div>
      <iframe
        width="1200"
        height="700"
        src={"https://www.youtube.com/embed/" + VideoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>

      </iframe>
      </div>
      <div className='w-full'>
        <LiveChat />
      </div>
    </div>
    <CommentsContainer />
    </div>
  )
}

export default WatchPage
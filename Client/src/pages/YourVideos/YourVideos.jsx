import React from 'react'
import Leftsidebar from '../../components/leftsidebar/leftsidebar';
import ShowVideoGrid from '../../components/ShowVideoGrid/ShowVideoGrid';
import vid from '../../components/video/Vid.mp4';

import './YourVideos.css'
function YourVideos() {
  const vids=[
    {
      _id : 1,
      video_src : vid,
      Channel : "62bafe6752cea35a6c330685f",
      uploadtime : "3 Day Ago ",
      uploaddate : "11-7-2023",
      views : "5M views",
      title : "Only Up | Stream",
      Uploader : "CarryIsLive",
      desription : "description of video 1"

    },
    {
      _id : 2,
      video_src : vid,
      Channel : "cdd",
      uploadtime : "1 Day Ago ",
      uploaddate : "13-7-2023",
      views : "6M views",
      title : "BGMI | Stream",
      Uploader : "CarryIsLive",
      desription : "description of video 2"
    },
    {
      _id : 3,
      video_src : vid,
      Channel : "add",
      uploadtime : "5 Min Ago ",
      uploaddate : "14-7-2023",
      views : "7M views",
      title : "BHOOT CUTE TO HAI",
      Uploader : "CarryIsLive",
      desription : "description of video 3"
    },
    {
      _id : 4,
      video_src : vid,
      Channel : "add",
      uploadtime : "2 Day Ago ",
      uploaddate : "12-7-2023",
      views : "10M views",
      title : "Stream",
      Uploader : "CarryIsLive",
      desription : "description of video 3"
    }
  ]
  return (
    <div className='container_Pages_App'>
        <Leftsidebar/>
        <div className='container2_Pages_App'>
          <div className="container_yourvideo">
          <h1>Your Videos</h1>
          <ShowVideoGrid vids={vids} />
          </div>
        </div>    
    </div>
  )
}

export default YourVideos
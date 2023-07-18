import React from 'react'
import vid from '../../components/video/Vid.mp4';
import WHL from '../../components/WHL/WHL';
function WatchLater() {
  const WatchLater=[
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
  ];

  return (

    <WHL page={"Watch Later"} videoList={WatchLater}/>
  )
}

export default WatchLater
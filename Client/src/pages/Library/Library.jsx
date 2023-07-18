import React from 'react'
import './Library.css';
import {FaHistory} from 'react-icons/fa';
import vid from '../../components/video/Vid.mp4';
import Leftsidebar from '../../components/leftsidebar/leftsidebar';
import WHL from '../../components/WHL/WHL';
import WHLVideoList from '../../components/WHL/WHLVideoList';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
function Library() {
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
          <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
              <b><FaHistory/></b>
              <b>History</b>
              </h1>
              <div className="container_videoList_LibraryPage">
                <WHLVideoList
                page={"History"}
                videoList={vids}
                />              
              </div>
          </div>
          <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
              <b><MdOutlineWatchLater/></b>
              <b>Watch Later</b>
              </h1>
              <div className="container_videoList_LibraryPage">
                <WHLVideoList
                page={"Watch Later"}
                videoList={vids}
                />              
              </div>
          </div>
          <div className="container_libraryPage">
              <h1 className="title_container_LibraryPage">
              <b><AiOutlineLike/></b>
              <b>Liked Videos</b>
              </h1>
              <div className="container_videoList_LibraryPage">
                <WHLVideoList
                page={"Liked Videos"}
                videoList={vids}
                />              
              </div>
          </div>
        </div>    
    </div>
  )
}

export default Library
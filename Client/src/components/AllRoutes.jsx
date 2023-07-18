import React from 'react'
import {
    Routes , 
    Route ,
    Link 
    } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Library from '../pages/Library/Library';
import WatchHistory from '../pages/WatchHistory/WatchHistory';
import WatchLater from '../pages/WatchLater/WatchLater';
import YourVideos from '../pages/YourVideos/YourVideos';
import LikedVideos from '../pages/LikedVideos/LikedVideos';
import VideoPage from './VideoPage/VideoPage';
 
    
function AllRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Library' element={<Library/>}/>
        <Route path='/WatchLater' element={<WatchLater/>}/>
        <Route path='/WatchHistory' element={<WatchHistory/>}/>
        <Route path='/YourVideos' element={<YourVideos/>}/>
        <Route path='/LikedVideos' element={<LikedVideos/>}/>
        <Route path='/videoPage/:vid' element={<VideoPage/>}/>
    </Routes>
  )
}

export default AllRoutes
import React from 'react';
import './LikeWatchLaterSaveBtns.css'
import { useState } from 'react';
import {BsThreeDots} from 'react-icons/bs';   
import { MdPlaylistAddCheck } from 'react-icons/md';
import { RiHeartAddFill, RiPlayListAddFill, RiShareForwardFill, RiShareForwardLine } from 'react-icons/ri';
import { AiFillDislike, AiFillLike, AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
function LikeWatchLaterSaveBtns() {
  const [SaveVideo,setSaveVideo] = useState(true)
  const [Dislike,setDislike] = useState(false)
  const [Like,setLike] = useState(false)

  const toggleSavedVideos=()=>{
    if(SaveVideo){
      setSaveVideo(false)
    }else{
      setSaveVideo(true)
    }
  }
  const togglelikebtn=()=>{
    if(Like){
      setLike(false)
    }else{
      setLike(true)
    }
  }
  const toggledislikebtn=()=>{
    if(Dislike){
      setDislike(false)
    }else{
      setDislike(true)
    }
  }
  return (

    <div className='btns_cont_videoPage'>
      <div className="btn_VideoPage">
        <BsThreeDots/>
      </div>
      <div className="btn_VideoPage">
      <div className="like_videoPage" onClick={()=>togglelikebtn()}>
          {
            Like?<>
              <AiFillLike  size={22} className='btns_videoPage'/>
            </> :<>
              <AiOutlineLike  size={22} className='btns_videoPage'/>     
            </>
          }
          <b>100k</b>
        </div>
      <div className="like_videoPage" onClick={()=>toggledislikebtn()}>
          {
            Dislike?<>
              <AiFillDislike  size={22} className='btns_videoPage'/>
            </> :<>
              <AiOutlineDislike  size={22} className='btns_videoPage'/>     
            </>
          }
          <b>DisLike</b>
        </div>
        
        <div className="like_videoPage" onClick={()=>toggleSavedVideos()}>
          {
            SaveVideo?<>
              <RiPlayListAddFill  size={22} className='btns_videoPage'/>
              <b>Save</b>
            </> :<>
              <MdPlaylistAddCheck  size={22} className='btns_videoPage'/>
              <b>Saved</b>
            </>
          }
        </div>
        <div className="like_videoPage">
          <>
          <RiHeartAddFill size={22} className='btns_videoPage'/>
          <b>Thanks</b>
          </>
        </div>
        <div className="like_videoPage">
          <>
          <RiShareForwardLine size={22} className='btns_videoPage'/>
          <b>Share</b>
          </>
        </div>
      </div>
    </div>
  )
}

export default LikeWatchLaterSaveBtns
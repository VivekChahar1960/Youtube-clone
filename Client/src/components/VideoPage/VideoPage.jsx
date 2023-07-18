import React from 'react'
import './VideoPage.css'
import vid from '../../components/video/Vid.mp4';
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns';
import Comments from '../Comments/Comments';
function VideoPage() {
  return (
    <>
    <div className='container_videoPage'>
        <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
                <video src={vid}
                className='{video_showvideo_videoPage}'
                controls
                // autoPlay
                ></video>
                <div className="video_details_videoPage">
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_VideoPage">Title</p>
                        <div className="views_date_btns_VideoPage">
                            5M views <div className="dot"></div>Uploaded 1 Day ago
                        </div>
                        <LikeWatchLaterSaveBtns />
                    </div>
                </div>
                <div className="chanel_details_videoPage">
                    <b className="chanel_logo_videoPage">
                        <p>C</p>
                    </b>
                    <p className="chanel_name_videoPage">Channel Name</p>
                </div>
                <div className="comments_VideoPage">
                    <h2>
                        <u>Comments</u>
                    </h2>
                    <Comments/>
                </div>
            </div>
            <div className="moreVideoBar">
                More Videos
            </div>
        </div>    
    </div></>

  )
}

export default VideoPage
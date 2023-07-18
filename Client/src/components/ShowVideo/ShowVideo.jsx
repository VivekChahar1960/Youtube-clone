import React from 'react'
import {Link} from 'react-router-dom'
import './ShowVideo.css'
function ShowVideo({vid}) {
  return (
    <>
    <Link to={`/videoPage/${vid?._id}`}>
        <video 
        src={`${vid?.video_src}`}
        className='video_ShowVideo'
        ></video>
    </Link>
    <div className='video_description'>
        <div className="channel_logo_App">
            <div className="fstChar_logo_App">
                <>{vid?.Uploader.charAt(0).toUpperCase()}</>
            </div>
        </div>
        <div className='video_details'>
            <p className='title_vid_ShowVideo'>{vid?.title}</p>
            <pre className='vid_views_UploadTime' >{vid?.uploaddate}</pre>
            <pre className='vid_views_UploadTime' > 
                {vid?.views} <div className="dot"></div> Uploaded {vid?.uploadtime}
            </pre>
        </div>
    </div>
    </>
  )
}

export default ShowVideo
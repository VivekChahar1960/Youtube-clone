import React from 'react'
import Leftsidebar from '../leftsidebar/leftsidebar'
import './WHL.css'
import WHLVideoList from './WHLVideoList'
function WHL({page,videoList}) {
  return (
    <div className='container_Pages_App'>
        <Leftsidebar/>
        <div className='container2_Pages_App'></div>
        <p className="conatiner_whl">
            <p className="box_WHL leftside_whl">
                <b>Your {page} Shown Here</b>
                {
                    page==="History"&&
                    <div className="clear_History_btn">
                    Clear History
                </div>
                }
                
            </p>
            <div className="rightSide_whl">
                <h1 className='history_heading'>{page}</h1>
                <div className="whl_list"></div>
                <WHLVideoList
                page={page}
                videoList={videoList}
                />
            </div>
        </p>
    </div>

  )
}

export default WHL
import React from 'react'
import { useState } from 'react'
import DisplayComments from './DisplayComments';

function Comments() {
  const [commentText, setcommentText] = useState("")

  const commentList=[{
    _id:"1",
    commentBody:"Hello",
    userCommented:"Naman Sharma",
  },
  {
    _id:"2",
    commentBody:"Hii",
    userCommented:"RAJAN DON",
  },
  {
    _id:"3",
    commentBody:"Nice Video",
    userCommented:"Aditya antil",
  },
  {
    _id:"4",
    commentBody:"Carry bro",
    userCommented:"Dhan singh",
  },
  {
    _id:"5",
    commentBody:"big fan",
    userCommented:"Arun Sholet",
  }

  ]
  const handleOnSubmit=(e)=>{
    e.preventDefault();
  }
  return (
    <>
      <form  
      className='comments_sub_form_comments'
      onSubmit={handleOnSubmit}
      >
        <input 
        type="text" 
        onChange={e=>setcommentText(e.target.value)} 
        placeholder='add comment....'  
        className='comment_ibox'
        />
        <input type="submit" value="add"  className='comment_add_btn_comments'/>
      </form>
      <div className="display_comment_container">
        {
          commentList.map(m=>{
            return(
              <DisplayComments
              cID={m._id}
              commentBody={m.commentBody}
              userCommented={m.userCommented}

              />
            )
          })
        }
      </div>
    </>
  )
}

export default Comments
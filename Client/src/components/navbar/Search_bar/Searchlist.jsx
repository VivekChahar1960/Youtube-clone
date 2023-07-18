import React from 'react'
import { FaSearch } from 'react-icons/fa';
import  './searchlist.css';
function Searchlist({TitleArray,setSearchQuery}) {
  return (
    <>
    
    <div className="Container_SearchList">
        {
            TitleArray.map(m=>{
                return <p 
                key={m}
                onClick={e=>setSearchQuery(m)}
                className='titleItem'>
                <FaSearch/>
                {m}
              </p>
            })
        }
      
      <p className='titleItem'>
        <FaSearch/>
        ITEM2
      </p>
    </div>

    </>
  )
}

export default Searchlist
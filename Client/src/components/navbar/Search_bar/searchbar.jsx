import React, { useState } from 'react';
import './Searchbar.css';
import {FaSearch} from "react-icons/fa";
import {BsMicFill} from 'react-icons/bs';
import Searchlist from './Searchlist';
function Searchbar() {
  const [SearchQuery, setSearchQuery] = useState("");
  const [SearchList, setSearchList] = useState();
  const TitleArray=["DSA" , "DSA with Java" , "Web development"].filter(q=>q.toUpperCase().includes(SearchQuery.toUpperCase()));
  return (
    <div className='searchbar_container'>
        <div className='searchbar_container2'>
            <div className='search_div'> 
                <input type='text' className='input_text' placeholder='Search'
                onChange={e=>setSearchQuery(e.target.value)}
                value={SearchQuery}
                onClick={e=>setSearchList(true)}
                /> 
                <FaSearch className='searchIcon_SearchBar'
                onClick={e=>setSearchList(false)}
                />
                <BsMicFill className='Mic_SearchBar'/>
                {SearchQuery&& SearchList &&
                  <Searchlist 
                  setSearchQuery={setSearchQuery}
                  TitleArray={TitleArray}
                  />
                }
            </div>
        </div>
    </div>
  )
}

export default Searchbar
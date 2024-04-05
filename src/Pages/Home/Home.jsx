import React, { useState } from 'react'
import './style.scss'
import { HeroBnner } from './HeroBanner/HeroBnner'
import { useNavigate } from 'react-router-dom'

export const Home = () =>{

  const [background , setBackground] = useState("");
  const [query , setQuery] = useState("");
//creating instance of navigate

const navigateLink = useNavigate();

//Search Handler query 
const searchQueryHandler = (event)=>{
  if(event.e == "Enter" && query.length > 0){
      navigateLink(`/search/${query}`)
  }
}
return (
  <div className='heroBanner'>
    <div className= 'wrapper'>
      <div className='heroBannerContert'>
        <span className='title'>Welcome</span>
        <span className='subTitle'>Millions of movies, TV shows and people to discover.
        Explore now.</span>
        <div className='searchInput'>
          <input type='text' placeholder='Search for a movie andd Tv shows ...'/>
          <button>Search</button>
        </div>
      </div>
    </div>
  </div>
)
}

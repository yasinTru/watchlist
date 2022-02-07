import React, { useEffect, useState } from 'react';
import Results from "./Results"
function MainPage() {

  const [search,setSearch]= useState("")
  const [list, setList]= useState([])
  

  const inputHandler = async (e) =>
  {
    e.preventDefault()
    getAnime(search)
  }
   
  const getAnime = async (query) =>
  {
      const resData= await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
    .then(res=> res.json())
    console.log(resData.results);
    setList(resData.results)
  
    }



  return(
    <main>
    <div className='MainPage'>
      <form
        className='addItem'
       onSubmit={inputHandler}>
            <input type="search" placeholder='Search...'
            value={search}
            onChange={e => setSearch(e.target.value) }
            >
              
            </input>
            </form>
          </div>
          <div className='animeList'>

    
            {list.map(anime=>
            (
              <Results
             key={anime.mal_id} anime={anime}></Results>))}
          </div>
    </main>
        

     
     
  )
}

export default MainPage;

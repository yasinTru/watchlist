import React, {useContext} from 'react';
import {GlobalStateContext} from '../context/GlobalState';

const Results = ({anime}) => {

  const{addToAnimelist} = useContext(GlobalStateContext);
  

  return(
      <article
       className='resultCard'>
           <a href={anime.url} target="_blank" rel='noreferrer'>
               <figure>
                   <img className='resultImg'
                     src={anime.image_url}
                     alt=""/>
               </figure>
               <h3 className='resultInfo'>{anime.title}</h3>
               
            </a>
            <button className='btnResult' 
                onClick={()=>addToAnimelist(anime)}
               >ADD</button>
      </article>
  )
};

export default Results;

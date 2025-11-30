 import React from 'react'
import RightCard from './RightCard'
 
 const RightContent = (props) => {
    console.log(props);
   return (
     <div id='right' className='h-full w-2/3 rounded-4xl  p-4 flex flex-nowrap gap-10 overflow-x-auto'>
        {props.users.map(function(elem,idx){
            return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} color={props.color}></RightCard>
        })}
     </div>
   )
 }
 
 export default RightContent
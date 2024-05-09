import Image from './image/bbbb.jpg';
import './Day4.css';
import React from 'react';
const Day4=()=>{

    // const [count,setCount]=React.useState(0);
    // const textId=document.getElementById('text');
    var count=0;
   const interval=setInterval(() => {
    const textId=document.getElementById('text');
    textId.innerHTML=count+" %";
    count++;
    if(count==102)
        {
            clearInterval(interval);
            textId.innerHTML='';
        }
   }, 70);

    return(
        <div className='image-container'>
        <img src={Image}  alt="" ></img>
        <div id="text" className='centered'></div>

    
       


        </div>
    )
}

export default Day4;
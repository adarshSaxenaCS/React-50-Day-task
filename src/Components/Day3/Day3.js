
import React from 'react';
import './Day3.css'
import { FaSearch } from "react-icons/fa";

const Day3=()=>{
  const [inputClass,setInputClass]=React.useState('inputOpen');

  
  const justDoIt=(str)=>{
    //alert(str);
    const searchBox=document.getElementById('searchBox');
    
   if(str==='inputOpen')
   {
    setInputClass('inputClose');
    searchBox.disabled=true;
    searchBox.placeholder='';
   }
  else
  {  
    setInputClass('inputOpen');
    searchBox.disabled=false;
    searchBox.placeholder='Search...';
    searchBox.textContent='';
  }

  }
   


    return(
    <div className="frame">
 
      
      <div><input className={inputClass} placeholder='Search...' id="searchBox" type="text" ></input> < FaSearch onClick={()=>{justDoIt(inputClass)}} className='icon' size={25}/></div>
    


    </div>)
}


export default Day3;
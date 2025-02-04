import Image from './image/house.jpg'
import './Day5.css';
import { IoMenu } from "react-icons/io5";
import { GiCancel } from "react-icons/gi";
import React from 'react';
import { IoHome } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import { BiSolidContact } from "react-icons/bi";
const Day5=()=>{

    const handleClose = () => {
        document.getElementsByClassName("Main_container")[0].setAttribute("class","Main_container")
      }
    
      const handleOpen = () => {
        document.getElementsByClassName("Main_container")[0].setAttribute("class","Main_container show-nav")
      }
   
    return(
   <>
   <div className='super_main_day3'>
    <div className='Main_container'>
      <div className='triangle-container'>
        <div className='triangle'>
          <button id='close' onClick={handleClose}><IoMenu /></button>
          <button id='open' onClick={handleOpen}><GiCancel /></button>
        </div>
      </div>
      <div className='content_day3'>
        <h1>Amazing Article</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
        </p>
        <h3>My House</h3>
        <img src={Image} alt="dog image" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?</p>
      </div>
    </div>
    <nav className='navbar_day3'>
      <ul>
        <li><IoHome/> Home
        </li>
        <li><IoPerson/> About</li>
        <li><BiSolidContact /> Contact</li>
      </ul>
    </nav>
    </div>

        
   </>
    )
}

export default Day5;
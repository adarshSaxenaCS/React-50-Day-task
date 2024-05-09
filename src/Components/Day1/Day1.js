import Image1 from './image/11.jpg'
import Image2 from './image/22.jpg'
import Image3 from './image/33.jpg'
import Image4 from './image/44.jpg'
import Image5 from './image/55.jpg'
import './day1.css';
function Day1() {

  const onClickHandler=(id)=>{
      if(id=="img1")
      {
        document.getElementById('img1').style.width='1350px';
        document.getElementById('img2').style.width='100px';
        document.getElementById('img3').style.width='100px';
        document.getElementById('img4').style.width='100px';
        document.getElementById('img5').style.width='100px';
        
      }
      
      else if(id=="img2")
      {
        document.getElementById('img1').style.width='100px';
        document.getElementById('img2').style.width='1350px';
        document.getElementById('img3').style.width='100px';
        document.getElementById('img4').style.width='100px';
        document.getElementById('img5').style.width='100px';
        
      }
     else  if(id=="img3")
     {
       document.getElementById('img1').style.width='100px';
        document.getElementById('img2').style.width='100px';
        document.getElementById('img3').style.width='1350px';
        document.getElementById('img4').style.width='100px';
        document.getElementById('img5').style.width='100px';
        
     }
     else  if(id=="img4")
     {
       document.getElementById('img1').style.width='100px';
        document.getElementById('img2').style.width='100px';
        document.getElementById('img3').style.width='100px';
        document.getElementById('img4').style.width='1350px';
        document.getElementById('img5').style.width='100px';
        
     }

      else
      {
        document.getElementById('img1').style.width='100px';
        document.getElementById('img2').style.width='100px';
        document.getElementById('img3').style.width='100px';
        document.getElementById('img4').style.width='100px';
        document.getElementById('img5').style.width='1350px';
        
      }
  }
  
  return (
    <div >
     <img  id="img1" className='img1' onClick={()=>{onClickHandler("img1")}} src={Image1}></img>
     <img  id="img2" onClick={()=>{onClickHandler("img2")}} src={Image2}></img> 
     <img  id="img3" onClick={()=>{onClickHandler("img3")}} src={Image3}></img> 
     <img  id="img4" onClick={()=>{onClickHandler("img4")}} src={Image4}></img> 
     <img  id="img5" onClick={()=>{onClickHandler("img5")}} src={Image5}></img> 
     
    </div>
  );
}

export default Day1;

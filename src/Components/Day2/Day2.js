import './day2.css'
const Day2 = () => {

    const progress = document.getElementById("progress");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");
    const circles = document.querySelectorAll(".circle");
    
    let currentActive = 1;
    
   const  nextBtn=() => {
    //alert(circles.length);

        currentActive++;
        if (currentActive > circles.length) {
            currentActive = circles.length;
        }
        
        update();
    }
    
    const prevBtn=() => {
        //alert('ss');
        currentActive--;
        if (currentActive < 1) {
            currentActive = 1;
        }
        update();
    }

    
    function update() {


        circles.forEach((circle, indx) => {
         //   alert(circle+","+indx);
            if (indx < currentActive) circle.classList.add("active");
            else circle.classList.remove("active");
            
        });

           
        var data=0+"%";
        data =((currentActive - 1) / (circles.length - 1)) * 100 + "%";

      //  alert(data);

        progress.style.width=data;
        
  

        if (currentActive === 1) {
            prev.disabled = true;
        } else if (currentActive === circles.length) {
            next.disabled = true;
        } else {
            prev.disabled = false;
            next.disabled = true;
        }
    }
    
    
    return (
        <div>

            <div class="container">
                <div class="progress-container">
                    <div class="progress" id="progress"></div>
                    <div class="circle active">1</div>
                    <div class="circle ">2</div>
                    <div class="circle">3</div>
                    <div class="circle">4</div>
                    <div class="circle">5</div>
                    <div class="circle">6</div>
                    
                    

                    
                </div>

                <button class="btn" onClick={prevBtn} id="prev" >Prev</button>
                <button class="btn" onClick={nextBtn} id="next">Next</button>
            </div>

        </div >
    )
}
export default Day2;
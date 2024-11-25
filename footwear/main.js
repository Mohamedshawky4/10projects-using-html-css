const slides= document.querySelectorAll(".slide");
const slides_num=slides.length;
const carousel=document.getElementById("carousel");
const left=document.getElementById("left");
const right=document.getElementById("right");
console.log(slides);
let current_slide=0;
left.addEventListener('click',()=>{
    current_slide--;
    if (current_slide<0) {
        current_slide=slides_num-1;
        
    }
updatecarousel();
})
right.addEventListener('click',()=>{
    current_slide++;
if (current_slide>slides_num-1) {
    current_slide=0;
   
    
}
  
    updatecarousel();
    
})
function updatecarousel(){
    carousel.style.transform=`translateX(${-current_slide*slides[0].offsetWidth}px)`;
    document.body.style.background = `#${slides[current_slide].getAttribute("data-bg")}`;
    
}
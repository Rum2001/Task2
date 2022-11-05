
const slideItems = [{
  bgColor: "var(--color-bg1)"
},
{
  bgColor: "var(--color-bg2)"
},
{
  bgColor: "var(--color-bg3)"
},
{
  bgColor: "var(--color-bg4)"
},
{
  bgColor: "var(--color-bg5)"
}, {
  bgColor: "var(--color-bg6)"
}, {
  bgColor: "var(--color-bg7)"
}, {
  bgColor: "var(--color-bg8)"
}
]
var slideIndex = 0;
let x = document.getElementsByClassName("banner-slide");
let y = document.getElementById("bg-color");
const slideShow=document.querySelectorAll(".banner-slide")
const nextButton=
carousel();

function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display="none";
    x[i].className = x[i].className.replace("slide-current", "");
  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 };
  y.style.backgroundColor = slideItems[slideIndex - 1].bgColor;
  x[slideIndex-1].classList.add("slide-current");
  x[slideIndex-1].style.display="flex";
  setTimeout(carousel, 5000);
}
classShow();
function classShow(){
  slideShow.forEach(function(items,index){
    const imgShow=items.querySelectorAll(".pic-img");
    if(items.classList.contains("slide-current")){
      imgShow.forEach(function(img){
        img.classList.add("show")
      })
    }
    else{
      imgShow.forEach(function(img){
        img.classList.remove("show")
      })
    }
  })
  setTimeout(classShow,5000);
}
function nextSlide(){

}
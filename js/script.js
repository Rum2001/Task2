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
var x = document.getElementsByClassName("banner-slide");
var y = document.getElementById("bg-color");
carousel();
function carousel() {
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";

  }
  slideIndex++;
  if (slideIndex > x.length) { slideIndex = 1 }
  y.style.backgroundColor = slideItems[slideIndex - 1].bgColor;
  x[slideIndex - 1].style.display = "block";

  setTimeout(carousel, 5000);
}



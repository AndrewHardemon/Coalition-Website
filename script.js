//Carousel Functionality

//Create array of images
let imgArr = [...document.querySelectorAll(".rectangle-23")]
document.querySelectorAll(".ellipse").forEach(function (el, index) {
  el.addEventListener("click", function (e) {
    let current = e.target;
    let id = current.getAttribute("id").split("-")[1] - 1;
    current.classList.add("ellipse-active");


    //Dimensions
    // let carouselWidth = "960px";
    // let imageWidth = "220px";
    // let imageMargin = "10px";


    //Switch images
    imgArr.forEach(function (img, index) {
      if(id === 0){
        img.style.transform = `translateX(0%)`;
      } else if(index < id){
        img.style.transform = `translateX(${104 * 1 * (imgArr.length-id)}%)`;
      } else {
        img.style.transform = `translateX(${-105 * id}%)`;
      }
    });

    //remove for next siblings
    while (current.nextElementSibling) {
      let sib = current.nextElementSibling;
      sib.classList.remove("ellipse-active");
      current = sib;
    }

    //remove for previous siblings
    current = e.target;
    while (current.previousElementSibling) {
      let sib = current.previousElementSibling;
      sib.classList.remove("ellipse-active");
      current = sib;
    }
  });
});


// Tab Functionality
const tab1 = document.querySelector(".tab-1");
const tab2 = document.querySelector(".tab-2");
document.querySelector("#mountain-1").addEventListener("click", function (e) {
  tab1.classList.remove("hidden");
  tab2.classList.add("hidden");
});
document.querySelector("#mountain-2").addEventListener("click", function (e) {
  tab2.classList.remove("hidden");
  tab1.classList.add("hidden");
});
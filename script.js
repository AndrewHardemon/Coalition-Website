
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


function translateImage(img, id){
  if(id === 0){
    img.style.transform = `translateX(0%)`;
  }
  imgArr[id-1].style.transform = `translateX(${-105 * (id-1)}%)`
}
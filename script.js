


document.querySelectorAll(".ellipse-1").forEach(function (el) {
  el.addEventListener("click", function (e) {
    let current = e.target;
    current.classList.add("ellipse-active");

    //remove for next siblings
    while (current.nextElementSibling) {
      current.nextElementSibling.classList.remove("ellipse-active");
      current = current.nextElementSibling;
    }

    //remove for previous siblings
    current = e.target;
    while (current.previousElementSibling) {
      current.previousElementSibling.classList.remove("ellipse-active");
      current = current.previousElementSibling;
    }
  });
});
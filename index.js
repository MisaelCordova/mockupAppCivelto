let modal = document.getElementById("myModal");

let btn = document.getElementById("btnModal");
/*
btn.addEventListener(function(e){
  e.preventDefault();
})*/

btn.onclick = function () {
    modal.style.display = "block";
   // clear();
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
}
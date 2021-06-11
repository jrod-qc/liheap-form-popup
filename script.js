var modalCloseBtn = document.getElementById("modal-close-btn");
var modal = document.getElementById("modal");
var modalDisplayBtn = document.getElementById("modal-display-btn");

// This is the Form Modal
// setTimeout(function() {
//     modal.style.display = "flex";
// }, 5000);

modalCloseBtn.addEventListener("click", function() {
    modal.style.display = "none";
})

modalDisplayBtn.addEventListener("click", function() {
    modal.style.display = "flex"
})
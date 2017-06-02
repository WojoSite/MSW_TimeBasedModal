window.setTimeout(showModal, 2000);
var myModal = document.getElementById("modal-bg");

function showModal() {
  console.log("==showModal==");
  myModal.style.display = "flex";
}

var closer = document.getElementById("close-modal");
closer.addEventListener("click", closeModal, true);

function closeModal(){
  myModal.style.display = "none";
}

// select modal-btn,modal-overlay,close-btn
const modalBtn = document.querySelector(".modal-btn")
const modalOverlay = document.querySelector(".modal-overlay")
const close_Btn = document.querySelector(".close-btn")

// listen for click events on modal-btn and close-btn
modalBtn.addEventListener('click', function(){
    // if (modalOverlay.classList.contains("open-modal")){
    //     modalOverlay.classList.remove("open-modal")
    // }else{
    //     modalOverlay.classList.add("open-modal")
    // }

    modalOverlay.classList.toggle("open-modal")
})

close_Btn.addEventListener('click', function(){
    modalOverlay.classList.remove("open-modal")
})
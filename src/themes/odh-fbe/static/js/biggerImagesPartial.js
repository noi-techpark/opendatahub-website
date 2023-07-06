// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


function closeModal() {
    let modalElements = document.getElementsByClassName("modalClose");
  
    if (modalElements.length > 0) {
        let bootstrapModal = bootstrap.Modal.getInstance(modalElements[0]);
    
        if (bootstrapModal) {
            bootstrapModal.hide();
        }
    }
}
  

function deActiveBiggerImages(){
        let windowWidth = window.innerWidth;
        let btns = document.querySelectorAll("#btn-img-open");

        if (windowWidth < 992) {
            let containers = document.querySelectorAll("#container");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "");
                e.style.cursor = "default";
            })
            containers.forEach((i) => {                
            i.id = "containerClosed";
            })
            closeModal();
        }else{
            let containers = document.querySelectorAll("#containerClosed");
            console.log("bigger");
            btns.forEach((e) => {
                e.setAttribute("data-bs-toggle", "modal");
                e.style.cursor = "pointer";
            })
            containers.forEach((i) => {  
                i.id = "container";
            })
        }
}          
window.addEventListener('resize', deActiveBiggerImages);

document.addEventListener("DOMContentLoaded", deActiveBiggerImages);

window.addEventListener("load", deActiveBiggerImages);


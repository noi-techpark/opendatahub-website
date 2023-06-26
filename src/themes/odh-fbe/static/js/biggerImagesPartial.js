// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


function clickedBig(idOfImage){
    idOfImage.style.height = "35pc";
    idOfImage.style.width = "auto";
    idOfImage.style.transitionDuration = "120s";
}

function clickedSmall(idOfImage){
    idOfImage.style.height = "0px";
    idOfImage.style.width = "auto";
}

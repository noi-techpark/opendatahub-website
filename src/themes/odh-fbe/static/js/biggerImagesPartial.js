// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


function clickedBig(hiddenImage, viewImage){
    hiddenImage.style.height = "35pc";
    hiddenImage.style.width = "auto";

    viewImage.style.opacity = "0";
}

function clickedSmall(hiddenImage, viewImage){
    hiddenImage.style.height = "0px";
    hiddenImage.style.width = "auto";

    viewImage.style.opacity = "1";
}

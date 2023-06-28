// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

if (getCookie("filterValue")) {
    filterDatasets(getCookie("filterValue"));
    const selector = document.querySelector("#availability-select");
    const options = selector.querySelectorAll("option");
    options.forEach((e) => {
        if (e.value === getCookie("filterValue")) e.selected = true;
    })
} else {
    filterDatasets("all");
}

function filterDatasets(option) {
    setCookie("filterValue", option, 180);
    const noDatasets = document.querySelector(".no-datasets");
    const cards = document.querySelectorAll(`.dataset-card`);

    noDatasets.classList.add("d-none");
    
    let count = 0;
    cards.forEach(card => {
        if (card.dataset.availability === "partially-closed" || card.dataset.availability === option || option === "all") {
            card.style.display = ""
        } else {
            card.style.display = "none";
            count++;
        }
    });

    if (count === cards.length) noDatasets.classList.remove("d-none");
}

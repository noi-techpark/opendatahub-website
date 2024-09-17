// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

function genericSlideshow() {

    function dqs(query) {
        return document.querySelector(query);
    }

    function eqs(element, query) {
        return element.querySelector(query);
    }

    function dce(tagName) {
        return document.createElement(tagName)
    }

    function shuffleArr(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }

    function removeDuplicates(arr) {
        let names = [];
        arr = arr.filter((e) => {
            const isDuplicate = names.includes(e.name);
            if (!isDuplicate) {
                names.push(e.name);
                return true;
            }
            return false;
        })
        return arr;
    }

    function getLogos(data) {
        let logos = [];

        for (let i = 0; i < data.children.length; i++) {
            const e = data.children[i];
            const singleProvider = {};
            singleProvider.name = eqs(e, ".name").innerHTML;
            singleProvider.img = eqs(e, ".img").innerHTML;
            singleProvider.link = eqs(e, ".link").innerHTML;
            logos.push(singleProvider);
        }

        logos = removeDuplicates(logos);
        return logos
    }

    function populateContainer(container, logos, logosNum, minLogosNum) {
        
        shuffleArr(logos);
        const slidesNum = logos.length / logosNum;

        for (let i = 0; i < slidesNum; i++) {

            const slide = dce("div");
            slide.classList.add("slide", "px-2");

            const row = dce("div");
            row.classList.add("row");

            slide.appendChild(row);

            for (let j = 0; j < logosNum; j++) {

                if (logos.length === 0) break

                const {name, img, link} = logos.pop();

                const div = dce("div");
                div.classList.add("col-4", "col-lg-3");

                const anchor = dce("a");
                anchor.href = link;
                anchor.target = "_blank"

                const image = dce("img");
                image.classList.add("img-responsive")
                image.src = img;
                image.alt = name;
                
                anchor.appendChild(image);
                div.appendChild(anchor);
                row.appendChild(div);
            }

            container.appendChild(slide);
            if (logos.length < minLogosNum) break

        }

        return container;
    }

    const data = dqs("#slideshow-item");
    const arr = getLogos(data);
    const logLen = arr.length;
    const slidesContainer = dqs("#slideshow-container");

    const logosNum = 12;
    const minLogosNum = 1;
    populateContainer(slidesContainer, arr, logosNum, minLogosNum);

    const intervalSpeed = 7000;
    const transformSpeed = 1500;

    let firstChild;
    let secondChild;
    let intervalID;

    function shiftRight() {
        firstChild = dqs("#slideshow-container>:nth-child(1)")
        secondChild = dqs("#slideshow-container>:nth-child(2)")

        firstChild.classList.add("shift-left-once")
        secondChild.classList.add("shift-left-once")

        setTimeout(() => {
            slidesContainer.removeChild(firstChild)
            firstChild.classList.remove("shift-left-once")
            secondChild.classList.remove("shift-left-once")
            slidesContainer.appendChild(firstChild)
        }, transformSpeed);
    }

    function automaticShift() {
        setTimeout(() => {
            shiftRight();
            intervalID = setInterval(shiftRight, intervalSpeed); 
        }, intervalSpeed);
    }

    if (logLen > 12) {
        automaticShift();
    }
}

genericSlideshow();
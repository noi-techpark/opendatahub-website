// const baseUrl = "https://metadata.opendatahub.testingmachine.eu/";
// const descElement = document.getElementById("availability-desc");
// const dataset = document.querySelector("h1").textContent.toUpperCase();

// async function setDesc(baseUrl, dataset, descElement) {
//     const response = await fetch(baseUrl);
//     const json = await response.json();
//     const single = json[dataset];
    
//     // for (const key in single) {
//     //     if (Object.hasOwnProperty.call(single, key)) {
//     //         const element = single[key];
//     //         descElement.innerText += `${key.replace(/\s*\(.*\)\s*/, "").replace("note", "Note")}: ${element.replace(/\s*\(?[cC]ontact.*in this data\)?\s*/g, "")}\n`;
//     //     }
//     // }
// }

// setDesc(baseUrl, dataset, descElement);

// function showOpen() {
//     document.getElementById("availability-desc-closed").classList.remove("show") 
//     document.getElementById("availability-desc-open").classList.add("show")
// }

// function showClosed() {
//     document.getElementById("availability-desc-open").classList.remove("show") 
//     document.getElementById("availability-desc-closed").classList.add("show")
// }

// document.querySelector(".half-width.open")
//     .addEventListener("click", showOpen)

// document.querySelector(".half-width.closed")
//     .addEventListener("click", showClosed)

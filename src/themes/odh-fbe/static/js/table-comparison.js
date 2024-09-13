// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

// Responsive COmparison Table JS

const tc = document.getElementById("table-comparison");
const headers = tc.querySelectorAll("li");
const tableRows = Array
  .from(tc.querySelectorAll("tbody tr"))
  .map((tr) => Array.from(tr.children).filter((td, index) => index !== 0));

headers.forEach((header, hIndex) => {
  header.addEventListener("click", () => {
    
    headers.forEach((header, index) => {
      if (index === hIndex) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    })

    tableRows.forEach((tr) => {
      tr.forEach((td, index) => {
        if (index === hIndex) {
          td.style.display = "table-cell";
        } else {
          td.style.display = "none";
        }
      });
    });
  });
});

headers[0].click();

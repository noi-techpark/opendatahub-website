// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

function ready(fn) {
  if (document.readyState !== 'loading') {
    fn();
    return;
  }
  document.addEventListener('DOMContentLoaded', fn);
}

ready(() => {
  spinnerFadeOut();
  setupGototop();
  setupContactForm();
})

function spinnerFadeOut() {
  const animationTime = 800;
  const spinner = document.getElementById("custom-spinner");
  spinner.style.animation = `fade-out ${animationTime}ms forwards`;
  setTimeout(() => spinner.remove(), animationTime);
}

function setupGototop() {
  document.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      document.getElementById("gototop").classList.add("active");
    } else {
      document.getElementById("gototop").classList.remove("active");
    }
  })
};

function setupContactForm() {
  /* Provides shortcuts to manage elements in the document */
  function ElementSelector() {
    "use strict";
  }

  /* Returns an element form its id */
  ElementSelector.prototype.get = function (element_id) {
    "use strict";

    return document.getElementById(element_id);
  };

  ElementSelector.prototype.getClass = function (classname) {
    "use strict";

    return document.getElementsByClassName(classname);
  };

  ElementSelector.prototype.activate = function (element_id) {
    return my.get(element_id).classList.toggle("is-active");
  };

  // Gets replaced on deploy
  const url = "https://example.com";

  let my = new ElementSelector();
  let req = new XMLHttpRequest();

  function sendForm(e) {
    e.preventDefault();

    my.get("response").innerHTML = "";
    data = new FormData(my.get("contact-form"));
    my.activate("loading");
    req.open("POST", url);
    req.send(data);

    req.onload = function () {
      let json = JSON.parse(this.responseText);
      my.activate("loading");
      if (json.status === 1) {
        my.get("response").innerHTML =
          "&#10004; Your request has been processed.";
      } else {
        my.get("response").innerHTML =
          "Sorry, your request could not be processed. Retry.";
      }
    };
  }

  let form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", sendForm);
  }
}

// Enable smooth scrolling on full page load
document.addEventListener('readystatechange', event => { 
  if (event.target.readyState === "complete") {
      document.querySelector("html").style.setProperty("scroll-behavior", "smooth", "important");
  }
});
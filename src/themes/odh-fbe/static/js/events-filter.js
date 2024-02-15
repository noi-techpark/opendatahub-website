// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

const upcomingEventsContainer = document.getElementById("upcoming-events");
const upcomingEvents = upcomingEventsContainer.querySelectorAll(".event-box");

const pastEventsContainer = document.getElementById("past-events");

const currentDate = new Date();

// removes past events from upcoming events box and append to past events box
Array.from(upcomingEvents)
  // remove upcoming events from array
  .filter((event) => {
    const dateEl = event.querySelector(".event-date");
    const dateParts = dateEl.textContent.split(", ");
    const date = new Date([dateParts[1], dateParts[2]].join(", "));
    date.setDate(date.getDate() + 1)
    return date <= currentDate;
  })
  // remove past events from upcoming container and add to past events container
  .forEach((pastEvent) => {
    upcomingEventsContainer.removeChild(pastEvent);
    const bgDiv = pastEvent.querySelector(".event-card");
    bgDiv.classList.remove("bg-white");
    bgDiv.classList.add("bg-darker");
    pastEventsContainer.prepend(pastEvent);
  });
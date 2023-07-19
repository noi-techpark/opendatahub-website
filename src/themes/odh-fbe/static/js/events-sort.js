// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

const upcomingEventsContainer = document.getElementById("upcoming-events");
const upcomingEvents = upcomingEventsContainer.querySelectorAll(".event-box");

const pastEventsContainer = document.getElementById("past-events");

const currentDate = new Date();

Array.from(upcomingEvents)
  .filter((event) => {
    const dateEl = event.querySelector(".event-date");
    const dateParts = dateEl.textContent.split(", ");
    const date = new Date([dateParts[1], dateParts[2]].join(", "));

    return date < currentDate;
  })
  .forEach((event) => {
    upcomingEventsContainer.removeChild(event);
    const bgDiv = event.querySelector(".event-card");
    bgDiv.classList.remove("bg-white");
    bgDiv.classList.add("bg-darker");
    pastEventsContainer.prepend(event);
  });

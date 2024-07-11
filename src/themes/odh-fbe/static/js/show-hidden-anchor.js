// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later


// Get the current hash from the URL
let hash = window.location.hash;

if (hash) {
    // Find the element that matches the hash
    console.log("hash " + hash);
    let targetElement = document.querySelector(hash);
    if (targetElement) {
        // Close all other sections and update their icons
        let allSections = document.querySelectorAll('.collapse');
        allSections.forEach(function(section) {
            if (section.classList.contains('show')) {
                section.classList.remove('show');
                // Find the button that controls this section
                let button = document.querySelector('[data-bs-target="#' + section.id + '"]');
                if (button) {
                    // Update the aria-expanded attribute to false
                    button.setAttribute('aria-expanded', 'false');
                    // Change the icon to indicate the section is collapsed
                    let icon = button.querySelector('i.fa-caret-up');
                    if (icon) {
                        icon.classList.remove('fa-caret-up');
                        icon.classList.add('fa-caret-down');
                    }
                }
            }
        });

        // Find the closest section to the target element
        let section = targetElement.closest('.collapse');
        if (section && !section.classList.contains('show')) {
            // show section
            section.classList.add('show');
            // Find the button that controls this section
            let button = document.querySelector('[data-bs-target="#' + section.id + '"]');
            if (button) {
                // Ensure the icon state is updated for the opened section
                button.setAttribute('aria-expanded', 'true');
                let icon = button.querySelector('i.fa-caret-down');
                if (icon) {
                    icon.classList.remove('fa-caret-down');
                    icon.classList.add('fa-caret-up');
                }
            }
        }
    }
}

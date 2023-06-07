// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

(function configMailto () {

    const title = document.querySelector(".container-content h1").textContent;
    const href = `mailto:help@opendatahub.com?subject=Collaboration request for dataset ${title}`;

    document.querySelector(".dataset-mailto").href = href;
})()
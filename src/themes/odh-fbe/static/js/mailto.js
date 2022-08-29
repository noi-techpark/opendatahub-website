(function configMailto () {

    const title = document.querySelector(".container-content h1").textContent;
    const href = `mailto:help@opendatahub.com?subject=Collaboration request for dataset ${title}`;

    document.querySelector(".dataset-mailto").href = href;
})()
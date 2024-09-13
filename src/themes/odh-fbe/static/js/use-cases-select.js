// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

function filterUseCases(form) {
  const formData = new FormData(form);
  const selectedTags = new Set(formData.getAll("use-case-tag"));

  document.querySelectorAll("#use-case").forEach((useCase) => {
    if (selectedTags.size === 0) {
      useCase.classList.remove("d-none");
      return;
    }

    const tags = useCase.dataset.tags.trim().split(" ");
    const hasSelectedTag = tags.some((tag) => selectedTags.has(tag))

    if (hasSelectedTag) {
      useCase.classList.remove("d-none");
    } else {
      useCase.classList.add("d-none")
    }
  })
}
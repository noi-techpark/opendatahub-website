// SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>
//
// SPDX-License-Identifier: AGPL-3.0-or-later

/*
 * The dataset cards are rendered by the external
 * <datasets-list-widget> web component 
 * so this repo cannot change the card markup directly. This script decorates
 * specific cards after the widget has rendered them.

 * How a dataset gets a notice:
 *  1. Its description (edited in the Databrowser dataset
 *     metadata) starts with the exact sentence stored in SENTENCE below.
 *  2. If its title is listed in NEW_LINKS, a link to the replacement dataset
 *     is added as well.
 * 
 *  Datasets that are deprecated but do not start with SENTENCE are left untouched.
*/

(function () {
  var SENTENCE = 'This dataset is currently deprecated and not being updated.';

  var NEW_LINKS = {
    'e-charging station': { url: 'https://databrowser.opendatahub.com/dataset-overview/378092cc-1b5e-445e-ad50-075628458d07', label: 'New E-charging station dataset' },
    'e-charging plug':    { url: 'https://databrowser.opendatahub.com/dataset-overview/db24af5e-1bd0-498e-952d-24d5153b90da',    label: 'New E-charging plug dataset' }
  };

  // Replaces the description of every matching card with the notice
  // followed by the rest of the original description.
  function decorate(root) {
    root.querySelectorAll('.dataset-card').forEach(function (card) {
      var desc = card.querySelector('.py-3');
      if (!desc || desc.querySelector('[data-deprecation-notice]')) return;

      var text = desc.textContent.trim();
      if (text.indexOf(SENTENCE) !== 0) return;

      var titleEl = card.querySelector('h4 strong');
      var title = titleEl ? titleEl.textContent.replace(/\s+/g, ' ').trim().toLowerCase() : '';
      var rest = text.slice(SENTENCE.length).trim();

      var notice = document.createElement('div');
      notice.setAttribute('data-deprecation-notice', '');
      notice.style.cssText = 'background:#fff3cd;border-left:4px solid #ffc107;padding:10px 12px;border-radius:4px;margin-bottom:10px;font-size:0.9em;color:#664d03;';
      notice.append(SENTENCE);

      var link = NEW_LINKS[title];
      if (link) {
        notice.append(' Use the new dataset: ');
        var a = document.createElement('a');
        a.href = link.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.textContent = link.label;
        a.style.cssText = 'font-weight:600;color:#664d03;text-decoration:underline;';
        notice.append(a);
      }

      desc.textContent = '';
      desc.append(notice);
      if (rest) desc.append(rest);
    });
  }

   // The widget re-renders its cards when the user searches, filters 
   // which would remove the notice. Re-apply it on every change.
  function init() {
    var host = document.querySelector('datasets-list-widget');
    if (!host || !host.shadowRoot) return false;
    var root = host.shadowRoot;
    decorate(root);
    new MutationObserver(function () { decorate(root); })
      .observe(root, { childList: true, subtree: true, characterData: true });
    return true;
  }

  // The widget loads asynchronously and fetches its data from an API, so the
  // <datasets-list-widget> element may not exist yet when this script runs.
  // This polls every 100 ms until the script can attach to it, and stops
  // polling once it succeeds or after (about 10 seconds)
  var tries = 0;
  var timer = setInterval(function () {
    if (init() || ++tries > 100) clearInterval(timer);
  }, 100);
})();
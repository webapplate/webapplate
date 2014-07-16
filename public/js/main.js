/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  'use strict';
  document.addEventListener('DocumentLocalized', function() {
    document.body.classList.remove('hidden');
    // YourApp.init();
  });
}());

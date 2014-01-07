/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
document.addEventListener('DocumentLocalized', function() {
  'use strict';

  document.body.classList.remove('hidden');
  // YourApp.init();
});
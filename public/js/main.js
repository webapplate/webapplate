/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  'use strict';
  document.addEventListener('DocumentLocalized', function() { // l20n ready
    document.body.classList.remove('hidden');
    $.material.ripples();
    // document.addEventListener('deviceready', this.onDeviceReady, false); // cordova ready

    // App.init();
  });
}());

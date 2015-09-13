/* global $ */
/**
 * Main entry point.
 *
 * the DOM has been localized and the user sees it in their language.
 *
 * @class Main
 */
(function() {
  'use strict';
  document.addEventListener('DOMLocalized', function() { // l20n ready
    document.body.classList.remove('hidden');
    $.material.ripples();
    // document.addEventListener('deviceready',
    //  this.onDeviceReady, false); // cordova ready

    // App.init();

    /*
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js', {scope: './'})
        .then(function(registration) {
          console.log('ServiceWorker registration successful ' +
          'with scope: ', registration.scope);
        })
        .catch(function(err) {
          console.log('ServiceWorker registration failed: ', err);
        });
    } else {
      console.warn('Service workers aren\'t supported in this browser.');
    }
    */
  });
}());

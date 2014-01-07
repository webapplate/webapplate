(function () {
  'use strict';
  /**
   * check if Firefox webapp is installed
   *
   * @class Installer
   */
  if (navigator.mozApps !== undefined) {
    var app_stat = navigator.mozApps.getSelf();
    app_stat.onsuccess = function() {
      if (app_stat.result) {
        //instsalled
        var installed = navigator.mozApps.getInstalled();
        installed.onsuccess = function() {
          if (installed.result.manifest.version !==
              app_stat.result.manifest.version) {
            console.log('install update version');
            navigator.mozApps.install();
          }
        };
      } else {
        // not installed
        var manifestUrl = location.href.substring(0,
          location.href.lastIndexOf('/')) + '/manifest.webapp';

        var app_install = navigator.mozApps.install(manifestUrl);
        app_install.onsuccess = function() {
          console.log('successful installed');
        };
        app_install.onerror = function() {
          console.log('not installed');
        };
      }
    };
    app_stat.onerror = function() {
      alert('Error checking installation status: ' + this.error.message);
    };
  } else {
    console.log('WebApp is not supported');
  }
}());
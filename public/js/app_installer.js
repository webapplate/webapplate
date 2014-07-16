(function() {
  'use strict';
  /**
   * check if Firefox webapp is installed
   *
   * @class Installer
   */
  if (navigator.mozApps !== undefined) {
    var appStat = navigator.mozApps.getSelf();
    appStat.onsuccess = function() {
      if (appStat.result) {
        //instsalled
        var installed = navigator.mozApps.getInstalled();
        installed.onsuccess = function() {
          if (installed.result.manifest.version !==
              appStat.result.manifest.version) {
            console.log('install update version');
            navigator.mozApps.install();
          }
        };
      } else {
        // not installed
        var manifestUrl = location.href.substring(0,
          location.href.lastIndexOf('/')) + '/manifest.webapp';

        var appInstall = navigator.mozApps.install(manifestUrl);
        appInstall.onsuccess = function() {
          console.log('successful installed');
        };
        appInstall.onerror = function() {
          console.log('not installed');
        };
      }
    };
    appStat.onerror = function() {
      alert('Error checking installation status: ' + this.error.message);
    };
  } else {
    console.log('WebApp is not supported');
  }
}());

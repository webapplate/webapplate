//check if app is installed
if (navigator.mozApps !== undefined) {
  var app_stat = navigator.mozApps.getSelf();
  app_stat.onsuccess = function() {
  if (app_stat.result) {
    //instsalled
    var installed = navigator.mozApps.getInstalled();
    installed.onsuccess = function() {
      if (installed.result.manifest.version !==
          app_stat.result.manifest.version) {
        navigator.mozApps.install();
      }
    };
    installed.onerror = function() {
    };
  } else {
    // not installed
    var manifestUrl = location.href.substring(0,
      location.href.lastIndexOf('/')) + '/manifest.webapp';
    // alert(manifestUrl);

    var app_install = navigator.mozApps.install(manifestUrl);
    app_install.onsuccess = function() {
    };
    app_install.onerror = function() {
    };
  }
  };
  app_stat.onerror = function() {
    alert('Error checking installation status: ' + this.error.message);
  };
} else {
    // console.log('WebApp not supported');
}

//check if app is installed
var manifestUrl = location.href.substring(0, location.href.lastIndexOf('/'))+'/manifest.webapp';
// alert(manifestUrl);
if( navigator.mozApps != undefined ){
var app_stat = navigator.mozApps.getSelf();
app_stat.onsuccess = function() {
  if (app_stat.result) {
        //instsalled
  } else {
        // not installed
        var app_install = navigator.mozApps.install(manifestUrl);
        app_install.onsuccess = function() {
        };
        app_install.onerror = function() {
        };
  }
};
app_stat.onerror = function() {
  alert('Error checking installation status: '+ this.error.message);
};
}
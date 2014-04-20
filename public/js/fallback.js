(function() {
  'use strict';

  // Reload content
  var reload = document.querySelector('#reload');
  if (reload) {
    reload.onclick = function() {
      location.reload(true);
    };
  }
}());

/**
 * Only used in Chrome Apps
 *
 * @class Background
 */
chrome.app.runtime.onLaunched.addListener(function() {
  'use strict';
  chrome.app.window.create('../index.html', {
    'bounds': {
      'width': 320,
      'height': 480
    }
  });
});

/* jshint node: true */
module.exports = {
  'secret': 'webapplate', // session secret key, change to your own
  'port': 8000,
  'debug': true,
  'isDynamic': false,
  'sshSupport': false,
  'privatekeyPath': './ssl/privatekey.pem',
  'certificatePath': './ssl/certificate.pem'
};

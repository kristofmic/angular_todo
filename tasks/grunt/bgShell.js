module.exports = {
  server: {
    cmd: 'NODE_ENV=development nodemon app'
  },
  protractor: {
    cmd: 'protractor test/config/protractor.conf.js'
  }
};
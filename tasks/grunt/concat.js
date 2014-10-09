module.exports = {
  components: {
    src: [
      '<%= componentsPath %>/angular/angular.js',
      '<%= componentsPath %>/angular-touch/angular-touch.js',
      '<%= componentsPath %>/angular-ui-router/release/angular-ui-router.js'
    ],
    dest: '<%= pubJsPath %>/components.js'
  },
  main: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/vendor/**/*.js',
      '<%= jsPath %>/main/home/home_module.js',
      '<%= jsPath %>/main/home/*.js',
      '<%= jsPath %>/main/states/states_module.js',
      '<%= jsPath %>/main/states/*.js',
      '<%= jsPath %>/main/templates_module.js',
      '<%= jsPath %>/main/main_module.js',
      '<%= jsPath %>/main/*.js',
      '<%= jsPath %>/**/*.js',
    ],
    dest: '<%= pubJsPath %>/main.js'
  }
};

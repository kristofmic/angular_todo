module.exports = {
  components: {
    src: [
      '<%= componentsPath %>/angular/angular.js',
      '<%= componentsPath %>/angular-touch/angular-touch.js',
      '<%= componentsPath %>/angular-ui-router/release/angular-ui-router.js'
    ],
    dest: '<%= pubJsPath %>/components.js'
  },
  todo: {
    options: {
      process: function(src, filepath) {
        return '\n// ' + filepath + '\n' + src;
      }
    },
    src: [
      '<%= jsPath %>/vendor/**/*.js',
      '<%= jsPath %>/states/states_module.js',
      '<%= jsPath %>/states/*.js',
      '<%= jsPath %>/templates_module.js',
      '<%= jsPath %>/todo/todo_module.js',
      '<%= jsPath %>/todo/*.js',
      '<%= jsPath %>/**/*.js',
    ],
    dest: '<%= pubJsPath %>/todo.js'
  }
};

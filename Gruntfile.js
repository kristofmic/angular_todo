module.exports = gruntConfig;

function gruntConfig(grunt) {
  var
    pkg = grunt.file.readJSON('package.json'),
    tasks = require('./tasks/grunt');

  grunt.initConfig({
    jsPath: 'assets/js',
    componentsPath: 'assets/components',
    cssPath: 'assets/css',
    htmlPath: 'assets/templates',
    imagePath: 'assets/img',
    fontPath: 'assets/fonts',
    pubJsPath: 'public/js',
    pubCssPath: 'public/css',
    pubImagePath: 'public/img',
    pubFontPath: 'public/fonts',

    concat: tasks.concat,
    watch: tasks.watch,
    copy: tasks.copy,
    sass: tasks.sass,
    ngtemplates: tasks.ngtemplates,
    bgShell: tasks.bgShell,
    karma: tasks.karma
  });

  for (var task in pkg.devDependencies) {
    if (task !== 'grunt' && !task.indexOf('grunt')) {
      grunt.loadNpmTasks(task);
    }
  }

  grunt.registerTask('build:dev', [
    'copy',
    'ngtemplates',
    'concat',
    'sass'
  ]);
  grunt.registerTask('build:dist', [
    'build:dev'

  ]);
  grunt.registerTask('test:dev', [
    'karma:dev',
    'bgShell:protractor'
  ]);
  grunt.registerTask('server', ['bgShell:server']);
  grunt.registerTask('default', [
    'build:dist',
    'server'
  ]);
}
module.exports = {
  components: {
    expand: true,
    src: [
      '<%= componentsPath %>/bootstrap/dist/css/bootstrap.min.css',
      '<%= componentsPath %>/fontawesome/css/font-awesome.min.css'
    ],
    dest: '<%= pubCssPath %>/',
    flatten: true,
    filter: 'isFile'
  },
  fonts: {
    expand: true,
    src: [
      '<%= componentsPath %>/fontawesome/fonts/*'
    ],
    dest: '<%= pubFontPath %>/',
    flatten: true,
    filter: 'isFile'
  }
};
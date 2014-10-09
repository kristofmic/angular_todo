module.exports = {
  main: {
    options: {
      style: 'expanded'
    },
    files: {
      '<%= pubCssPath %>/main.css': '<%= cssPath %>/main.scss'
    }
  },
};
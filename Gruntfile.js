module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     uglify: {
      options: {
        banner: '/*! <%= pkg.name %> version: <%= pkg.version %> (<%= grunt.template.today("dd-mm-yyyy") %>) */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('build', ['jshint', 'uglify']);

};

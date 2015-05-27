module.exports = function(grunt) {

  grunt.initConfig({
    bower_concat: {
      all: {
        dest: 'src/bower_vendor.js',
        exclude: [
        ],
        bowerOptions: {
          relative: false
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-bower-concat');

  grunt.registerTask('default');

};


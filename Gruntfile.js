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
    },
    uglify: {
       bower: {
        options: {
          mangle: true,
          compress: true
        },
        files: {
          'src/bower_vendor.min.js': 'src/bower_vendor.js'
        }
      }
    },
    clean: {
     vendorize: ['src/bower_vendor.js']
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*_spec.js',
          helpers: 'spec/*_helper.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('vendorize', [
    'bower_concat',
    'uglify:bower',
    'clean:vendorize'
  ]);

  grunt.registerTask('spec', ['jasmine']);
};

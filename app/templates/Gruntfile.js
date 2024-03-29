// Generated on 2013-09-02 using reaction 0.0.0
'use strict';
var LIVERELOAD_PORT = 35729;

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    watch: {
      options: {
        nospawn: true,
        livereload: LIVERELOAD_PORT
      },
      livereload: {
        files: [
          'index.html',
          'app/components/**/*',
          'app/stores/**/*',
          'app/styles/**/*'
        ],
        tasks: ['build']
      }
    },
    express: {
      server: {
        options: {
          port: 9000,
          // change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost',
          server: 'app.js',
          livereload: LIVERELOAD_PORT,
          bases: ['public', 'build']
        }
      }
    },
    open: {
      server: {
        path: 'http://localhost:<%%= express.server.options.port %>'
      }
    },
    react: {
      options: {
        extension: 'jsx'
      },
      build: {
        files: {
          'build/js/components': 'app/components'
        }
      }
    },
    browserify: {
      main: {
        src: 'app/lib/main.js',
        dest: 'build/js/main.js',
        options: {
          aliasMappings: [
            {
              flatten: true,
              cwd: 'build/js/components',
              src: ['**/*.js']
            },
            {
              flatten: true,
              cwd: 'app/lib',
              src: ['**/*.js']
            },
            {
              flatten: true,
              cwd: 'app/stores',
              src: ['**/*.js']
            },
            {
              cwd: 'app/components/mixins',
              src: ['*.js'],
              dest: 'mixins'
            },
          ],
        }
      }
    },
    concat: {
      build: {
        files: [
          {
            expand: true,
            flatten: true,
            src:  ['app/components/**/*.scss'],
            dest: 'build/.tmp/scss'
          }
        ]
      },
      css: {
        src: ['build/.tmp/css/**/*.css'],
        dest: 'build/css/styles.css'
      }
    },
    compass: {
      build: {
        options: {
          importPath: 'app/styles',
          sassDir: ['build/.tmp/scss'],
          cssDir: 'build/.tmp/css'
        }
      }
    }
  });

  grunt.registerTask('build', ['react', 'browserify', 'concat:build', 'compass', 'concat:css']);
  grunt.registerTask('default', ['build', 'express', 'open', 'watch']);
};
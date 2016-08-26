// Gruntfile.js

module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      options: {
        livereload: 28754
      },
      files: {
        options: {
        interrupt: true
        },
        files: [
          'app/{,*/}*.html',
          'app/src/{,*/}*.html',
          'Gruntfile.js'
        ], 
        tasks: [
          'twigRender'
        ]
      },
      js: {
        options: {
          livereload: 28754
        },
        files: [
          'app/scripts/*.js'
        ],
        tasks: [
          'copy'
        ]
      },
      sass: {
        options: {
          livereload: 28754
        },
        files: [
          'app/styles/sass/_{,*/}*.scss',
          '!app/styles/sass/_{,*/}*.scss'
        ],
        tasks: [
          'compass', 'copy'
        ]
      }
    },


    compass: {
      dev: {
        options: {
          sassDir: 'app/styles/sass',
          cssDir: 'app/styles/css'
        }
      }
    },

    copy: {
      js: {
        expand: true,
        cwd: 'app/scripts/',
        src: '*.js',
        dest: 'dist/scripts/',
      },
      css: {
        expand: true,
        cwd: 'app/styles/css/',
        src: '*.css',
        dest: 'dist/styles/css/',
      }
    },

    // twigRender / output_twig
    twigRender: {

      dist: {
        options: {
          context: 'data.json'
        },
        files : [{
          data: 'data.json',
          expand: true,
          cwd: 'app/src/',
          src: [
            '{,*/}*.twig', 
            '{,*/}*/{,*/}*.html', 
            '!{,*/}_*.twig', 
            '!{,*/}_*.html'
          ], // Match twig templates but not partials
          // src: '{,*/}*.html',
          dest: 'dist/',
          ext: '.html'
        }]
      }
    },

    connect: {
        livereload: {
            options: {
            port: 9000,
            open: false,
            base: 'dist'
          }
        }
    },
    clean: {
      dist: ['dist']
    }



  });

  // ============= // CREATE TASKS ========== //

  // this default task will go through all configuration (dev and production) in each task 
  grunt.registerTask('default', ['connect']);


  grunt.registerTask('serve', ['clean', 'twigRender',  'connect', 'compass', 'copy', 'watch']);

  // grunt.loadNpmTasks('grunt-output-twig');
  
  grunt.loadNpmTasks('grunt-twig-render');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-clean');
};
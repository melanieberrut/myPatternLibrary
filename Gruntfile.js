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
          'app/src/**/*.html',
          'app/src/**/*.twig',
          'Gruntfile.js'
        ], 
        tasks: [
          'twigRender'
        ]
      },
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
          src: ['{,*/}*.twig', '{,*/}*.html', '!{,*/}_*.twig', '!{,*/}_*.html'], // Match twig templates but not partials
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
            open: false
          }
        }
    }



  });

  // ============= // CREATE TASKS ========== //

  // this default task will go through all configuration (dev and production) in each task 
  grunt.registerTask('default', ['connect']);


  grunt.registerTask('serve', ['twigRender', 'connect', 'watch']);

  // grunt.loadNpmTasks('grunt-output-twig');
  
  grunt.loadNpmTasks('grunt-twig-render');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
};
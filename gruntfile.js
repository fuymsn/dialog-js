module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      build:{
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          
        },
        files: {
          "build/dialog.min.css": "src/style/dialog.less"
        }
      },
      
      common:{
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          
        },
        files: {
          "build/reset.min.css": "src/style/reset.css",
        }
      }
    },
    
    watch: {
      options: {
        spawn: true,
      },
      
      css: {
        files: ['src/style/*.less', 'src/style/*.css'],
        tasks: ['less']
      },
    }
    
  });
  
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['less']);

};
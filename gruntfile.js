module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      build:{
        options: {
          compress: false,
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          
          //配置插件
          plugins: [
            
            new (require('less-plugin-autoprefix'))({
              browsers: ["last 2 versions"]
            })
            
          ],
          
          //替换变量
          modifyVars: {
            //imgPath: '"http://mycdn.com/path/to/images/"'
            imgPath: '"../src/image/"'
          }
          
        },
        
        files: {
          "build/dialog.min.css": ["src/style/reset.css","src/style/dialog.less"]
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
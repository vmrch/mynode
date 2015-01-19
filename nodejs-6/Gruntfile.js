module.exports = function(grunt) {
 grunt.initConfig({
   pkg: grunt.file.readJSON("package.json"),
 //configured a task
   concat : {
      js: {
         src: ['vendor/js/**/*.js', 'src/js/**/*.js']
         dest: 'dev/app.js'
      },
      css: {
         src: ['vendor/css/**/*.css', 'src/css/**/*.css']
         dest: 'dev/app.css'
      }
     },
     homepage: {
       template: 'src/index.html',
       dev: {
        dest: 'dev/index.html',
        context: {
          js: 'app.js',
          css: 'app.css' 
        }
       }
     },
     
     watch: {
        js: {
          files: ['<%= concat.js.src %>'],
          tasks: ['concat:js']
        
        },
         css: {
           files: ['<%= concat.css.src %>'],
           tasks: ['concat:css']
        },
         homepage: {
           files: ['<%= homepage.template %>'],
           tasks: ['homepage:dev']
        
        }
     
     }
   });
   // loaded a task from an npm module
   
   grunt.loadNpmTasks("grunt-contrib-concat");
   grunt.loadNpmTasks("grunt-contrib-watch");
   // load a custom task
   grunt.loadTasks("tasks")
   //setup our work flow
   grunt.registerTask("default", ["concat", "homepage:dev","watch"]);
 };
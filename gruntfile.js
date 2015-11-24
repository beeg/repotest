/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        watch: {
          css: {
            files: ['doctoralia_modules/**/*.scss', 'doctoralia_components/**/*.scss'],
            tasks: ['clean:css', 'sass', 'cssmin'],
            options: {
              spawn: false
            }
          },
          js: {
            files: ['doctoralia_modules/**/*.js', 'doctoralia_components/**/*.js'],
            tasks: ['clean:js', 'concat:js', 'uglify:js'],
            options: {
              spawn: false
            }
          },
          specs: {
            files: ['spec/*.js'],
            tasks: ['clean:specs', 'concat:specs', 'uglify:specs'],
            options: {
              spawn: false
            }
          }
        },
        cssmin: {
				  target: {
				    files: [{
				      expand: true,
				      cwd: 'dist',
				      src: ['*.css', '!*.min.css'],
				      dest: 'dist',
				      ext: '.min.css'
				    }]
				  }
				},
        clean: {
          css: ['dist/*.css', 'dist/*.min.css', 'dist/*.css.map'],
          js: ['dist/*.js', 'dist/*.min.js', 'dist/*.js.map'],
          specs: ['spec/specs.js', 'spec/specs.min.js', 'spec/specs.js.map']
        },
        sass: {
          dist: {
          	files: 	{
          		'dist/doctoralia.css': 'doctoralia.scss'
          	}
          }
        },
        uglify: {
          options: {
            mangle: false
          },
          js: {
           	options: {
			        sourceMap: true,
			        sourceMapName: 'dist/doctoralia.min.js.map'
			      },
            files: [{
                expand: true,
                cwd: 'dist/',
                src: '*.js',
                dest: 'dist/',
                ext: '.min.js'
            }]
          },
          specs: {
            options: {
              sourceMap: true,
              sourceMapName: 'spec/specs.js.map'
            },
            files: [{
                expand: true,
                cwd: 'spec/',
                src: 'specs.js',
                dest: 'spec/',
                ext: '.min.js'
            }]
          }

        },
        concat: {
            js: {
              src: ['doctoralia_modules/**/*.js', 'doctoralia_components/**/*.js'],
              dest: 'dist/doctoralia.js',
            },
            specs: {
              src: ['spec/*.js'],
              dest: 'spec/specs.js',
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // Compile css
    grunt.registerTask('dralia_compile_css', 'clean, sass and cssmin', function(){
       grunt.task.run('clean:css', 'sass', 'cssmin');
    });
    grunt.registerTask('dralia_compile_js', 'clean, sass and cssmin', function(){
       grunt.task.run('clean:js', 'concat', 'uglify');
    });


};

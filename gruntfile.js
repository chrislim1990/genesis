module.exports = function(grunt) {
	grunt.initConfig({

		express:{
			all:{
				options:{
					port:9000,
					hostname:"localhost",
					bases: ['/Users/Chris/Github/genesis/'],
					livereload: true
				}
			}
		},

		sass: {                            
			dist: {                           
				options: {                       
					style: 'compressed',
					sourcemap: 'none'
				},
				files: {                       
					'style.css': 'style.scss',
					'test/pivot/style.css': 'test/pivot/style.scss'
				}
			}
		},

		autoprefixer: {
			file: {
				src: ['style.css', 'test/pivot/style.css']
			},
		},

		watch: {
			sass:{
				files: ['*.scss','genesis/sass/*.scss','test/pivot/*'],
				tasks: ['sass','autoprefixer'],
			},
			options: {
				livereload: true,
			},
		}

	})

	grunt.registerTask('server',[
		'express',
		'watch'
		])

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-express');
}
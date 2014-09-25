module.exports = function(grunt) {

	// load all grunt tasks in package.json matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		csscomb: {
			dist: {
				files: [{
					expand: true,
					cwd: '',
					src: ['style.css/style.css'],
					dest: '',
				}]
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					lineNumbers: true,
				},
				files: {
					'style.css': 'sass/style.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
			},
			dist: {
				src:  'style.css'
			}
		},

		cmq: {
			options: {
				log: false
			},
			dist: {
				files: {
					'style.css': 'style.css'
				}
			}
		},

		cssmin: {
			minify: {
				expand: true,
				cwd: '',
				src: ['style.css', 'style.min.css'],
				dest: '',
				ext: '.min.css'
			}
		},

		watch: {

			css: {
				files: ['sass/partials/*.scss'],
				tasks: ['styles'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

		},

		clean: {
			css: ['style.css', 'style.min.css']
		},

	});

	grunt.registerTask('styles', ['sass', 'autoprefixer', 'csscomb', 'cssmin']);
	grunt.registerTask('default', ['styles']);

};

'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
	// show elapsed time at the end
	require('time-grunt')(grunt);
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		// configurable paths
		air: {
			info: grunt.file.readJSON('package.json'),
			name: 'Organizr',
			test: 'source/test',
			app: 'source/application',
			dist: 'source/distribution'
		},
		watch: {
			compass: {
				files: ['<%= air.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass:server', 'autoprefixer']
			},
			styles: {
				files: ['<%= air.app %>/styles/{,*/}*.css'],
				tasks: ['copy:styles', 'autoprefixer']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= air.app %>/*.html',
					'.tmp/styles/{,*/}*.css',
					'{.tmp,<%= air.app %>}/scripts/{,*/}*.js',
					'<%= air.app %>/images/{,*/}*.{gif,jpeg,jpg,png,svg,webp}'
				]
			}
		},
		connect: {
			options: {
				port: 9000,
				livereload: 35729,
				// change this to '0.0.0.0' to access the server from outside
				hostname: 'localhost'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= air.app %>'
					]
				}
			},
			test: {
				options: {
					base: [
						'.tmp',
						'<%= air.test %>',
						'<%= air.app %>'
					]
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= air.dist %>',
					livereload: false
				}
			}
		},
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= air.dist %>/*',
						'!<%= air.dist %>/.git*'
					]
				}]
			},
			server: '.tmp'
		},
		jsonlint: {
			pkg: {
				src: ['package.json']
			},
			jscs: {
				src: ['.jscs.json']
			},
			bower: {
				src: ['bower.json']
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: [
				'Gruntfile.js',
				'<%= air.app %>/scripts/{,*/}*.js',
				'!<%= air.app %>/scripts/vendor/*',
				'<%= air.test %>/spec/{,*/}*.js'
			]
		},
		jscs: {
			src: ['<%= air.app %>/scripts/**/*.js'],
			gruntfile: 'Gruntfile.js',
			options: {
				config: '.jscs.json'
			}
		},
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/<%= air.name %>.html']
				}
			}
		},
		compass: {
			options: {
				sassDir: '<%= air.app %>/styles',
				cssDir: '.tmp/styles',
				generatedImagesDir: '.tmp/images/generated',
				imagesDir: '<%= air.app %>/images',
				javascriptsDir: '<%= air.app %>/scripts',
				fontsDir: '<%= air.app %>/styles/fonts',
				importPath: '<%= air.app %>/bower_components',
				httpImagesPath: '/images',
				httpGeneratedImagesPath: '/images/generated',
				httpFontsPath: '/styles/fonts',
				relativeAssets: false,
				assetCacheBuster: false
			},
			dist: {
				options: {
					generatedImagesDir: '<%= air.dist %>/images/generated'
				}
			},
			server: {
				options: {
					debugInfo: true
				}
			}
		},
		autoprefixer: {
			options: {
				browsers: ['last 1 version']
			},
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/styles/',
					src: '{,*/}*.css',
					dest: '.tmp/styles/'
				}]
			}
		},
		// not used since Uglify task does concat,
		// but still available if needed
		/*concat: {
			dist: {}
		},*/
		// not enabled since usemin task does concat and uglify
		// check index.html to edit your build targets
		// enable this task if you prefer defining your build targets here
		uglify: {
			dist: {
				files: {}
			}
		},
		requirejs: {
			dist: {
				// Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
				// http://stackoverflow.com/questions/19164875/replace-require-js-script-tag-via-grunt
				// http://getfireshell.com/
				options: {
					// `name` and `out` is set by grunt-usemin
					// almond: true,
					// appDir: '<%= air.app %>',
					baseUrl: '<%= air.app %>/scripts',
					dir: '<%= air.dist %>/scripts',
					// name: 'startup',
					modules: [{ name: 'startup' }],
					removeCombined: true,
					// include: ['../bower_components/requirejs/require.js', 'startup.js'],
					mainConfigFile: '<%= air.app %>/scripts/startup.js',
					// optimize: 'none',
					// out: '<%= air.dist %>/scripts/startup.min.js',
					// TODO: Figure out how to make sourcemaps work with grunt-usemin
					// https://github.com/yeoman/grunt-usemin/issues/30
					//generateSourceMaps: true,
					// required to support SourceMaps
					// http://requirejs.org/docs/errors.html#sourcemapcomments
					preserveLicenseComments: false,
					useStrict: true,
					wrap: true
					//uglify2: {} // https://github.com/mishoo/UglifyJS2
				}
			}
		},
		'bower-install': {
			app: {
				html: '<%= air.app %>/<%= air.name %>.html',
				ignorePath: '<%= air.app %>/'
			}
		},
		rev: {
			dist: {
				files: {
					src: [
						'<%= air.dist %>/scripts/{,*/}*.js',
						'<%= air.dist %>/styles/{,*/}*.css',
						'<%= air.dist %>/images/{,*/}*.{gif,jpeg,jpg,png,webp}',
						'<%= air.dist %>/styles/fonts/{,*/}*.*'
					]
				}
			}
		},
		useminPrepare: {
			options: {
				dest: '<%= air.dist %>'
			},
			html: '<%= air.app %>/<%= air.name %>.html'
		},
		usemin: {
			options: {
				assetsDirs: ['<%= air.dist %>']
			},
			html: ['<%= air.dist %>/{,*/}*.html'],
			css: ['<%= air.dist %>/styles/{,*/}*.css']
		},
		imagemin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= air.app %>/images',
					src: '{,*/}*.{gif,jpeg,jpg,png}',
					dest: '<%= air.dist %>/images'
				}]
			}
		},
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= air.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= air.dist %>/images'
				}]
			}
		},
		cssmin: {
			// This task is pre-configured if you do not wish to use Usemin
			// blocks for your CSS. By default, the Usemin block from your
			// `index.html` will take care of minification, e.g.
			//
			//     <!-- build:css({.tmp,app}) styles/main.css -->
			//
			// dist: {
			//     files: {
			//         '<%= air.dist %>/styles/main.css': [
			//             '.tmp/styles/{,*/}*.css',
			//             '<%= air.app %>/styles/{,*/}*.css'
			//         ]
			//     }
			// }
		},
		htmlmin: {
			dist: {
				options: {
					/*removeCommentsFromCDATA: true,
					// https://github.com/yeoman/grunt-usemin/issues/44
					//collapseWhitespace: true,
					collapseBooleanAttributes: true,
					removeAttributeQuotes: true,
					removeRedundantAttributes: true,
					useShortDoctype: true,
					removeEmptyAttributes: true,
					removeOptionalTags: true*/
				},
				files: [{
					expand: true,
					cwd: '<%= air.app %>',
					src: '*.html',
					dest: '<%= air.dist %>'
				}]
			}
		},
		// Put files not handled in other tasks here
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= air.app %>',
					dest: '<%= air.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'images/{,*/}*.{webp,gif}',
						'styles/fonts/{,*/}*.*',
						'bower_components/sass-bootstrap/fonts/*.*'
					]
				}]
			},
			styles: {
				expand: true,
				dot: true,
				cwd: '<%= air.app %>/styles',
				dest: '.tmp/styles/',
				src: '{,*/}*.css'
			}
		},
		concurrent: {
			server: [
				'compass',
				'copy:styles'
			],
			test: [
				'copy:styles'
			],
			dist: [
				'compass',
				'copy:styles',
				'imagemin',
				'svgmin',
				'htmlmin'
			]
		}
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'concurrent:server',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
	  grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
	  grunt.task.run(['serve']);
	});

	grunt.registerTask('test', [
		'clean:server',
		'concurrent:test',
		'autoprefixer',
		'connect:test',
		'mocha'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'useminPrepare',
		'concurrent:dist',
		'requirejs',
		'autoprefixer',
		'concat',
		'cssmin',
		'uglify',
		'copy:dist',
		'rev',
		'usemin'
	]);

	grunt.registerTask('default', [
		'jsonlint',
		'jshint',
		'jscs',
		'test',
		'build'
	]);
};

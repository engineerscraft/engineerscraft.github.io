module.exports = function(grunt) {
	grunt.initConfig({
		  htmlmin: {
			dist: { 
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {  
					'index.html': 'src/index.html'
				}
			}
		  },
		  imagemin: {
			static: {
				options: {
					optimizationLevel: 3,
					progressive: true
				},
				files: {
					'img/rawpixel-com-358746-2000x1334.jpg': 'src/img/rawpixel-com-358746-2000x1334.jpg',
					'img/michele-bergami-314635_withlogo.jpg': 'src/img/michele-bergami-314635_withlogo.jpg'
				}
			}
		},
		copy: {
			dev: {
				files: [
					{
						cwd: 'src/img/',
						src: '*.*',
						dest: 'img/',
						expand: true
					}
				]
			}
		},
	multiresize: {
			hero: {
				src: 'img/rawpixel-com-358746-2000x1334.jpg',
				dest: ['img/rawpixel-com-358746-2000x1334-sm.jpg','img/rawpixel-com-358746-2000x1334-lg.jpg'],
				destSizes: ['500x500', '1024x900']
			},
			filler: {
				src: 'img/michele-bergami-314635_withlogo.jpg',
				dest: ['img/michele-bergami-314635_withlogo-sm.jpg','img/michele-bergami-314635_withlogo-lg.jpg'],
				destSizes: ['275x275', '1024x500']
			},			
		},
		concat: {
			options: {
			},
			dist: {
				src: [
                    'node_modules/bootstrap/dist/css/bootstrap.min.css',
					'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
                    'src/css/caterpillar.css',
					'src/css/socicon.css',
					'src/css/theme.css',
					'src/css/icons.css',
                    ],
				dest: 'src/css/caterpillar_complete.css'
			},
		},
		postcss: {
			options: {
				map: {
					inline: false,
					annotation: 'css/maps/' 
				},
				processors: [
					require('autoprefixer')({browsers: ['last 3 versions']}), 
					require('cssnano')() 
				]
			},
			single_file: {
				src: 'src/css/caterpillar_complete.css',
				dest: 'css/caterpillar.min.css'
			}
		},
		uglify: {
			js: {
				files: {
					'js/caterpillar.min.js': [
						'node_modules/jquery/dist/jquery.min.js',
						'node_modules/smooth-scroll/dist/js/smooth-scroll.min.js',
						'node_modules/smooth-scroll/dist/js/smooth-scroll.polyfills.min.js',
						'node_modules/scrollreveal/dist/scrollreveal.min.js',
						'src/js/caterpillar.js',
						'src/js/theme.js']
				},
				options: {
					preserveComments: false
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-multiresize');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.registerTask('build', 'Build the files', ['htmlmin','copy','concat','postcss','uglify','imagemin','multiresize']);
};

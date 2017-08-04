module.exports = function(grunt) {
	grunt.initConfig({
		jade: {
		  compile: {
			options: {
			  pretty: true,
			},
			files: [ {
					  src: "*.jade",
					  dest: "./",
					  ext: ".html",
					  cwd: "src/jade/",
					  expand: true
					} ,
					{
					  src: "*.jade",
					  dest: "serverside/",
					  ext: ".html",
					  cwd: "src/jade/serverside/",
					  expand: true
					} ,
					{
					  src: "*.jade",
					  dest: "clientside/",
					  ext: ".html",
					  cwd: "src/jade/clientside/",
					  expand: true
					} ,
					{
					  src: "*.jade",
					  dest: "serverside/contents",
					  ext: ".html",
					  cwd: "src/jade/serverside/contents",
					  expand: true
					} ,
					{
					  src: "*.jade",
					  dest: "clientside/contents",
					  ext: ".html",
					  cwd: "src/jade/clientside/contents",
					  expand: true
					} ]
		  }
		},
		less: {
			compile: {
				options: {
				  paths: ['src/less']
				},
				files: {
				  'src/css/main.css': 'src/less/main.less'
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
					},
					{
						cwd: 'src/fonts/',
						src: '**/*.*',
						dest: 'fonts/',
						expand: true
					},
					{
						cwd: 'src/jade/codesnippets/demo',
						src: '*.*',
						dest: 'codesnippets/demo/',
						expand: true
					}					
				]
			}
		},
		concat: {
			options: {
			},
			dist: {
				src: [
                    'node_modules/normalize.css/normalize.css',
                    'vendor/css/responsivegridsystem/*.css',
                    'src/css/main.css'
                    ],
				dest: 'src/css/caterpillar.css'
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
				src: 'src/css/caterpillar.css',
				dest: 'css/caterpillar.min.css'
			}
		},
		uglify: {
			js: {
				files: {
					'js/homepage.min.js': [
						'node_modules/jquery/dist/jquery.min.js',
						'src/js/main.js'],
					'js/techsnippet.min.js': [
						'node_modules/jquery/dist/jquery.min.js']
				},
				options: {
					preserveComments: false
				}
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	  
	grunt.registerTask('build', 'Convert Jade templates into html templates', ['jade','less','copy','concat','postcss','uglify']);
};

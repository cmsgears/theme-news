module.exports = function( grunt ) {

	grunt.loadNpmTasks( 'grunt-contrib-sass' );
 	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.renameTask( 'concat', 'concatCss' );
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.renameTask( 'concat', 'concatJsCommon' );
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.renameTask( 'concat', 'concatJsLanding' );
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.renameTask( 'concat', 'concatJsPublic' );
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.renameTask( 'concat', 'concatJsPrivate' );
	grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-copy' );

    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

		sass: {
			dist: {
				options: {
					style: 'expanded',
					loadPath: [ 'e:/development/projects-vc/css/cmt-ui/breeze/src/scss', 'e:/development/projects-vc/css/cmt-ui/breeze-templates/src/scss' ]
				},
				files: {
					'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010-src.css': 'e:/development/projects-vc/php/technolush/themes/news/resources/styles/scss/landing.scss',
					'e:/development/projects-vc/php/technolush/frontend/web/news/pubbt2rs-20181010-src.css': 'e:/development/projects-vc/php/technolush/themes/news/resources/styles/scss/public.scss',
					'e:/development/projects-vc/php/technolush/frontend/web/news/prvbt2rs-20181010-src.css': 'e:/development/projects-vc/php/technolush/themes/news/resources/styles/scss/private.scss'
				}
			}
		},
        concatCss: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-breeze-icons/dist/css/breeze-icons-core.min.css',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-breeze-icons/dist/css/breeze-icons-currency.min.css',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/nouislider/distribute/nouislider.min.css',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/datetimepicker/build/jquery.datetimepicker.min.css',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/fullcalendar/dist/fullcalendar.min.css'
				],
        		dest: 'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010-src.css'
      		}
    	},
        concatJsCommon: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/jquery/dist/jquery.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/jquery-ui/jquery-ui.min.js',
					'e:/development/projects-vc/php/technolush/vendor/foxslider/cmg-plugin/widgets/resources/scripts/foxslider-core.js',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/conditionizr/dist/conditionizr.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/imagesloaded/imagesloaded.pkgd.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/handlebars/handlebars.min.js',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/nouislider/distribute/nouislider.min.js',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/progressbar.js/dist/progressbar.min.js',
					//'e:/development/projects-vc/php/technolush/vendor/bower-asset/chart.js/dist/Chart.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/datetimepicker/build/jquery.datetimepicker.full.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/moment/min/moment.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/fullcalendar/dist/fullcalendar.min.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-velocity/dist/velocity.js',
					'e:/development/projects-vc/php/technolush/vendor/cmsgears/widget-form-ajax/resources/scripts/apps/form.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/main.js',
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/search.js',
					
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-velocity-apps/src/apps/core/base.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-velocity-apps/src/apps/core/comment.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-velocity-apps/src/apps/core/grid.js',
					'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-velocity-apps/src/apps/core/location.js'
				],
        		dest: 'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010-src.js'
      		}
    	},
        concatJsLanding: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/templates/public.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apix/public.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apps/public.js'
				],
        		dest: 'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010-src.js'
      		}
    	},
        concatJsPublic: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/templates/public.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apix/public.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apps/public.js'
				],
        		dest: 'e:/development/projects-vc/php/technolush/frontend/web/news/pubst2rs-20181010-src.js'
      		}
    	},
        concatJsPrivate: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/templates/public.js',
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/templates/private.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apix/public.js',
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apix/private.js',

					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/address.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/data.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/file.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/gallery.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/mapper.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/meta.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/model.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/core/social.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/notify/base.js',
					'e:/development/projects-clients/php/empathyconnects/vendor/bower-asset/cmt-velocity-apps/src/apps/notify/notification.js',

					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apps/public.js',
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apps/private.js',
					'e:/development/projects-vc/php/technolush/themes/news/resources/scripts/apps/user.js'
				],
        		dest: 'e:/development/projects-vc/php/technolush/frontend/web/news/prvat2rs-20181010-src.js'
      		}
    	},
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
					'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010.css': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010-src.css' ],
	          		'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010.css': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010-src.css' ],
					'e:/development/projects-vc/php/technolush/frontend/web/news/pubbt2rs-20181010.css': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/pubbt2rs-20181010-src.css' ],
					'e:/development/projects-vc/php/technolush/frontend/web/news/prvbt2rs-20181010.css': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/prvbt2rs-20181010-src.css' ]
	        	}
      		}
    	},
    	uglify: {
			options: {

			},
      		main_target: {
	        	files: {
	          		'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010.js': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/cmnbt2rs-20181010-src.js' ],
					'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010.js': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/ladbt2rs-20181010-src.js' ],
					'e:/development/projects-vc/php/technolush/frontend/web/news/pubst2rs-20181010.js': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/pubst2rs-20181010-src.js' ],
					'e:/development/projects-vc/php/technolush/frontend/web/news/prvat2rs-20181010.js': [ 'e:/development/projects-vc/php/technolush/frontend/web/news/prvat2rs-20181010-src.js' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/themes/news/resources/fonts/blogger-sans/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/fonts/blogger-sans/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/themes/news/resources/fonts/fira-sans/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/fonts/fira-sans/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/vendor/bower-asset/cmt-breeze-icons/dist/fonts/breeze/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/vendor/bower-asset/fontawesome/web-fonts-with-css/webfonts/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/webfonts/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/themes/news/resources/images/news/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/images/news/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/technolush/themes/news/resources/images/news/icons/', src: ['**'], dest: 'e:/development/projects-vc/php/technolush/frontend/web/images/news/icons/', filter: 'isFile' }
				]
			}
		}
    });

	grunt.registerTask( 'default', [ 'sass', 'concatCss', 'concatJsCommon', 'concatJsLanding', 'concatJsPublic', 'concatJsPrivate', 'cssmin', 'uglify', 'copy' ] );
};

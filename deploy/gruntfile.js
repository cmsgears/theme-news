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
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105-src.css': 'e:/development/projects-vc/php/newsdemo/themes/news/resources/styles/scss/landing.scss',
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105-src.css': 'e:/development/projects-vc/php/newsdemo/themes/news/resources/styles/scss/public.scss',
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105-src.css': 'e:/development/projects-vc/php/newsdemo/themes/news/resources/styles/scss/private.scss'
				}
			}
		},
        concatCss: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/fontawesome/web-fonts-with-css/css/fontawesome-all.min.css',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-breeze-icons/dist/css/breeze-icons-core.min.css',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-breeze-icons/dist/css/breeze-icons-currency.min.css',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/nouislider/distribute/nouislider.min.css',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/datetimepicker/build/jquery.datetimepicker.min.css',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/fullcalendar/dist/fullcalendar.min.css'
				],
        		dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105-src.css'
      		}
    	},
        concatJsCommon: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/jquery/dist/jquery.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/jquery-ui/jquery-ui.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/foxslider/cmg-plugin/widgets/resources/scripts/foxslider-core.js',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/conditionizr/dist/conditionizr.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/imagesloaded/imagesloaded.pkgd.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/handlebars/handlebars.min.js',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/nouislider/distribute/nouislider.min.js',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/progressbar.js/dist/progressbar.min.js',
					//'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/chart.js/dist/Chart.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/datetimepicker/build/jquery.datetimepicker.full.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/moment/min/moment.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/fullcalendar/dist/fullcalendar.min.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity/dist/velocity.js',
					'e:/development/projects-vc/php/newsdemo/vendor/cmsgears/widget-form-ajax/resources/scripts/apps/form.js',

					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/base.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/grid.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/site.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/province.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/region.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/city.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/comment.js'
				],
        		dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105-src.js'
      		}
    	},
        concatJsLanding: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/templates/public.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apix/public.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/public.js',
					
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/main.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/search.js'
				],
        		dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105-src.js'
      		}
    	},
        concatJsPublic: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/templates/public.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apix/public.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/public.js',
					
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/main.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/search.js'
				],
        		dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105-src.js'
      		}
    	},
        concatJsPrivate: {
      		options: {
        		separator: '\n\n'
      		},
      		dist: {
        		src: [
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/templates/public.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/templates/private.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apix/public.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apix/private.js',

					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/data.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/social.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/gallery.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/mapper.js',

					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/address.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/location.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/file.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/meta.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/model.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/services/user.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/main.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/address.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/location.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/file.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/meta.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/model.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/core/controllers/user.js',

					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/forms/base.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/forms/controllers/form.js',

					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/notify/base.js',
					'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-velocity-apps/src/apps/notify/controllers/notification.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/public.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/private.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/core/services/user.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/core/controllers/main.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/apps/core/controllers/user.js',

					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/main.js',
					'e:/development/projects-vc/php/newsdemo/themes/news/resources/scripts/search.js'
				],
        		dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105-src.js'
      		}
    	},
    	cssmin: {
			options: {

			},
      		target: {
	        	files: {
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105.css': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105-src.css' ],
	          		'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105.css': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105-src.css' ],
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105.css': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105-src.css' ],
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105.css': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105-src.css' ]
	        	}
      		}
    	},
    	uglify: {
			options: {

			},
      		main_target: {
	        	files: {
	          		'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105.js': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/cmnnlaxd-20181105-src.js' ],
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105.js': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/ladnlaxd-20181105-src.js' ],
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105.js': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/pubnlaxd-20181105-src.js' ],
					'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105.js': [ 'e:/development/projects-vc/php/newsdemo/frontend/web/news/prvnlaxd-20181105-src.js' ]
	        	}
      		}
    	},
		copy: {
			main: {
				files: [
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/themes/news/resources/fonts/blogger-sans/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/fonts/blogger-sans/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/themes/news/resources/fonts/fira-sans/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/fonts/fira-sans/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/cmt-breeze-icons/dist/fonts/breeze/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/fonts/breeze/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/vendor/bower-asset/fontawesome/web-fonts-with-css/webfonts/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/webfonts/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/themes/news/resources/images/news/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/images/news/', filter: 'isFile' },
					{ expand: true, cwd: 'e:/development/projects-vc/php/newsdemo/themes/news/resources/images/news/icons/', src: ['**'], dest: 'e:/development/projects-vc/php/newsdemo/frontend/web/images/news/icons/', filter: 'isFile' }
				]
			}
		}
    });

	grunt.registerTask( 'default', [ 'sass', 'concatCss', 'concatJsCommon', 'concatJsLanding', 'concatJsPublic', 'concatJsPrivate', 'cssmin', 'uglify', 'copy' ] );
};

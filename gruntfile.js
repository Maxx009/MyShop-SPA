module.exports = function (grunt) {
    function urlTrimmer(url) {
        url = url.split('/');
        return url[url.length - 1];
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // jshint: {
        //     // define the files to lint
        //     files: ['gruntfile.js', '/app/build/bundle/js/*.js'],
        //     // configure JSHint (documented at http://www.jshint.com/docs/)
        //     options: {
        //         // more options here if you want to override JSHint defaults
        //         globals: {
        //             angular: true,
        //             console: true,
        //             module: true
        //         }
        //     }
        // },
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: 'bower_Components/lib/font-awesome/fonts/*',
                dest: 'app/build/bundle/fonts/',
            },
        },
        ngtemplates: {
            product: {
                src: 'app/front-end/product/**/*.html',
                dest: 'app/build/bundle/js/templates/product.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            },
            customer: {
                src: 'app/front-end/customer/**/*.html',
                dest: 'app/build/bundle/js/templates/customer.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            },
            main: {
                src: ['app/front-end/main/*.html'],
                dest: 'app/build/bundle/js/templates/main.js',
                options: {
                    url: urlTrimmer,
                    module: 'myShopApp',
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            },
            common: {
                src: ['app/front-end/common/templates/*.html','app/front-end/login/*.html'],
                dest: 'app/build/bundle/js/templates/common.js',
                options: {
                    url: urlTrimmer,
                    module: 'myShopApp',
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            }
        },
        concat: {
            options: {
                separator: '\n\n',
            },
            libraries: {
                src: ['bower_Components/lib/angular/angular.min.js',
                    'bower_Components/lib/angular-animate/angular-animate.min.js',
                    'bower_Components/lib/angular-messages/angular-messages.min.js',
                    'bower_Components/lib/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_Components/lib/oclazyload/dist/ocLazyLoad.min.js',
                    'app/public/content/js/ui-bootstrap-tpls-2.5.0/ui-bootstrap-tpls-2.5.0.min.js'
                ],
                dest: 'app/build/bundle/js/libraries.min.js'
            },
            styles: {
                src: ['bower_Components/lib/bootstrap-css-only/css/bootstrap.min.css',
                    'bower_Components/lib/font-awesome/css/font-awesome.min.css',
                    'app/public/content/styles/app.css'
                ],
                dest: 'app/build/bundle/css/libraries.min.css'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/build/bundle/css/libraries.min.css': ['app/build/bundle/css/libraries.min.css']
                }
            }
        },
        uglify: {
            options: {
                beautify: true,
                mangle: false
            },
            allJS: {
                files: {
                    'app/build/bundle/js/app.min.js': [
                        'app/front-end/app.module.js',
                        'app/front-end/app.routes.js',
                        'app/front-end/login/*.js',
                        'app/front-end/product/products.routes.js',
                        'app/front-end/customer/customers.routes.js',

                        'app/front-end/common/services/*.js',
                        'app/front-end/common/directives/*.js',
                        'app/front-end/main/*.js',

                        'app/build/bundle/js/templates/main.js',
                        'app/build/bundle/js/templates/common.js',
                        'app/build/bundle/js/templates/product.js',
                        'app/build/bundle/js/templates/customer.js'
                    ],
                    'app/build/bundle/js/products.min.js': [
                        'app/front-end/product/**/*.js',
                        '!app/front-end/product/*.js'
                    ],
                    'app/build/bundle/js/customer.min.js': [
                        'app/front-end/customer/**/*.js',
                        '!app/front-end/customer/*.js'
                    ]
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['copy', 'ngtemplates', 'concat', 'uglify']);
    // grunt.registerTask('prod', ['cssmin', 'uglify']);
};
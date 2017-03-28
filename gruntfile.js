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
                src: 'bower_Components/font-awesome/fonts/*',
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
            vendor: {
                src: 'app/front-end/vendor/**/*.html',
                dest: 'app/build/bundle/js/templates/vendor.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            },
            sales: {
                src: ['app/front-end/sales/**/**/*.html', 'app/front-end/sales/**/*.html'],
                dest: 'app/build/bundle/js/templates/sales.js',
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
                src: ['app/front-end/common/templates/*.html', 'app/front-end/login/*.html'],
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
        replace: {
            another_example: {
                src: [
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
                    'bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
                ],
                overwrite: true, // overwrite matched source files
                replacements: [{
                    from: 'glyphicon',
                    to: 'fa'
                }]
            }
        },
        concat: {
            options: {
                separator: '\n\n',
            },
            libraries: {
                src: ['bower_Components/angular/angular.min.js',
                    'bower_Components/angular-animate/angular-animate.min.js',
                    'bower_Components/angular-messages/angular-messages.min.js',
                    'bower_Components/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_Components/oclazyload/dist/ocLazyLoad.min.js',
                    'bower_Components/angular-bootstrap/ui-bootstrap-tpls.min.js'
                ],
                dest: 'app/build/bundle/js/libraries.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'app/build/bundle/css/libraries.min.css': [
                        'bower_Components/bootstrap-css-only/css/bootstrap.min.css',
                        'bower_Components/font-awesome/css/font-awesome.min.css',
                        'app/content/styles/app.css'
                    ]
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
                        'app/front-end/vendor/vendors.routes.js',
                        'app/front-end/sales/sales.routes.js',

                        'app/front-end/common/**/*.js',
                        'app/front-end/main/*.js',

                        'app/build/bundle/js/templates/main.js',
                        'app/build/bundle/js/templates/common.js',
                        'app/build/bundle/js/templates/product.js',
                        'app/build/bundle/js/templates/vendor.js',
                        'app/build/bundle/js/templates/sales.js',
                        'app/build/bundle/js/templates/customer.js'
                    ],
                    'app/build/bundle/js/products.min.js': [
                        'app/front-end/product/**/*.js',
                        '!app/front-end/product/*.js'
                    ],
                    'app/build/bundle/js/customer.min.js': [
                        'app/front-end/customer/**/*.js',
                        '!app/front-end/customer/*.js'
                    ],
                    'app/build/bundle/js/vendor.min.js': [
                        'app/front-end/vendor/**/*.js',
                        '!app/front-end/vendor/*.js'
                    ],
                    'app/build/bundle/js/sales.min.js': [
                        'app/front-end/sales/**/**/*.js',
                        'app/front-end/sales/**/*.js',
                        '!app/front-end/sales/*.js'
                    ]
                }
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['copy', 'ngtemplates', 'replace', 'concat', 'cssmin', 'uglify']);
    // grunt.registerTask('prod', ['cssmin', 'uglify']);
};
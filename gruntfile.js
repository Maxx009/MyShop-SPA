module.exports = function (grunt) {
    function urlTrimmer(url) {
        url = url.split('/');
        return url[url.length - 1];
    }
    var htmlMin = {
        collapseWhitespace: true,
        collapseBooleanAttributes: true
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            // define the files to lint
            files: ['gruntfile.js', 'app/src/front-end/*.js', 'app/src/front-end/**/*.js'],
            // configure JSHint (documented at http://www.jshint.com/docs/)
            options: {
                // more options here if you want to override JSHint defaults
                globals: {
                    angular: true,
                    console: true,
                    module: true
                }
            }
        },
        ngtemplates: {
            product: {
                src: 'app/src/front-end/product/**/*.html',
                dest: 'app/build/bundle/js/templates/product.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: htmlMin
                }
            },
            customer: {
                src: 'app/src/front-end/customer/**/*.html',
                dest: 'app/build/bundle/js/templates/customer.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: htmlMin
                }
            },
            vendor: {
                src: 'app/src/front-end/vendor/**/*.html',
                dest: 'app/build/bundle/js/templates/vendor.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: htmlMin
                }
            },
            sales: {
                src: ['app/src/front-end/sales/**/**/*.html', 'app/src/front-end/sales/**/*.html'],
                dest: 'app/build/bundle/js/templates/sales.js',
                options: {
                    module: 'myShopApp',
                    url: urlTrimmer,
                    htmlmin: htmlMin
                }
            },
            main: {
                src: ['app/src/front-end/main/*.html'],
                dest: 'app/build/bundle/js/templates/main.js',
                options: {
                    url: urlTrimmer,
                    module: 'myShopApp',
                    htmlmin: htmlMin
                }
            },
            common: {
                src: ['app/src/front-end/common/templates/*.html', 'app/src/front-end/login/*.html'],
                dest: 'app/build/bundle/js/templates/common.js',
                options: {
                    url: urlTrimmer,
                    module: 'myShopApp',
                    htmlmin: htmlMin
                }
            }
        },
        replace: {
            bootstrap: {
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
                    'bower_Components/angularPrint/angularPrint.js',
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
                        'bower_Components/AngularPrint/angularPrint.css',
                        'app/src/content/styles/app.css'
                    ]
                }
            }
        },
        uglify: {
            options: {
                beautify: false ,
                mangle: false
            },
            allJS: {
                files: {
                    'app/build/bundle/js/app.min.js': [
                        'app/src/front-end/app.module.js',
                        'app/src/front-end/app.routes.js',
                        'app/src/front-end/login/*.js',
                        'app/src/front-end/product/products.routes.js',
                        'app/src/front-end/customer/customers.routes.js',
                        'app/src/front-end/vendor/vendors.routes.js',
                        'app/src/front-end/sales/sales.routes.js',

                        'app/src/front-end/common/**/*.js',
                        'app/src/front-end/main/*.js',

                        'app/build/bundle/js/templates/main.js',
                        'app/build/bundle/js/templates/common.js',
                        'app/build/bundle/js/templates/product.js',
                        'app/build/bundle/js/templates/vendor.js',
                        'app/build/bundle/js/templates/sales.js',
                        'app/build/bundle/js/templates/customer.js'
                    ],
                    'app/build/bundle/js/products.min.js': [
                        'app/src/front-end/product/**/*.js',
                        '!app/src/front-end/product/*.js'
                    ],
                    'app/build/bundle/js/customer.min.js': [
                        'app/src/front-end/customer/**/*.js',
                        '!app/src/front-end/customer/*.js'
                    ],
                    'app/build/bundle/js/vendor.min.js': [
                        'app/src/front-end/vendor/**/*.js',
                        '!app/src/front-end/vendor/*.js'
                    ],
                    'app/build/bundle/js/sales.min.js': [
                        'app/src/front-end/sales/**/**/*.js',
                        'app/src/front-end/sales/**/*.js',
                        '!app/src/front-end/sales/*.js'
                    ]
                }
            }
        },
        copy: {
            fonts: {
                expand: true,
                flatten: true,
                src: 'bower_Components/font-awesome/fonts/*',
                dest: 'app/build/bundle/fonts/',
            },
            release_app: {
                expand: true,
                cwd:"app/src",                
                src: ['*.js'],
                dest: 'Release/app',
                filter: 'isFile'
            },
            release_Build: {
                expand: true,
                flatten: false,
                src: ['app/build/**'],
                dest: 'Release/',
            },            
            release_app_back_end: {
                expand: true,
                cwd:"app/src",
                src: ['back-end/**'],
                dest: 'Release/app',
            },
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'ngtemplates', 'replace', 'concat', 'cssmin', 'uglify','copy']);
};
module.exports = function (grunt) {

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
                src: 'app/front-end/product/*.html',
                dest: 'app/build/bundle/js/templates/product.js',
                options: {
                    module: 'myShopApp',
                    url: function (url) {
                        return url.replace('app/front-end/product/', '');
                    },
                    // htmlmin: {
                    //     collapseWhitespace: true,
                    //     collapseBooleanAttributes: true
                    // }
                }
            },
            main: {
                src: ['app/front-end/main/*.html'],
                dest: 'app/build/bundle/js/templates/main.js',
                options: {
                    module: 'myShopApp',
                    htmlmin: {
                        collapseWhitespace: true,
                        collapseBooleanAttributes: true
                    }
                }
            },
            common: {
                src: ['app/front-end/common/templates/*.html'],
                dest: 'app/build/bundle/js/templates/common.js',
                options: {
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
            concatLibraries: {
                src: ['bower_Components/lib/angular/angular.min.js',
                    'bower_Components/lib/angular-animate/angular-animate.min.js',
                    'bower_Components/lib/angular-messages/angular-messages.min.js',
                    'bower_Components/lib/angular-ui-router/release/angular-ui-router.min.js',
                    'bower_Components/lib/oclazyload/dist/ocLazyLoad.min.js',
                    'bower_Components/lib/ui-bootstrap/src/collapse/collapse.js'
                ],
                dest: 'app/build/bundle/js/libraries.min.js'
            },
            concatApp: {
                src: ['app/front-end/app.module.js',
                    'app/front-end/app.routes.js',
                    'app/front-end/common/services/*.js',
                    'app/front-end/common/directive/*.js',
                    'app/front-end/main/*.js',
                    'app/build/bundle/js/templates/main.js',
                    'app/build/bundle/js/templates/common.js'
                ],
                dest: 'app/build/bundle/js/app.min.js'
            },
            concatProduct: {
                src: ['app/front-end/product/*.js',
                    'app/build/bundle/js/templates/product.js'
                ],
                dest: 'app/build/bundle/js/products.min.js'
            },
            concatStyles: {
                src: ['bower_Components/lib/bootstrap-css-only/css/bootstrap.min.css',
                    'bower_Components/lib/font-awesome/css/font-awesome.min.css',
                    'app/public/content/styles/app.css'
                ],
                dest: 'app/build/bundle/css/libraries.min.css'
            }
        },
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-angular-templates');
    grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['copy', 'ngtemplates', 'concat']);
};
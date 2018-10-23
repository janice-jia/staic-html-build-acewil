var path = require('path');

module.exports = function(grunt) {
    grunt.config('concat', {
        generated: {
            options: {
                process: function(src, filepath) {
                    if (filepath.indexOf('/un_uglify/') !== -1) {
                        console.log('ugly');
                        return;
                    }
                    if (path.extname(filepath) !== '.js') {
                        return src;
                    }
                    if (filepath.indexOf('app') !== 0) {
                        return src;
                    }
                    return '(function(){' + src + '})();';
                }
            }
        },

        unUglifyJs: {
            // 先进行'app/un_uglify/*/*.js,然后进行app/un_uglify/*.js
            src: ['app/un_uglify/*/*.js', 'app/un_uglify/*.js'],
            dest: '<%= config.temp %>/concat/js/un_uglify.js',
            options: {
                banner: '\'use strict\';',
                process: function(src, filepath) {
                    console.log(filepath);
                    if (filepath.indexOf('/un_uglify/') !== -1) {
                        return src;
                    } else return;
                }
            }
        },

        useStrict: {
            src: ['<%= config.temp %>/concat/js/app.js'],
            dest: '<%= config.temp %>/concat/js/app.js',
            options: {
                banner: '\'use strict\';'
            }
        },
        selfCss: {
            src: ['app/css/*.css'],
            dest: '<%= config.dist %>/css/selfcss.css',
            options: {
                // banner: '\'use strict\';',
                process: function(src, filepath) {
                    console.log(filepath);
                    return src;
                }
            }
        },
        ngTemplate: {
            src: ['<%= config.temp %>/ngTemplate/src/**/*.html'],
            dest: '<%= config.temp %>/ngTemplate/concat.html',
            options: {
                process: function(src, filepath) {
                    var templateUrl = path.relative('.tmp/ngTemplate/src/', filepath)
                        .split(path.sep)
                        .join('/');
                    console.log(filepath);
                    return '<script id="' + templateUrl + '" type="text/ng-template">' + src + '</script>';
                }
            }
        }

    });

};
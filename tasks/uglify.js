/**
 * Created by hanzhongjian on 23/1/17.
 */
var path = require('path');

module.exports = function(grunt) {
    grunt.config('uglify', {
        buildApp: {
            options: {
                mangle: true, //不混淆变量名
                preserveComments: 'false' //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    // footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
            },
            files: {
                '<%= config.dist %>/js/app.js': ['<%= config.temp %>/concat/js/app.js']
            }
        },
        buildUnuglify: {
            options: {
                mangle: false, //不混淆变量名
                preserveComments: 'false' //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    // footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
            },
            files: {
                '<%= config.dist %>/js/un_uglify.js': ['<%= config.temp %>/concat/js/un_uglify.js']
            }
        },
        buildVendor: {
            options: {
                mangle: true, //不混淆变量名
                preserveComments: 'false' //不删除注释，还可以为 false（删除全部注释），some（保留@preserve @license @cc_on等注释）
                    // footer:'\n/*! <%= pkg.name %> 最后修改于： <%= grunt.template.today("yyyy-mm-dd") %> */'//添加footer
            },
            files: {
                '<%= config.dist %>/js/vendor.js': ['<%= config.temp %>/concat/js/vendor.js']
            }
        }
    })
}
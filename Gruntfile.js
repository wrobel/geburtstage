/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        path: {
            src: [
                'bin/geburtstage',
                'lib/angular.js',
                'lib/date.js',
                'lib/list.js'
            ],
            test: [
                'test/unit/date.js',
                'test/unit/list.js'
            ],
            lint: [
                'Gruntfile.js',
                '<%= path.src %>',
                '<%= path.test %>'
            ]
        },
        jshint: {
            files: '<%= path.lint %>',
            options: {
                jshintrc: true
            }
        },
        mochaTest: {
            test: {
                src: '<%= path.test %>'
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },
        watch: {
            files: '<%= path.lint %>',
            tasks: ['default']
        },
        webpack: {
            birthdays: {
                output: {
                    path: './build/',
                    filename: 'birthdays.js'
                },
                entry: './lib/angular.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-webpack');

        grunt.registerTask('default', ['jshint', 'mochaTest:test', 'karma:unit', 'webpack']);
};

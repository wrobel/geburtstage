/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        path: {
            src: [
                'lib/date.js'
            ],
            test: [
                'test/unit/date.js'
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
        watch: {
            files: '<%= path.lint %>',
            tasks: ['jshint', 'mochaTest:test']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', ['jshint', 'mochaTest:test']);
};

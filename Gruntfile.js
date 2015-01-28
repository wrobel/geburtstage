/* global module */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        path: {
            lint: [
                'Gruntfile.js',
                'geburtstag.js'
            ]
        },
        jshint: {
            files: '<%= path.lint %>',
            options: {
                jshintrc: true
            }
        },
        watch: {
            files: '<%= path.lint %>',
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-notify');

    grunt.registerTask('default', 'jshint');
};

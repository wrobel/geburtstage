/* global module */
module.exports = function (grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'geburtstag.js'],
            options: {
                jshintrc: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', 'jshint');
};

module.exports = function (grunt) {
    grunt.initConfig({
        jshint: {
            files: {
                src: ['Gruntfile.js', 'geburtstag.js'],
                options: {
                    jshintrc: true
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', 'jshint');
};

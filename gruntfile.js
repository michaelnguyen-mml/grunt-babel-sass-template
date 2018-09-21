module.exports = function (grunt) {
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    sassDir: 'src/assets/scss',
                    javascriptsDir: 'src/assets/js',
                    fontsDir: 'src/assets/fonts',
                    outputStyle: 'compressed',
                    sourcemap: true,
                    environment: 'production',
                    httpPath: 'prod/client/',
                    cssDir: 'prod/client/assets/css/'
                },
            },
        },
        babel: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/js/',
                    src: ['*.js'],
                    dest: 'src/assets/min',
                    ext: '.js'
                }]
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            build: {
                files: [{
                    src: 'src/assets/min/*.js',
                    dest: 'prod/client/assets/js/app.min.js'
                }]
            }
        },
        watch: {
            files: ['src/assets/scss/*.scss', 'src/assets/js/*.js'],
            tasks: ['compass', 'babel', 'uglify'],
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'babel', 'uglify', 'watch']);

};
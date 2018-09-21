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
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 1 version']})
                ]
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'prod/client/assets/css/',
                    src: ['*.css'],
                    dest: 'prod/client/assets/css',
                    ext: '.css'
                }]
            }
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
        clean: {
            // Be very careful with this, could end up wiping everything if not configured properly
            // Will delete everything from the src/assets/js folder once uglify is done.
            all_min_js : ['src/assets/min/*.js'],
            //Delete min folder once done
            min_folder: ['src/assets/min/']
        },

        watch: {
            files: ['src/assets/scss/*.scss', 'src/assets/js/*.js'],
            tasks: ['compass', 'babel', 'uglify', 'clean'],
        }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass', 'postcss', 'babel', 'uglify', 'clean', 'watch']);
};
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-concat-sourcemap');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadTasks('tasks');

    var srcFiles = [
            '<%= dirs.src %>/Ayodis.js'
        ],
        banner = [
            '/**',
            ' * @license',
            ' * <%= pkg.name %> - v<%= pkg.version %>',
            ' * Copyright (c) 2014-2015, Dhumez Sébastien',
            ' * <%= pkg.homepage %>',
            ' *',
            ' * Compiled: <%= grunt.template.today("yyyy-mm-dd") %>',
            ' *',
            ' * <%= pkg.name %> is licensed under the <%= pkg.license %> License.',
            ' * <%= pkg.licenseUrl %>',
            ' */',
            ''
        ].join('\n');

    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        dirs: {
            build: 'bin',
            docs: 'docs',
            src: 'src/',
            test: 'test'
        },
        files: {
            srcBlob: '<%= dirs.src %>/**/*.js',
            testBlob: '<%= dirs.test %>/**/*.js',
            testConf: '<%= dirs.test %>/karma.conf.js',
            build: '<%= dirs.build %>/ayodis.dev.js',
            buildMin: '<%= dirs.build %>/ayodis.js'
        },
        concat: {
            options: {
                banner: banner
            },
            dist: {
                src: srcFiles,
                dest: '<%= files.build %>'
            }
        },
        /* jshint -W106 */
        concat_sourcemap: {
            dev: {
                files: {
                    '<%= files.build %>': srcFiles
                },
                options: {
                    sourceRoot: '../'
                }
            }
        },
        uglify: {
            options: {
                banner: banner
            },
            dist: {
                src: '<%= files.build %>',
                dest: '<%= files.buildMin %>'
            }
        },
        //Watches and builds for _development_ (source maps)
        watch: {
            scripts: {
                files: ['<%= dirs.src %>/**/*.js'],
                tasks: ['concat_sourcemap'],
                options: {
                    spawn: false
                }
            }
        },
        karma: {
            unit: {
                configFile: '<%= files.testConf %>',
                // browsers: ['Chrome'],
                singleRun: true
            }
        }
    });

    grunt.registerTask('default', ['build', 'test']);

    grunt.registerTask('build', ['concat', 'uglify']);
    grunt.registerTask('build-debug', ['concat_sourcemap', 'uglify']);

    grunt.registerTask('test', ['concat', 'karma']);

    grunt.registerTask('travis', ['build', 'test']);

    grunt.registerTask('default', ['build', 'test']);

    grunt.registerTask('debug-watch', ['concat_sourcemap', 'watch:debug']);
};
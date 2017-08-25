module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            padrao: {
                options: {
                    sourceMap: true,
                    compress: false,
                    optimization: 2
                },
                files: [
                    {
                        expand: true,
                        cwd: 'less/',
                        src: [
                            'app.less'
                        ],
                        dest: 'assets/styles/',
                        ext: '.css'
                    }
                ]
            }
        },
        watch: {
            files: './less/**/*',
            tasks: ['less']
        }    
    });

    grunt.registerTask('default', ['less'])
}
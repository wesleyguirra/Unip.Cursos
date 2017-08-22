module.exports = function (grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        less: {
            padrao: {
                options: {
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
        }    
    });

    grunt.registerTask('default', ['less'])
}
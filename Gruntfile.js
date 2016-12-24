module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-tslint");
    grunt.initConfig({
        tslint: {
            options: {
                rulesDirectory: 'node_modules/tslint-microsoft-contrib',
                configuration: grunt.file.readJSON("tslint.json")
            },
            files: {
                src: ['src/file1.ts', 'src/file2.ts']
            }
        }
    })
}
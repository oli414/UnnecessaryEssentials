var fs = require('fs');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        browserify : {
            core : {
                src : ["src/UnnecessaryEssentials.js"],
                dest : "build/UnnecessaryEssentials.js",
                options:{
                    browserifyOptions: {
                        standalone : "Unes"
                    },
                    transform: [["babelify", { "presets": ["es2015"] }]],
                }
            }
        },

        watch: {
            copy: {
                files: "build/UnnecessaryEssentials.js",
                options: { spawn: false },
                tasks: ["copyfile"]
            },
            build: {
                files: "src/**/*.js",
                tasks: ["browserify"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask("copyfile", function () {
        fs.createReadStream('build/UnnecessaryEssentials.js').pipe(fs.createWriteStream('E:\\xampp\\htdocs\\library\\UnnecessaryEssentials.js'));
    });

    grunt.registerTask("default", [ "watch" ]);

    /*
    // Not sure what flag Browserify needs to do this. Fixing it manually for now.
    grunt.registerTask('requireJsFix','Modifies the browserify bundle so it works with RequireJS',function(){
        ['build/p2.js', 'build/p2.min.js'].forEach(function (path){
            var text = fs.readFileSync(path).toString();
            text = text.replace('define.amd', 'false'); // This makes the bundle skip using define() from RequireJS
            fs.writeFileSync(path, text);
        });
    });

    grunt.registerTask('addLicense','Adds the LICENSE to the top of the built files',function(){
        var text = fs.readFileSync("LICENSE").toString();

        var dev = fs.readFileSync("build/p2.js").toString();
        var min = fs.readFileSync("build/p2.min.js").toString();

        fs.writeFileSync("build/p2.js",text+"\n"+dev);
        fs.writeFileSync("build/p2.min.js",text+"\n"+min);
    });*/
};
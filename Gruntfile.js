var db = require("secondthought");
var assert = require("assert");

module.exports = function(grunt){

  grunt.initConfig({
    jshint : {
      files : ['lib/**/*js', 'models/**/*.js']
    },
    watch : {
      files: ['lib/**/*js', 'models/**/*.js'],
      tasks : ['jshint']
    }


  });

  //this installs the database 
  grunt.registerTask("installDb", function(){
    var done = this.async();
    db.connect({db : "membership"}, function(err,db){
      db.install(['users', 'logs','sessions'], function(err,tableResult){
        assert.ok(err === null, err);
        console.log("DB Installed: " + tableResult);
        done();
      });
    });


  });


  //adding a comment
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");

};

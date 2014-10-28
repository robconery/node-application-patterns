//this is an Application for membership (not our executable)
//use this to call the Register routine
var Application = function(args){

  var app = {};
  app.email = args.email;
  app.password = args.password;
  app.confirm = args.confirm;
  app.status = "pending";
  app.message = null;
  app.user = null;

  app.isValid = function(){
    return app.status == "validated";
  };
  app.isInvalid = function(){
    return !isValid();
  };
  app.setInvalid = function(message){
    app.status = "invalid";
    app.message = message;
  };
  app.validate = function(message){
    app.status = "validated";
  };

  return app;
};

module.exports = Application;

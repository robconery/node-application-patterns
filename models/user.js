var assert = require("assert");
var utility = require("../lib/utility");

//Our user prototype. This exports a Constructor that you must call,
//this should never export an instance as it will be cached by NPM
var User = function(args){
  assert.ok(args.email, "Email is required");
  var user = {};
  if(args.id){
    user.id = args.id;
  }
  user.email = args.email;
  user.createdAt = args.createdAt || new Date();
  user.status = args.status || "pending";
  user.signInCount =args.signInCount || 0;
  user.lastLoginAt = args.lastLogin || new Date();
  user.currentLoginAt = args.currentLoginAt || new Date();
  user.authenticationToken = args.authenticationToken || utility.randomString(18);
  user.hashedPassword = args.hashedPassword || null;

  return user;

};

module.exports = User;

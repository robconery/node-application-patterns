exports.randomString = function(stringLength){
  stringLength = stringLength || 12;
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var result = '';
  for (var i=0; i<stringLength; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    result += chars.substring(rnum,rnum+1);
  }
  return result;

};
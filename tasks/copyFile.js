// Generated by CoffeeScript 1.3.3

/*global module, require
*/


(function() {

  module.exports = function(grunt) {
    var fs, growl, path, wrench;
    growl = require('growl');
    path = require('path');
    wrench = require('wrench');
    fs = require('fs');
    return grunt.registerMultiTask('copyFile', 'Copies a file', function() {
      var dest, source, src;
      src = this.file.src;
      dest = this.file.dest;
      source = grunt.file.read(src);
      return grunt.file.write(dest, source);
    });
  };

}).call(this);
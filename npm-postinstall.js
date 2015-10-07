var exec = require('child_process').exec;
var sys = require('sys');
var envSep = ~process.platform.indexOf('win') ? ';' : ':';

process.env.PATH = 'bin' + envSep + process.env.PATH;

exec('bower install && grunt githooks', function(err, stdout, stderr){
  sys.puts(stdout);
});

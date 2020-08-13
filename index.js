const {
  Command
} = require('commander');
const fs = require("fs");
const program = new Command();
program.version('0.0.1');

program
  .command('file <file> <new-name>')
  .description('rename a file')
  .action((file, new_name) => {
    console.log(`Renamed ${file} => ${new_name}`);
    fs.rename(file, new_name, function(err) {
      if ( err ) console.log('ERROR: ' + err);
  });
  })
  .parse(process.argv);
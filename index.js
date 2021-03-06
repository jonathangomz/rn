#! /usr/bin/env node

const {
  Command
} = require('commander');
const fs = require("fs");
const program = new Command();

program.version('0.1.3');

program
  .command('rn')
  .description('rename a file')
  .arguments('<file> <new_name>')
  .version('0.1.3')
  .action((file, new_name) => {
    fs.rename(file, new_name, function (err) {
      if (err) console.log('ERROR: ' + err);
      else console.log(`Renamed ${file} => ${new_name}`);
    });
  })
  .parse(process.argv);
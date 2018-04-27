const searchTerm = process.argv.slice(2);
const functions = require('./functions');

if (searchTerm.length === 0) {
  console.log('Please provide 1 argument, e.g.: Darth Vader');
} else {
  functions.getData(searchTerm);
}
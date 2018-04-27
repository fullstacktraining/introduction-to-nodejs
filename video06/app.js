const fs = require('fs');

fs.writeFile('test.txt', 'Hello from Node.js', error => {
  if (error) {
    console.error(`Error creating file: ${error}`);
  }
  console.log('File created');
});

// fs.stat('test', error => {
//   if (error) {
//     console.log('Folder does not exist');
//     fs.mkdir('test', error => {
//       if (error) {
//         console.log(`Error creating folder: ${error}`);
//       }
//       console.log('Folder created');
//     });
//   }
// });

// try {
//   fs.statSync('test');
//   console.log('folder exists');
// } catch(error) {
//   console.log('folder does not exist');
//   try {
//     fs.mkdirSync('test');
//     console.log('folder created')
//   } catch(error) {
//     console.log(`Error creating folder: ${error}`);
//   }
// }
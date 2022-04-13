const fs = require('fs');

// // ********************************* READ FILE 

// // // WITHOUT SYNC: because here it takes some time to read so that why its a non blocking code so its move 
// // // forward to execute other code. And when our code read completely it will show our results.

// fs.readFile('revision_sequence_wise', 'utf-8', (err, data) => {
//     console.log(err, data);
// })

// console.log('Reading File Completed WITHOUT Sync');

// // WITH SYNC --> Here we will block our code to run first then move forward
const a = fs.readFileSync('revision_sequence_wise');
console.log(a.toString());
console.log('Reading File Completed WITH Sync');


// // // ********************************** WRITE FILE


// fs.writeFile('write_file_using_fs', 'This file is created using fs command at fs file', () => {
//     console.log('Callback Function: Write File ');
// });

// console.log('Write File without Sync');

// // WITH SYNC --> Here we will block our code to run first then move forward

let firstExecute = fs.writeFileSync('write_file_using_fs_sync', 'Practice writeFileSync using fs module');

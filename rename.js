const fs = require('fs');
const path = require('path');

// Path to the directory containing the images
const directoryPath = 'E:\\sonali\\public\\oil_color';

// Alternative way using forward slashes
// const directoryPath = 'E:/sonali/public/charcoal';

// Read all files in the directory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  let fileCount = 1;

  // Loop through all files and rename them
  files.forEach((file) => {
    const oldPath = path.join(directoryPath, file);
    const newPath = path.join(directoryPath, `${fileCount}.jpg`);

    fs.rename(oldPath, newPath, (err) => {
      if (err) {
        console.log(`Error renaming file ${file}:`, err);
      } else {
        console.log(`Renamed ${file} to ${fileCount}.jpg`);
      }
    });

    fileCount++;
  });
});

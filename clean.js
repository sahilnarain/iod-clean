'use strict';

const fs = require('fs');

const BASE_DIR = '/Users/sahil/Desktop/temp';

let files = fs.readdirSync(BASE_DIR + '/dataset');

console.log(files);

const imageRegex = /\.jpeg$/;
const txtRegex = /\.txt$/;

let images = files.filter((file) => imageRegex.test(file));
let txts = files.filter((file) => txtRegex.test(file));

// console.log(files.length, images.length, txts.length, files.length - (images.length + txts.length));

const testImages = [];
const extraLabels = [];

let ctr = 0;
images.forEach((image) => {
  let filename = image.replace(imageRegex, '');

  let imageFilename = BASE_DIR + '/dataset/' + filename + '.jpeg';
  let newImageFilename = BASE_DIR + '/final/' + filename + '.jpeg';
  let txtFilename = BASE_DIR + '/dataset/' + filename + '.txt';
  let newTxtFilename = BASE_DIR + '/final/' + filename + '.txt';

  console.log(imageFilename, txtFilename);

  if (fs.existsSync(imageFilename) && fs.existsSync(txtFilename)) {
    let content = fs.readFileSync(txtFilename).toString();
    if (!content.includes('-1')) {
      fs.copyFileSync(imageFilename, newImageFilename);
      fs.copyFileSync(txtFilename, newTxtFilename);
    }
  }

  // if (fs.existsSync(txtFilename)) {
  //   let content = fs.readFileSync(txtFilename).toString();
  //   if (content.includes('-1')) {
  //     let newFilename = imageFilename.replace('dataset', 'extra-labels');
  //     fs.copyFileSync(imageFilename, newFilename);
  //   }
  // }
  //
  // if (fs.existsSync(imageFilename) && !fs.existsSync(txtFilename)) {
  //   let newFilename = imageFilename.replace('dataset', 'test-images');
  //   fs.copyFileSync(imageFilename, newFilename);
  // }
  //
  // if (!fs.existsSync(imageFilename) && fs.existsSync(txtFilename)) {
  //   let newFilename = imageFilename.replace('dataset', 'extra-labels');
  //   fs.copyFileSync(imageFilename, newFilename);
  // }
});

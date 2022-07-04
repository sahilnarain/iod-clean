'use strict';

const fs = require('fs');

const BASE_DIR = process.cwd() + '/';

const source = 'Vivo/';
const count = 100;
const dest = 'Set2/';
const fileExt = 'jpg';
const fileExtRegex = eval(`/\.${fileExt}$/`);

const files = fs.readdirSync(BASE_DIR + source).filter((file) => file.includes(fileExt));

let randomizedFiles = files
  .map((value) => ({value, sort: Math.random()}))
  .sort((a, b) => a.sort - b.sort)
  .map(({value}) => value)
  .slice(0, count);

randomizedFiles.forEach((randomFile) => {
  console.log(BASE_DIR + source + randomFile, '->', BASE_DIR + dest + randomFile);
  fs.copyFileSync(BASE_DIR + source + randomFile, BASE_DIR + dest + randomFile);
});

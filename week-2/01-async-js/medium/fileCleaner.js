const fs = require('fs');

const fileData = fs.readFileSync('./dummy.txt','utf8');

const newstr = fileData.split(" ").join("");

fs.writeFileSync('./dummy.txt',newstr);
const fs = require('fs');

const filedata = fs.readFile('./dummy.txt', 'utf8',(err,data)=>{
    console.log(data)
});
console.log(filedata)

count = 0;
for(let i=0; i<100000; i++){
    count += 1;
}
console.log(count);


const fs=require("fs");
const readStream=fs.createReadStream('./files//blog3.txt');
const writeStream=fs.createWriteStream('./files//blog4.txt');
// readStream.on('data',(chunk) => {
//     console.log("-------------New Chunk----------------"); 
//     console.log(chunk.toString());
//     writeStream.write('\n==========NEW CHUNK ================\n');
//     writeStream.write(chunk);
// });

readStream.pipe(writeStream);
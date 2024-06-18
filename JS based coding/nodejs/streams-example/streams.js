const fs = require("node:fs");
const zlib = require("zlib");
const readline = require("readline");

const readableStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 1024, // in bytes -> Adjusted for better performance
});

const writeableStream = fs.createWriteStream("./file3.txt", { flags: "a" });

// Write the stream data as a gzip file
readableStream
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("./file2.gz"))
  .on("finish", () => {
    console.log("File compressed successfully.");

    // Create a stream to read the gzipped file and decompress it
    const gunzipStream = fs
      .createReadStream("./file2.gz")
      .pipe(zlib.createGunzip());

    // Create a readline interface for the decompressed stream
    const lineReader = readline.createInterface({
      input: gunzipStream,
    });
    let n = 0;
    // Read lines from the decompressed stream
    lineReader.on("line", (line) => {
      console.log(`line: ${n}`);
      console.log(line);
      writeableStream.write(line + "\n");
      n++;
    });

    lineReader.on("close", () => {
      console.log("Finished reading lines.");
    });
  });

// const writeableStream = fs.createWriteStream("./file2.txt");

// readableStream.on("data", (chunk) => {
//   console.log(chunk);
//   writeableStream.write(chunk);
// });

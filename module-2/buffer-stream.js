
const fs = require('fs');

const readStream = fs.createReadStream('./hello-world.txt', { encoding: 'utf-8' })
const writeStream = fs.createWriteStream("./hello.txt", { encoding: 'utf-8' });

// read data from hello-world.txt and write to hello.txt
readStream.on("data", (data) => {

    writeStream.write(data, (err) => {
        if (err) {
            throw Error("Error", err)
        }
    })
})

// read stream error
readStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})

// write stream error
writeStream.on("error", (err) => {
    if (err) {
        throw Error("Error", err)
    }
})

//  end read stream
readStream.on("end", () => {
    console.log("read stream end");
    writeStream.close();
})

// end write stream
writeStream.on("finish", () => {
    console.log("written successfully");
})
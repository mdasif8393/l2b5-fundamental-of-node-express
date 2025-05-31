// // Sync Way to handle files
// const fs = require('fs');

// console.log("1");

// // Read the file synchronously
// const data = fs.readFileSync('./hello.txt', { encoding: 'utf8' })

// console.log("2");
// console.log(data);


// fs.writeFileSync('./hello.txt', 'Hello World.. Edit from writeFileSync', { encoding: 'utf-8' })

// console.log("3");


// Async way to handle file

const fs = require('fs');

fs.readFile('./hello-world.txt', { encoding: "utf-8" }, (err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

// async write file

const data = 'Hello, world!';

fs.writeFile('./hello.txt', data, { encoding: 'utf-8' }, (err) => {
    if (err) {
        console.error('Error writing file:', err);
        return;
    }
    console.log('File written successfully!');
});



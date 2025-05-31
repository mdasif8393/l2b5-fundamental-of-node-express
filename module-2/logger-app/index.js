
const path = require("path");
const fs = require("fs");

// get input from console log
const inputArgument = process.argv.slice(2)

//make a sentence
const text = inputArgument.join(" ");

const timeStamp = new Date().toISOString()

// make message with new line
const message = `${text} ${timeStamp} \n`


if (!message) {
    console.log("❌ Please, Provide a message to log");
    console.log("Example: node index.js Hello world!!");
    process.exit(1)
}

// make file path where save the text
const filePath = (path.join(__dirname, "log.txt"));

// save text to log.txt file
fs.appendFile(filePath, message, { encoding: "utf-8" }, () => {
    console.log("Your log added successfully");
})


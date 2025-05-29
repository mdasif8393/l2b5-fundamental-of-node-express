const EventEmitter = require('node:events');

class SchoolBell extends EventEmitter { }

const schoolBell = new SchoolBell();

schoolBell.on("ring", () => {
    console.log("Yahoo!! Class sesh!");
});

schoolBell.on("ring", () => {
    console.log("Dhet! R akta class ache ");
})

schoolBell.on("broken", () => {
    console.log("Oh no! Class ki ar sesh hobe na!");
})

schoolBell.emit("ring");
schoolBell.emit("broken");
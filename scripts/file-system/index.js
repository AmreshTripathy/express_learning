const fs = require("fs");
const path = require("path");

const dataFolder = path.join(__dirname, "data");

// sync methods
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log("Data folder is created");
}

const syncFilePath = path.join(dataFolder, "example.txt");
fs.writeFileSync(syncFilePath, "Hi Amresh");
fs.appendFileSync(syncFilePath, "\nWelcome to synchronous file methods");
const readFileSync = fs.readFileSync(syncFilePath, "UTF-8");
console.log("read sync file:\n" + readFileSync);

// async methods
const asyncFilePath = path.join(dataFolder, "asyncExample.txt");
fs.writeFile(asyncFilePath, "\nHi Amresh", (error) => {
  if (error) throw error;

  fs.appendFile(asyncFilePath, "\nWelcome to async file methods", (error) => {
    if (error) throw error;

    fs.readFile(asyncFilePath, "UTF-8", (error, data) => {
      if (error) throw error;
      console.log("read async data:", data);
    });
  });
});

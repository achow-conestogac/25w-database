// we're doing this for the parking lot example

import Flatfile, { create } from "./flatfile";
import fs from "fs";

test('we need a directory to store all the files', () => {
  // suggestion:
  // the user needs to create a new directory to store the files?

  const flatfile = new Flatfile();
});

test.skip('create data', () => {
  const dataJson = {
    "name": "a sample Parking lot",
    "capacity": 15,
  };

  const value = create(dataJson, "parkingLot");

  expect(value).toBeTruthy();
  // we can test and compare if the data is in the file
  // const fileContent = readFile(filePath)
});

function readFile(filePath: string) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File content:', data);
    });
}

// - We should be able to Create new data
//     - [x] program  EXPECTS the user for an input
//         - [x] user needs to provide WHERE 
//     - [ ] take the input, the persist in a blank file as a json object
//     - [ ] have a directory to store all the files
// 

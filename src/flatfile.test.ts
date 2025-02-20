import Flatfile from "./flatfile";
import fs from "fs";
import path from "path";

test('we need a directory to store all the files', () => {
  new Flatfile();
  
  const projectRoot = path.resolve(__dirname, '../');
  
  const dirPath = path.join(projectRoot, 'flatfileDirectory');

  expect(fs.existsSync(dirPath)).toBeTruthy();
});

test('create data', () => {
  const dataJson = {
    "name": "a sample Parking lot",
    "capacity": 15,
    "allowedPersons": "andy"
  };

  const value = new Flatfile().create(dataJson, "parkingLot2");

  expect(value).toBeTruthy();
});
 

// export interface ParkingLot {
// 	parkingLotName: string,
// 	capacity: number,
// }
// 
import fs from "fs";
import path from "path";

interface ParkingLot {
  name: string,
  capacity: number,
}

export default class Flatfile {
  constructor() {
      const projectRoot = path.resolve(__dirname, '../');
    
      const dirPath = path.join(projectRoot, 'flatfileDirectory');
  
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath)
    }
  }
}

export function create(
  data: ParkingLot,
  table: string
) {
  try {
    const jsonString = JSON.stringify(data, null, 2);
    const filePath = path.join('/path/to/your/directory', `${table}.json`);
    fs.writeFileSync(filePath, jsonString);
    console.log('File has been saved successfully.');
    return true;
  } catch (err) {
    console.error('Error writing file:', err);
    return false;
  }
}


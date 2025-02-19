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
  const projectRoot = path.resolve(__dirname, '../..');
  
  // Define the directory path to check
  const dirPath = path.join(projectRoot, 'flatfileDirectory');

  fs.mkdirSync(dirPath)
  }
}

export function create(
  data: ParkingLot,
  table: string
) {
  return data.name;
}


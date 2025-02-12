// export interface ParkingLot {
// 	parkingLotName: string,
// 	capacity: number,
// }
// 
interface ParkingLot {
  name: string,
  capacity: number,
}

export function create(
  data: ParkingLot,
  table: string
) {
  return data.name;
}
// // export function create(parkingLot: ParkingLot): boolean  {}


test('check that jest is working', () => {
  expect(true).toBeTruthy();
});

test('false is not true', () => {
  expect(true).toBeFalsy();
});
// describe("this is a test", () => {
// 	test("i am a test", () => {
// 		expect(true).tobetrue();
// 	});
// });
//
// console.log("the message")
// import { create, ParkingLot } from "./flatfile";
// 
// const test_data: ParkingLot = {
// 	parkingLotName: "Lot 1",
// 	capacity: 15,
// }
// 
// const result = create("parkingLot", test_data);
// 
// if (result === true) {
// 	console.log("success");
// } else {
// 	console.log("failed");
// }

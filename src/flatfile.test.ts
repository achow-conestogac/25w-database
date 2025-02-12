// we're doing this for the parking lot example

import { create } from "./flatfile";

test('create data', () => {
  const dataJson = {
    "name": "a sample Parking lot",
    "capacity": 15,
  };

  create(dataJson, "parkingLot");
});


// - We should be able to Create new data
//     - program ~asks~ EXPECTS the user for an input
//         - user needs to provide WHERE 
//     - take the input, the persist in a blank file as a json object
// 

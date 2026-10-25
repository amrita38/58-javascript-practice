// let obj = {
//   name: "puja",
//   age: 26,
// };
// obj["age"];

// key value-structure --
// let obj = {
//   name: "puja",
// };
// obj.name;


//  nesting and deep asses --
// let user = {
//   name: "puja",
//   address: {
//     city: "jamshedpur",
//     pin: 832104,
//     location: {
//       lat: 32.2,
//       lng: 77.4,
//     },
//   },
// };
// user.address.location.lng;

//  obj destructuring --
// let user = {
//   name: "puja",
//   address: {
//     city: "jamshedpur",
//     pin: 832104,
//     location: {
//       lat: 32.2,
//       lng: 77.4,
//     },
//   },
// };

// let { lat, lng } = user.address.location;

// 5. looping: for-in , obj.keys,obj.entries --
// for-in
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
// };

// for (let key in obj) {
//   console.log(key, obj[key]);
// }

// obj.keys
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
// };
// object.keys(obj);

// obj.entries;
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
// };
// object.entries(obj);

//  coping objects : spread , object.assign , deep clone --
// spread --
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
// };
// let obj2 = { ...obj };

// object.assign --
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
// };
// let obj2 = object.assign({}, obj);

// deep clone-
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
//   address: {
//     city: "bopal",
//   },
// };
// let obj2 = JSON.parse(JSON.stringify(obj));

// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
//   addresss: {
//     city: "bopal",
//   },
// };

// optional chining computed properties --
// optional chining
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
//   addresss: {
//     city: "bopal",
//   },
// };
// obj?.address?.city;

// computed properties -

// let role = "admin";
// let obj = {
//   name: "puja",
//   age: 26,
//   email: "amrita@test.com",
//   addresss: {
//     city: "bopal",
//   },
//   [role]: "puja",
// };



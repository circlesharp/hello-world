// keyof
function getProperty<T, K extends keyof T> (obj: T, key: K) {
  return obj[key];
}

// 
function deleteProperty<T extends object, K extends object> (obj: T, key: K): T & K {
  return Object.assign(obj, key);
}
// function deleteProperties<T, U extends T> (obj1: T, obj2: U) {
//   const toDeleteKeys = Object.keys(obj1);
//   for (const key in obj2) {
//     if (toDeleteKeys.includes(key)) {
//       delete obj1[key];
//     }
//   }
// }

// Code your solution in this file!
const callback = function (el, i, arr) {
  console.log('The current element is', el);
  console.log('The index of the current element is', i);
  console.log('The current array is', arr);
  console.log('----------------');
};

const myForEach = function (arr, cb) {
  for (const el of arr) {
    cb(el, arr.indexOf(el), arr);
  }
};

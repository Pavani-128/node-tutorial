// console.log(__dirname);
// setInterval(()=>{
// console.log("hi pavani");

// },600)

const names = require('./4-names')
const sayhi = require('./5-utils')
console.log(names);
sayhi("lakshmi");
sayhi(names.pavani);
sayhi(names.sesha);
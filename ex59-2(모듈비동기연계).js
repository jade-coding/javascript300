import {value} from './ex59-3.js'

console.log(value); // 1

setTimeout(()=>{
    console.log(value) // 2
},2000)
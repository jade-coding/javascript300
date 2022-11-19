// 특정자리수에서 반올림
const val = 573.926;

console.log(Math.round(val))
console.log(Math.round(val * 10)/10)
console.log(Math.round(val * 100) / 100)
console.log(Math.round(val/10) * 10)
console.log(Math.round(val/100) * 100)

/*
574
573.9
573.93
570
600
*/
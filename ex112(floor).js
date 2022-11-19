// 내림 . 음수에서 내림을 하면 오히려 값은 더 큰 음수가 됨

const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.floor(positiveNum));
console.log(Math.floor(negativeNum));
console.log(Math.floor(positiveNum * 10) / 10)
console.log(Math.floor(positiveNum / 10) * 10)
console.log(Math.floor(negativeNum * 10) / 10)
console.log(Math.floor(negativeNum / 10) * 10)

/*
93
-40
93.5
90
-39.3
-40
*/
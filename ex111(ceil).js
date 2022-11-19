// 올림 . 음수에서 올림을 하면 오히려 값은 작아져야 하므로 버린다고 생각하면 됨

const positiveNum = 93.54;
const negativeNum = -39.27;

console.log(Math.ceil(positiveNum));
console.log(Math.ceil(negativeNum));
console.log(Math.ceil(positiveNum * 10) / 10)
console.log(Math.ceil(positiveNum / 10) * 10)
console.log(Math.ceil(negativeNum * 10) / 10)
console.log(Math.ceil(negativeNum / 10) * 10)

/*
94
-39
93.6
100
-39.2
-30
*/
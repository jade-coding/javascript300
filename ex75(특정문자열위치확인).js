const str = 'Carpe diem, seize the day'
console.log(`"e"는 ${str.indexOf('e')}번째 인덱스에 있습니다`)
console.log(`대문자 "C"는 ${str.indexOf('C')}번째 인덱스에 있습니다`)
console.log(`"c"는 ${str.indexOf('c')}번째 인덱스에 있습니다`)
console.log(`", se"는 ${str.indexOf(', se')}번째 인덱스에 있습니다`)
/*
"e"는 4번째 인덱스에 있습니다
대문자 "C"는 0번째 인덱스에 있습니다
"c"는 -1번째 인덱스에 있습니다
", se"는 10번째 인덱스에 있습니다


indexOf는 특정문자와 일치하는 첫 번째 인덱스 값을 반환합니다. 대소문자 구별합니다. 찾는 문자가 없을 경우 -1을 리턴.

*/


const arr= ['Carpe','diem','seize','the','day']
const howManyHasE = (arr) =>{
    let count = 0;
    arr.forEach((str)=>{
        if(str.indexOf('e')>-1) count++;
    })
    return count;
}

console.log(`${arr}에 "e"가 있는 요소는 모두 ${howManyHasE(arr)}개 입니다.`) // Carpe,diem,seize,the,day에 "e"가 있는 요소는 모두 4개 입니다.
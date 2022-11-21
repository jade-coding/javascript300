// 정규표현식으로 문자열 치환하기
// 문자열.replace(교데 대상 문자열 또는 정규식, 대체될 문자열 또는 함수)

console.log('2018-08-03 07-23-14'.replace('-',":")) // 2018:08-03 07-23-14
console.log('2018-08-03 07-23-14'.replace(/-/g,":"))//2018:08:03 07:23:14
console.log('2018-08-03 07-23-14'.replace(/\d/g,"9")) // 9999-99-99 99-99-99

const littlewomen = 'Meg March, Jo March, Beth March, amy March'
console.log(littlewomen.replace(/\w+ March/ig, 'Mrs.$&')) 
console.log(littlewomen.replace(/\w+ March/ig, (str,d1,d2,d3,d4, offset, s)=>{ // d1~d4는 표현식과 일치한 값들이 전달됨
    let tag = '';

    if(/Meg/.test(str)) tag = '첫째' 
    else if(/Jo/.test(str)) tag = '둘째'
    else if(/Beth/.test(str)) tag=`셋째`
    else if(/Amy/.test(str)) tag =`4째`

    console.log(`원작 "작은 아씨들"에서 주인곡 ${str}은 ${tag}입니다.`)
    return tag;
    
}));

const name2 = 'March Amy'
console.log(name2.replace(/(March) (Amy)/, '$2 $1')); // 표현식에서 매칭된 값에 대해서 $1 $2인데 이걸 앞 뒤 순서를 바꿈
console.log(name2.replace(/(March) (Amy)/, (str, first, second, offset,s)=>{
    console.log(`${second} is name, ${first} is first name.`);
    return `${second} ${first}`;
}))
const date = new Date();
const dateUTC = Date.UTC( // Date객체에 메소드 UTC는 매개변수로 지정된 날짜, 시간 보를  UTC 기준의 밀리초 시간으로 반환함
// utc 인자로는 6개의 인자를 대입해야 함. 년도~초까지 
    date.getUTCFullYear(), 
    date.getUTCMonth(),
    date.getUTCDate(),
    date.getUTCHours(),
    date.getUTCMinutes(),
    date.getUTCSeconds()
)

console.log(dateUTC); // 1668818118000
console.log(new Date(dateUTC)); // 2022-11-19T00:33:07.000Z
// 변환된 UTC 기준 시간정보를 새로운 Date 객체로 담습니다. 콘솔 출력하면 Date.prototype.toString 메소드가 실행되어 Date객체 인스턴스 값이 문자형으로 자동 형변환 됩니다.
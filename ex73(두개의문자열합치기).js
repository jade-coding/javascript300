const str1 = "Good afternoon"
const str2 = ', Good evening'
const str3 = ', and Good night!'
const str4 = ' - The Truman Show, 1998'
console.log(str1.concat(str2,str3,str4)) // Good afternoon, Good evening, and Good night! - The Truman Show, 1998
// str1 = str1.concat(str2,str3,str4) 이런식의 할당은 불가능!
// concat 보다는 +를 자주 활용함.
const sentence = 'Wakanda Forever!!';
console.log(sentence.substr(8))// Forever!!
console.log(sentence.substr(8,7));//Forever
console.log(sentence.substr(0));//Wakanda Forever!!
console.log(sentence.substr(-10))// Forever!!
console.log(sentence.substr(0,-3)) // 빈값 두번째인자에 음수를 넣으면 정상 수행 X 
console.log(sentence.substr(30)) // 빈값
console.log(sentence.substr(0,30)) // Wakanda Forever!!

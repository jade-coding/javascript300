const sentence = 'The sun will shine on us again'
console.log(sentence.slice(13)); // shine on us again
console.log(sentence.slice(13,24)); // shine on us
console.log(sentence.slice(0)); // The sun will shine on us again
console.log(sentence.slice(0,-23)); // The sun
console.log(sentence.slice(50)); // 빈값. 문자열을 뛰어넘는 순자여서
console.log(sentence.slice(7,2)); // 빈값. 첫번째 인자가 두번째 인자보다 크면 slice, substring 정상수행 X 

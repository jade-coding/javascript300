const sentence = ['         ABC abc','ABC abc          ', ` first second third
             forth
              sentence               ` ];


const filterSentence = (sentences) =>{
    const filtered = [];
    sentences.forEach(s =>{
        filtered.push(s.trim());
    });
    return filtered;
}

console.log(filterSentence(sentence));

/*
[
  'ABC abc',
  'ABC abc',
  'first second third\n             forth\n              sentence'
]

trim 을 통해서 공백, 탭, 줄바꿈을 삭제하고, 필터링된 값들을 배열로 다시 반환
 */

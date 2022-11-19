// 객체에 속성 추가 못하게 만들기
// seal은 객체에 속성 추가/삭제를 못하게ㅔ 합니다. 단 기존 속성은 변경 가능합니다.
// 'use strict'가 선언된 스코프에서 객체 속성을 추가/삭제하면 에러가 발생합니다. 반대로 선언되지 않은 스코프에서는 에러가 발생하지 않으나 정상적인 처리가 되지도 않음

const album = {
    name : 'LOVE YOURSELF'
}

album.song = 'Euphoria';
album.singer = 'RM'

console.log(album)
//{ name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'RM' }

Object.seal(album);

// album.comment('Answer'); // TypeError: album.comment is not a function 에러 발생
album.singer='JK'; // 기존속성은 변경이 가능!!
// delete album.name; // Cannot delete property 'name' of #<Object> 기존속성도 삭제는 불가!

console.log(album); 
//{ name: 'LOVE YOURSELF', song: 'Euphoria', singer: 'JK' }
"use strict"

const fs = require('fs')

const checkDir = (path, callback) => {
    fs.stat(path, (err, stats)=>{ // fs.stat은 대입된 path 경로값의 파일 존재 여부를 확인할 수 있음
        // fs.Stats 클래스로 래핑되어 콜백함수로 전달되어져. isFile, isDirectory, isFIFO() 등 간단한 함수로 파일 정보를 제공
        if(err && err.code === 'ENOENT') return callback(null, true) // 해당 경로에 어떤 파일도 존재하지 않은 경우, fs.stat 모듈은 상태정보가 없어 에러를 반환
        // 이 상태가 새로운 폴더를 만들기에 적합하기에 콜백에 true를 넣어서 보내줌
        if(err) return callback(err)

        return callback(null, !stats.isDirectory()) // 에러없이 파일 정보를 가져온 뒤 stats.isDirectory()를 확인함. checkDir의 의도는 현재 경로에 정상적으로 새로운 폴더를 생성 가능한지 확인하는 함수
        // isDirectory()가 true이면 이미 동일한 폴더가 있다는 뜻
    })
}

const currentPath = __dirname // global변수를 사용한 것
// __dirname : node 명령어로 실행된 파일의 현재 경로 정보를 반환함. 단. 경로에는 파일이름은 포함하지 않음. 파일이 위치한 폴더까지 절대경로로 경로값을 반환. 
let path = `${currentPath}/js200`

checkDir(path, (err, isTrue)=>{
    if(err) return console.log(err)

    if(!isTrue) {
        console.log('이미 동일한 디렉터리가 있습니다. 디렉터리명을 변경합니다')
        path = `${currentPath}/js200-new`
    }

    fs.mkdir(path, (err)=>{if(err) console.log(err)}) // 새로운 모듈을 생성. 인자로 넣은 경로로 폴더를 생성하고 에러가 발생하면 콜백함수로 에러 정보를 반환
    /*
    폴더를 생성하는 예제로 간단하게 fs.stat모듈을 사용했으나 fs.open,fs.readFile, fs.writeFile와 같이 파일을 접근할 때에는 fs.stat모듈 사용을 권장하지 않음
    파일을 직접 읽고 쓰기 시에는 반드시 접근 권한을 확인해야 하므로 이 경우에는 fs.access모듈 사용을 권장
    fs.stat, fs.Stats클래스에 대해서는 Node.js API를 참고할 것
    */

    console.log(`${path} 경로로 디렉터리를 생성했습니다`)
})

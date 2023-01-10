import * as http from 'http'
const hostname = '127.0.0.1'
const port = 5120 // 처음에 6000포트로 했는데 보니까 트로이목마 접속되는 포트여서 브라우저 정책상으로 차단되어있음
// import로 붙이나, require로 붙이나
// https://stackoverflow.com/questions/35728117/difference-between-import-http-requirehttp-and-import-as-http-from-htt
// https://gajy.tistory.com/65
const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.end('Hello World\n')
})

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
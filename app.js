const Emitter = require('./ex167(eventEmitter이해하기1)')
const em = new Emitter()

em.on('greet',()=>{
    console.log('Hello First')
})

em.on('greet',()=>{
    console.log('Hello Second')
})

em.emit('greet')

/*
결과 : 
Hello First
Hello Second
*/
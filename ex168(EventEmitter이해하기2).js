const Emitter = require('events')
const eventConfig = require('./config').events
const em = new Emitter()

em.on(eventConfig.GREET, () => {
    console.log('Somewhere, someone said heelo.')
})

em.on(eventConfig.GREET, () => {
    console.log('A Greeting occurred!')
})

em.emit(eventConfig.GREET)

// 실행 결과
//Somewhere, someone said heelo.
//A Greeting occurred!

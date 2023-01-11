class Emitter {
    constructor(){
        this.events = {}
    }

    on(type,listener){ // event에 키로 type을 지정하고 해당 키 값에 리스너를 추가. 즉, 해당 이벤트의 listener들을 모아 놓는 형태
        this.events[type] = this.events[type] || []
        this.events[type].push(listener)
    }

    emit(type){
        if(this.events[type]){
            this.events[type].forEach((listener)=>{
                listener()
            })
        }
    }
}

module.exports = Emitter
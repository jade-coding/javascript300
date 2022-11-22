const timer = {
    run : function(){
        if(this.t) console.log('이미 실행된 타이머가 있습니다')
        
        this.t = setTimeout(function(){
            console.log('1초 뒤에 실행됩니다.')
        },1000)
    },

    cancel : function(){
        if(this.t) clearTimeout(this.t) // setTimeout을 취소시키는 것.
        this.t = undefined;
    }

}

timer.run();
timer.cancel() // 1초도안되어서 바로 취소했으므로 위 명령은 실행이 안됨.
timer.run(); // 1초 뒤에 실행됩니다.
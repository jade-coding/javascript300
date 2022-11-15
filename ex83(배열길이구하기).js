const ship = {
    max : 4,
    passenger : [],
    onBoard : function(name){
        if(this.passenger.length === 4){
          console.log(`This ship is full. ${name} can not board this ship.`);  
        }
        else{
            this.passenger.push(name);
            console.log(`${name} boarded`);
        }
    }
}

ship.onBoard('chloe');
ship.onBoard('jay');
ship.onBoard('david');
ship.onBoard('asher');
ship.onBoard('daniel');
console.log(ship.passenger)

/*
chloe boarded
jay boarded
david boarded
asher boarded
This ship is full. daniel can not board this ship.
[ 'chloe', 'jay', 'david', 'asher' ]
*/
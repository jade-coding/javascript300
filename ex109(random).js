const generateRandom = (min, max) =>{
    return Math.floor(Math.random() * (max - min + 1) + min);
};

for(let i = 0; i<5; i++){
    console.log(generateRandom(1,10))
}
/*
8
10
2
9
2
*/


for(let i =0; i<5; i++){
    console.log(generateRandom(10,100))
}
/*
75
82
16
64
43
*/
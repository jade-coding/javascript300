const double = x => x+x;
console.log(double(2)) // 4가 출력

const add = (a,b) => a+b;
console.log(add(1,2)) // 3가 출력

const printArguments = function(){
    console.log(arguments); // arguments 객체를 출력 
    /*

    function(){} 이렇게 만들면 
    [Arguments] { '0': 1, '1': 2, '2': 3 } 이렇게 출력
 
    ()=>{}이렇게 만들면 아래와 같이 출력.. 
    
    ********  화살표 함수는 기본함수와 다르게 arguments 객체가 만들어지지 않음.!!!!!!!!!!!
    [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300',
      exports: {},
      filename: 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300\\ex47.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300\\ex47.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300',
    exports: {},
    filename: 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300\\ex47.js',
    loaded: false,
    children: [],
    paths: [
      'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300\\node_modules',
      'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\node_modules',
      'c:\\Users\\user\\Desktop\\Coding\\algo\\node_modules',
      'c:\\Users\\user\\Desktop\\Coding\\node_modules',
      'c:\\Users\\user\\Desktop\\node_modules',
      'c:\\Users\\user\\node_modules',
      'c:\\Users\\node_modules',
      'c:\\node_modules'
    ]
  },
  '3': 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300\\ex47.js',
  '4': 'c:\\Users\\user\\Desktop\\Coding\\algo\\Javascript\\javascript300'
}
    
    */
}

printArguments(1,2,3)

const sum = (...args)=>{
    let total = 0;
    for (let i = 0; i<args.length;i++)
    total += args[i];
    return total;
}
console.log(sum(1,2,3)); // 6출력

setTimeout(()=>{
    console.log("화살표 함수!"); //화살표 함수! 출력
},10)
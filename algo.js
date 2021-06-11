var length = 20;
var array = generate(length);

console.log(array);

function generate(length){
    var arr =[];
    for (var i=0;i<length;i++){
        arr.push(Math.floor(Math.random() * length));
    }
    return arr;
}
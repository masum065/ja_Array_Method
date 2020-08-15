
function sumation(a,b, cb){
    let c = a - b;
    let d = a+b;

    let result = cb(c,d);
    return result;
}

function add(a,b){
    return a+b;
}

let seeResult = sumation(5,6,function(c,d){
    return c+d;
});
let seeResult2 = sumation(5,6,add);
console.log(seeResult2)
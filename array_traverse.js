let arr = [1,4,32,16,5,78,23,2,0,68,9,24]


// ForEach
const forEachArray = arr.forEach(function(value){
    console.log({value}) ;
});


// map
const mapArray = arr.map(value =>value)
console.log({mapArray});


// filter
const filterArray = arr.filter(value => value === 2)
console.log({filterArray});


// find
const findArray = arr.find(value=> value === 9);
console.log({findArray});

// reduce
const reduceArray =  arr.reduce((prev,next)=> prev + next)
console.log(reduceArray);
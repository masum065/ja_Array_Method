let obj = [
    {name:'Saddam', age:36},
    {name:'Ashik', age:28},
    {name:'Koushik', age:20},
    {name:'Alu', age:16},
    {name:'Fokir', age:26},
]

obj.sort((a,b) =>{
    if(a.age>b.age){
        return 1
    }
    else if(a.age<b.age){
        return -1
    }else{
        return 0;
    }
})

console.log(obj)
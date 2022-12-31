// async function fun(){
//     console.log("hello");
//    await console.log("rishabh")
//     console.log("lko");
//     console.log("266061")
    
// }
// fun()
// console.log("ertyu")
// console.log("tyuio");

// \\pure function

// var x=10;

// function add (a,b){
//     sum=a+b;
//     console.log(sum);
// }

// add(23,43)
// 
 

// add(2,2)

// if(null==undefined){
//     console.log("true");
// }
// else(
//     console.log("false")
// )

// var q=null
// console.log(q);

// promiss 
// var pro=new Promise(function(resove,reject){
//     var a=4;
//     if(a==4){
//         resove()
//     }
//     else{
//         reject()
//     }
// })
// pro.then((result)=>{console.log("yes")})
// pro.catch((error)=>{console.log("no")})

let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    },2000);
});

p.then((result) => {
    console.log(result+10);
   return result
}).then((result) => {
    console.log(result);
    return result*50;
});
// let res = new Promise((function(resolve,reject){
//     resolve("hello");
// }))

function f1(n){
    return new Promise(function(resolve,reject){
        if(n%2 == 0){
            resolve("even")
        }
        else{
            reject("odd")
        }
    })
}
console.log(f1(5));
f1(5)
.then(
    function(r){
   console.log(r)
    })
    .catch(
    function(err){
    console.log(err);
    }
    )
    
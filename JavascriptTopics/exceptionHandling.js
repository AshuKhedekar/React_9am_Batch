// function fnSubmit(){
//     var name;
//     console.log(name.length);
//     console.log("Hello",+name);
// }
// console.log(fnSubmit());
// undefined
// fnSubmit()
// VM207:3 Uncaught TypeError: Cannot read properties of undefined (reading 'length')
//     at fnSubmit (<anonymous>:3:22)
//     at <anonymous>:1:1
// fnSubmit @ VM207:3
// (anonymous) @ VM228:1
function fnSubmit(){
    var name;
    try{
        console.log(name.length);
    }
    catch(e){
        name="Sachin";
    }
    finally{
        console.log('am executed always');
    }
    console.log("Hello" + name);
}

// undefined
console.log( fnSubmit());
// VM515:10 am executed always
// VM515:12 Hello NaN
// undefined
// function fnSubmit(){
//     var name;
//     try{
//         console.log(name.length);
//     }
//     catch(e){
//         name="Sachin";
//     }
//     finally{
//         console.log('am executed always');
//     }
//     console.log(`Hello, ${name}`);
// }

// undefined
// fnSubmit()
// VM542:10 am executed always
// VM542:12 Hello, Sachin
// undefined
// function fnSubmit(){
//     var name;
//     try{
//         console.log(name.length);
//     }
//     catch(e){
//         name="Sachin";
//         console.log(e);
//     }
//     finally{
//         console.log('am executed always');
//     }
//     console.log(`Hello, ${name}`);
// }

// undefined
// fnSubmit()
// VM559:8 TypeError: Cannot read properties of undefined (reading 'length')
//     at fnSubmit (<anonymous>:4:26)
//     at <anonymous>:1:1
// VM559:11 am executed always
// VM559:13 Hello, Sachin
// undefined
// function fnSubmit(){
//     var sal = -34;
//     try{
//         if(sal < 0){
//             throw('Salary should be positive number');
//         }
//     }catch(error){
//         sal=0;
//     }
//     finally{
//         connsole.log('i am executed always');
//     }
//     console.log(`My salary is ,${sal}`);
// }
        
// undefined
// fnSubmit()
// VM709:11 Uncaught ReferenceError: connsole is not defined
//     at fnSubmit (<anonymous>:11:9)
//     at <anonymous>:1:1
// fnSubmit @ VM709:11
// (anonymous) @ VM712:1
// function fnSubmit(){
//     var sal = -34;
//     try{
//         if(sal < 0){
//             throw('Salary should be positive number');
//         }
//     }catch(error){
//         sal=0;
//     }
//     finally{
//         console.log('i am executed always');
//     }
//     console.log(`My salary is ,${sal}`);
// }
        
// undefined
// fnSubmit()
// VM714:11 i am executed always
// VM714:13 My salary is ,0
// undefined
// function fnSubmit(){
//     var sal = -34;
//     try{
//         if(sal < 0){
//             throw('Salary should be positive number');
//         }
//     }catch(error){
//         console.log(error);
//         sal=0;
//     }
//     finally{
//         console.log('i am executed always');
//     }
//     console.log(`My salary is ,${sal}`);
// }
        
// undefined
// fnSubmit()
// VM725:8 Salary should be positive number
// VM725:12 i am executed always
// VM725:14 My salary is ,0
// undefined
// function fnSubmit(){
//     var sal = -34;
//     try{
//         if(sal < 0){
//             console.log(sal);
//             // throw('Salary should be positive number');
//         }
//     }catch(error){
//         console.log(error);
//         sal=0;
//     }
//     finally{
//         console.log('i am executed always');
//     }
//     console.log(`My salary is ,${sal}`);
// }
        
// undefined
// fnSubmit()
// VM748:5 -34
// VM748:13 i am executed always
// VM748:15 My salary is ,-34
// promises for asynch
// js single threaded
// const promiseOne = new Promise((resolve , reject) =>{
//     console.log("perform task 1");
//     resolve("promise passed ");
//     let msg = true;
//     if(!msg == true)
//     {
//         console.log("msg passed")

//     }else{
//         console.log("error........")
//     }
// });
// promiseOne.then((result) =>{
//     console.log(result);
// }).catch((error) =>{
// console.log(error);
// })
// //async/await
// console.log("1");
// async function test()
// {
//     await console.log("2");// here awiat ka mean h iska print karakar is fn me aage walo ko rok do fn se bahar wale ko print krao and then fir await se aage wale print kr do
    
//    console.log("3");
    
//     console.log("4");
// }
// t1=test();

    // console.log("5");
//crete promises that will print username and password using
//and if usernamw not found then it will call
//reject staet and print ERROR......
// const promiseTwo = new Promise((resolve , reject) =>{
//     let username = "admin";
//     let password = "admin123";
//     if(username == "admin" && password == "admin123")
//     {
//         resolve("username and password found");
//     }else{
//         reject("ERROR: username and password not found");
//     }
// });
// promiseTwo.then((result) =>{
//     console.log(result);
// }).catch((error) =>{
// console.log(error);
// })
// async function test(){
//     await console.log('2');
//     console.log('3');
//     console.log('4');   

// }
t1=test();
console.log('5');
async function test1(){
    console.log('message;2');
    const response = await fetch("./student.json");
    console.log(response.status);
    const stdn = await response.json();
    return stdn;
    console.log('message;3' );

}
test().then(res)=>{
    console.log(res);
});
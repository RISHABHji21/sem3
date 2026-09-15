console.log("Hello, World!");
//  function sayHello()
// {
//     console.log("task 1 ");
//     setTimeout(function()
//     {
//         console.log("task 2");
//         console.log("task 3");
//     },2000)
// }
// sayHello();
// console.log("task 4");
//callback: passed as an argument to another fn and cal
function hello(n1,n2)
{
    console.log("task 1");
    return n1+n2;
}
let a = 10;
let b = 20;
console.log(hello(a,b));
hello (a,b)
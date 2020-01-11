// let timerId = setTimeout(sayHello, 3000);
// clearTimeout(timerId);

// function sayHello(){
//     alert("hello world")
// }

let timerId = setTimeout(function log(){
    console.log("hello");
    setTimeout(log, 2000);

});
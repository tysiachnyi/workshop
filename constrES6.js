// 'use strict';
// class User {
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`hello! ${this.name} `);
//     }
//     exit() {
//         console.log(` user ${this.name} leaved`);
//     }
// }

// let ivan = new User('ivan', 23);
// let alex = new User('alex', 30);

// console.log(ivan);
// console.log(alex);
// ivan.hello();

// 'use strict';
// function showThis(a, b){
//     console.log(this);
//     function sum(){
//         console.log(this);
//         return a + b;
//     };
//     console.log(sum());
// }
// showThis(4,5);
// showThis(5,5);ss

// let obj = {
//     a:20,
//     b:15,
//     sum: function(){
//         console.log(this);
//     }
// };

// obj.sum();
 

// 1) Просто вызов функции - window/undfined
// 

// let user = {
//     name: 'John'
// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + " " + surname);
// };

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

function count(number){
    return this * number
};

let double = count.bind(2);

// console.log(double(5));
// console.log(double(10));


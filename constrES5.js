function User(name, id){
    this.name = name;
    this.id = id;
    this.human = true,
    this.hello = function(){
        console.log('hello' + this.name);
    };
}
User.prototype.exit = function(name){
    console.log('user ' + this.name + ' leaved')
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

alex.exit();
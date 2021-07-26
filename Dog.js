var chalk = require('chalk');
function Dog(name){
    this.name = name;
    this.stomach =[];
}

Dog.prototype.sayHi = function () {
    console.log("hi, I'm Dog "+chalk.yellow(this.name));
    console.log("this is dog");
}

module.exports = Dog;
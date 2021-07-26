function Mouse(){
    this.stomach =[];
}

Mouse.prototype.stomach = function(rice) {
    this.stomach.push(rice);
}
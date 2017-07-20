function Student(){
	this.name='xiatian'
	this.age = 1
}
var a = new Student();
var b = new Student();
console.log(a.name)
console.log(b.name)
a.__proto__.name2 = "代码12222"
console.log(Student.prototype.name2===a.__proto__.name2)
console.log(a.name2)
console.log(b.name2)
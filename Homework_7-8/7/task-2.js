let MyMath = {};
MyMath.a = 5;
MyMath.b = 2;

MyMath.sum = function() {
	console.log(this.a + this.b);
}

MyMath.multiplication  = function() {
	console.log(this.a * this.b);
}

MyMath.division  = function() {
	console.log(this.a / this.b);
}

MyMath.subtraction  = function() {
	console.log(this.a - this.b);
}

MyMath.sum();
MyMath.multiplication();
MyMath.division();
MyMath.subtraction();

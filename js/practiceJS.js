//three ways to instantiate a function
function log (message){
	console.log(message);
}
var log = function(message){
	console.log(message);
}
window.log = function(message){
	console.log(message);
}

//objects in javascript

///key value pair object, hash map, hash table
var myObject = new Object()
var myObject = {
	name: 'derek whitman',
	getName: function(){
		return this.name;
	},
	age: 23
}

//JavaScript datatypes
//number, boolean, string, undefined, null, Object
//say you have the following variables
myString = '10';
num = 10;
//if you compare the two with '==' or '===' you get different answers
//the '==' will give you true and the '===' will give you false

//Functions are objects
var obj = {
	foo: 'bar'
}
var func = function (){
	this.foo
}
func.foo = 'bar';
func.foo === obj.foo//True

//Single threaded nature of JavaScript
//setTimeout(fn, milliseconds)

setTimeout(function(){
	console.log('Timer Firing')
},
3000);

//pattern for setTimeout
function render(){
	buildTable(data);
	setTimeout(function(){
		render();
	}, 10000);
}

//window
var bird = {
	name: 'cardinal',
	chirp: function(){
		console.log('The ' + this.name + ' is chirping!');
	}
}

var dog ={
	name: 'Bud',
	bark: function(){
		console.log('The ' + this.name + ' is barking!');
	}
}

var myChirp = bird.chirp()
//apply and call do the same thing but call takes as many arguments
//as you need with the first one being the context
//apply takes only two arguments - the context and an array
myChirp.call(bird, 'hi', 'this', 'is', 'cool');
myChirp.apply(bird, ['hi','this','is','cool']);

function reverse(){
	var array=[];
	for(var i = arguments.length-1; i>= 0; i--){
		array.push(arguments[i]);
	}
	return array;
}

function reverseArgsApply(){
	return Array.prototype.reverse.apply(arguments);
}
function reverseArgsCall(){
	return Array.prototype.reverse.apply(arguments);
}

var animal = function(fname, lname){
	//constructor
	this.fname = fname;
	this.lname = lname;
	this.getName = function(){}
}
animal.prototype.getName = function(){
	return this.fname + this.lname;
}

var gecko = new animal('loki', 'padfoot');

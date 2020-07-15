/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
	constructor() {
		if (this.constructor == Creature) {
			throw new Error('This is not to be instantiated!');
		}
	}
	act() {
		throw new Error('Act is a no-no');
	}
	move() {
		throw new Error('No movement for you');
	}
}

class Human extends Creature {
	constructor(name, age) {
		super();
		(this.name = name), (this.age = age);
	}
	act() {
		console.log(this.name + ' is my name and I like to walk on 2 legs');
	}
	move() {
		console.log('Moves 2 steps to the left');
	}
	speak() {
		console.log('I can speak because I am a human!');
	}
}
class Dog extends Creature {
	constructor(name, breed) {
		super();
		(this.name = name), (this.breed = breed);
	}
	act = () => {
		console.log(this.name + ' bark bark bark');
	};
	move = () => {
		console.log('Run up to hooman');
	};
	eat() {
		console.log('I eat so much food! Yum yum yum!');
	}
}
class Cat extends Creature {
	constructor(name, weight) {
		super();
		(this.name = name), (this.weight = weight);
	}
	act = () => {
		console.log(this.name + 'acts standoffish');
	};
	move = () => {
		console.log('Jumps on couch!');
	};
	nap() {
		this.weight = this.weight + 1;
		console.log('All I do is nap');
	}
}

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
	name;

	eat() {
		console.log(this.name + ' is eating');
	}

	sleep = () => {
		console.log(this.name + ' is sleeping');
	};

	code = function() {
		console.log(this.name + ' is coding');
	};

	repeat = function() {
		console.log(
			this.name + ' is repeating the above steps, yet another time'
		);
	};

	explain() {
		console.log(
			'I changed all the methods in the sub classes to arrow functions because that allows them all to work.  This is an example of how polymorphism works.  The arrow function makes the method a field on the object which puts it higher up in the order to be checked to run.'
		);
	}
}

class Teacher extends Person {
	constructor(name) {
		super(name);
		this.name = name;
	}

	eat = () => {
		console.log(this.name + ' loves to teach before eating');
	};

	sleep = () => {
		console.log(this.name + ' sleeps after preparing the lesson plan');
	};

	code = () => {
		console.log(this.name + ' codes first, then teaches it the next day.');
	};

	repeat = () => {
		console.log(this.name + ' teaches, codes, eats, sleeps, and repeats');
	};
}

class Student extends Person {
	constructor(name) {
		super();
		this.name = name;
	}
	eat = () => {
		console.log(this.name + ' loves to eat');
	};
	sleep = () => {
		console.log(
			this.name +
				' sleeping is my favorite activity and a goodnights rest is the best thing.'
		);
	};
	code = () => {
		console.log(this.name + ' coding is my passion.');
	};
	repeat = () => {
		console.log(
			this.name + ' doing this every day though is getting monotonous...'
		);
	};
}

const teacher = new Teacher('Dr. Teacher');

teacher.explain();

const student = new Student('Pupil Student');

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();

//****************************************************************************************************************************************************************************************
//Bonus Exercise:

//3. Consider the following class:

class Cook {
	prepare = (food1, food2, food3) => {
		console.log('The cook is cooking ' + food1, food2, food3);
	};

	prepare() {
		console.log('The cook is cooking');
	}

	explain = () => {
		console.log(
			'I changed the prepare function into an arrow function and the other prepare function into a normal function so that the arrow function would rank higher on the functions to be run.'
		);
	};
}

const cook = new Cook();

cook.prepare('turkey', 'salami', 'pizza');

cook.explain();

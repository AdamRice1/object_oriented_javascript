//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

class WhyClass {
	constructor() {}
	property =
		'Class is a good feature of Javascript. Classes allow you to design your code to be reusable and to function like real life things. Nouns and verbs.';
	explain() {
		console.log(this.property);
	}
	pieces() {
		console.log('constructor function, new keyword, . notation, methods.');
	}
}

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */

//your code here...
class Animal {
	constructor(name, size, color) {
        (this.name = name), (this.size = size), (this.color = color);
    }
    call(){
        console.log('caw caw I am a ' + this.name)
    }
    fly(){
        console.log('my shadow is ' + this.size)
    }
}
Eagle = new Animal('Eagle', 'large', 'brown')
Toucan = new Animal('Toucan', 'medium', 'orange')
Hoatzin = new Animal('Hoatzin', 'large', 'black')
Vulture = new Animal('Vulture', 'x-large', 'dark')
Macaw = new Animal('Macaw', 'medium-large', 'blue')
Owl = new Animal('Owl', 'medium-small', 'white')


/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
 */

class Shape {
	constructor(name, sides, base, height, radius) {
		(this.name = name),
			(this.sides = sides),
			(this.base = base),
			(this.height = height);
	}
	calcArea() {
		if ((this.sides.length == 3)) {
			let area = (this.base * this.height) / 2;
			console.log(`${this.name}'s area is ${area}`);
		}
		if ((this.sides.length == 4)) {
			let area = this.base * this.height;
			console.log(`${this.name}'s area is ${area}`);
		}
		if ((this.sides.length == 1)) {
			let area = (Math.PI * this.radius ** 2).toFixed(2);
			console.log(`${this.name}'s area is ${area}`);
        }
        // This is the formula for a pentagon
        if((this.sides.length == 5)) {
            let area = (Math.sqrt(5(5+2*(Math.sqrt(5)))*sides[0]**2)/4)
            console.log(`${this.name}'s area is ${area}`);
        }
        // This is the formula for a hexagon
        if((this.sides.length == 6)){
            let area = ((3 * Math.sqrt(3))/2) * sides[i]**2
            console.log(`${this.name}'s area is ${area}`);
        }
        // This is the formula for a octagon
        if((this.sides.length == 8)){
            let area = (2*(1+ Math.sqrt(2))*sides[i]**2)
            console.log(`${this.name}'s area is ${area}`);
        }
	}
	calcHeight() {
		if ((this.sides == 3)) {
			this.height = Math.sqrt((this.sides[0]**2) + (this.sides[0]**2))
		}}
	calcPerimeter() {
		if ((this.sides.length == 1)) {
			let perimeter = (2 * Math.PI * this.radius).toFixed(2);
			console.log(
				`This is the perimeter of the ${this.name}: ${perimeter}`
			);
		} else {
			let perimeter = 0;
			for (var i = 0; i < this.sides.length; i++) {
				perimeter = perimeter + sides[i];
			}
			console.log(
				`This is the perimeter of the ${this.name}: ${perimeter}`
			);
		}
    }
}
rect = new Shape('rectangle', [2,5,5,2], 2,5, null)
rect = new Shape('triangle', [4,7,7] 4,7, null)
rect = new Shape('rectangle', 1, null, null, 5)

const triangle = {
	name: 'triangle',
	sides: [4, 7, 7], //lengths of each side
	base: null,
	height: null, //determine this height using basic geometry.  You may need to research this one.
	calcArea: function() {
		console.log(
			`${this.name}'s area is calculated to be : ${0.5 *
				this.base *
				this.height}`
		);
	},
	calcPerimeter: function() {
		console.log(
			`${this.name}'s perimeter is calculated to be : ${this.base +
				(this.sides[1] + this.sides[2])}`
		);
	}
};

triangle.base = triangle.sides[0]; //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
	name: 'rectangle',
	sides: 4,
	length: 2,
	width: 5,
	calcArea: function() {
		console.log(
			`${this.name}'s area is calculated to be : ${this.length *
				this.width}`
		);
	},
	calcPerimeter: function() {
		console.log(
			`${this.name}'s perimeter is calculated to be : ${2 * this.length +
				2 * this.width}`
		);
	}
};

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
	name: 'circle',
	sides: 1,
	radius: 5,
	calcArea: function() {
		console.log(
			`${this.name}'s area is calculated to be : ${(
				Math.PI *
				this.radius ** 2
			).toFixed(2)}`
		);
	},
	calcCircumference: function() {
		console.log(
			`${this.name}'s circumference is calculated to be : ${(
				2 *
				Math.PI *
				this.radius
			).toFixed(2)}`
		);
	}
};

console.log(circle);
circle.calcCircumference();
circle.calcArea();

/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

*/

class Earth {
	name;
	planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

	constructor(name, num) {
		this.name = name;
		this.planetNum = num;
	}
}

const earth = new Earth('earth', 3);
console.log(earth);

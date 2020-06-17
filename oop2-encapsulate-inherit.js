// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

//     //your code here...

class Books {
	#author = '';
	#publisher = '';
	constructor(author, publisher) {
		this._author = author;
		this._publisher = publisher;
	}
	read() {
		return this.author, this.publisher;
	}
	rewrite(author) {
		this.author = author;
		return this.author;
	}
}

class Author {
	#books = [];
	#name = '';
	constructor(books, name) {
		this._name = name;
		this._books = books;
	}
	write() {
		return this.name, this.books;
	}
	add(title) {
		this.books.push(title);
		return this.books;
	}
	rename(name) {
		this.name = name;
	}
}

class Publisher {
	#authors = [];
	#books = [];
	constructor(authors, books) {
		this._authors = authors;
		this._books = books;
	}
	newAuthor(name, book) {
		this._authors.push(name);
		this._books.push(books);
		return this.authors, this.books;
	}
}

class Review {
	#rating = '';
	#user = '';
	constructor(rating, user) {
		this._rating = rating;
		this._user = user;
	}
	rate(stars) {
		this.rating = stars;
		return this.rating;
	}
	review() {
		return this.rating, this.user;
	}
}

// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a company name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.

//     //your code here...
class Umbrella {
	#Stock = 'SMP';
	#MarketPrice = 500;
	constructor(parent) {
		this.parent = parent;
	}
	title() {
		return `This is our stock ticker: ${this.Stock}`;
	}
	sayName() {
		return `This is the parent company's name: ${this.parent}`;
	}
}
class Company extends Umbrella {
	constructor(employees, parent, comp) {
		super(parent);
		(this.comp = comp), (this.employees = employees);
	}
	whatWeDo = 'We make cars for people.';
	cost = 'We will over charge you!';
	SayCompany() {
		return `We are owned by ${this.parent}`;
	}
	SayCost() {
		return this.cost;
	}
}
class Site extends Company {
	constructor(location, comp, employees, parent) {
		super(comp, employees, parent);
		this.location = location;
	}
	thiscity = 'We love this city:';
	wherewework = 'We work in:';
	ourcity() {
		return this.wherewework, this.location;
	}
	ourcomp() {
		console.log(this.comp + 'or' + this.parent);
	}
}
class Employee extends Site {
	constructor(name, title, salary, location, comp, empolyees, parent) {
		super(location, comp, empolyees, parent);
		(this.name = name), (this.title = title), (this.salary = salary);
	}
	love = 'I love working for this place';
	work = 'work work work';

	complain() {
		return 'my boss at' + this.parent + 'sucks';
	}
	explain() {
		return (
			'I work at' +
			this.comp +
			'which is under' +
			this.parent +
			'doing' +
			this.title
		);
	}
}

GM = new Umbrella('GM');
Dodge = new Company(300, GM, 'Dodge');
Chevy = new Company(300, GM, 'Chevy');
Cadillac = new Company(300, GM, 'Caddie');
Dallas = new Site('Dallas', Chevy, 100, GM);
Denver = new Site('Denver', Chevy, 100, GM);
Austin = new Site('Austin', Chevy, 100, GM);
Dallas = new Site('Dallas', Dodge, 100, GM);
Denver = new Site('Denver', Dodge, 100, GM);
Austin = new Site('Austin', Dodge, 100, GM);
Dallas = new Site('Dallas', Cadillac, 100, GM);
Denver = new Site('Denver', Cadillac, 100, GM);
Austin = new Site('Austin', Cadillac, 100, GM);

CEO = new Employee('Adam', 'CEO', 10000000, Denver, 500, Chevy.comp, GM.parent);
Manager = new Employee('Copper', 'Manager', 10, Denver, Chevy.comp, GM.parent);
Secretary = new Employee(
	'Mattie',
	'Secretary',
	3,
	Denver,
	Chevy.comp,
	GM.parent
);
Engineer = new Employee(
	'Carley',
	'Engineer',
	5,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);
Engineer = new Employee(
	'Cody',
	'Engineer',
	6,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);
Financial_Officer = new Employee(
	'Caleb',
	'CFO',
	1,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);
Janitor = new Employee(
	'Nolan',
	'Janitor',
	2,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);
Marketer = new Employee(
	'Seth',
	'Marketer',
	1,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);
HR = new Employee('Emma', 'HR', 3, Denver, 500, Chevy.comp, GM.parent);
Lawyer = new Employee(
	'Steve',
	'Lawyer',
	5000,
	Denver,
	500,
	Chevy.comp,
	GM.parent
);

CEO.explain();

/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/

//your code here...

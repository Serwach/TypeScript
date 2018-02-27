interface IPerson {
	getFullName(): string;
}

class Person implements IPerson {
	constructor(private firstName, private lastName, private age) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}

	getFullName(): string {
		return this.firstName + " " + this.lastName; 
	}

	protected getAge(): number {
		return this.age;
	}
}

let myPerson: Person = new Person("Mat", "Ser", 23);
console.log(myPerson.getFullName());

class Employee extends Person {
	constructor(private id: number, firstName: string, lastName: string, age: number) {
		super(firstName, lastName, age);
	}

	getAge(): number {
		return super.getAge();
	}

	getFullName(): string {
		return "Employee " + super.getFullName();
	}
}

let myManager: Person = new Employee(1, "Bar", "Jar", 33);
console.log(myManager.getFullName());
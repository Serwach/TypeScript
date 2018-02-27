let myBoolean: boolean;

myBoolean = true; //undefined, null

let myString: string;

myString = "Ser";

myString = function(){ return "Seeer"; }();

let myNumber: number;

myNumber = 10;
myNumber = 0x354;
myNumber = 0o34;
myNumber = 0b01001;

function log(): number {
	myNumber = 8;
	console.log(myNumber);
	return myNumber;
}

myNumber = log();

let i: number;

let myArray: Array<number | string | boolean> = [1, 2, 3, 4, "Ser", true];
//let myArray1: [number | string] = [1, 2, 3, 4];
//let myArray2: (number, string)[] = [1, 2, 3, 4];

for(i = 0; i < 6; i++)
	console.log(myArray[i]);

let myAny: any;

myAny = true;
myAny = "Ser";
myAny = ["a", "b"];

console.log(myAny);

enum Day {
	MONDAY,
	TUESDAY,
	WEDNESDAY
}

let today: Day = Day.TUESDAY;

console.log(today);

let myNull: null = null;
myNull = undefined;

let myUndefined: undefined = null;
myUndefined = undefined;

//myUndefined = true;

let myTuple: [string, number, boolean] = ['ser1', 1, true, 'ser2', 2];
myTuple = ['ser3', 3, true, true, 4, 'ser4'];
let myNumbersArray: number[] = [1, 2, 3];
let myNumbersArray2: number[] = [...myNumbersArray, 4, 5, 6];

console.log(myNumbersArray2);

let userName: any = { firstName: "Ser", lastName: "SER" };
let userDetails: any = { mobile: 123123123, ...userName };

console.log("firstName " + userDetails.firstName + " lastName " + userDetails.lastName + " mobile " 
	+ userDetails.mobile);

console.log("firstName ${userDetails.firstName} lastName ${userDetails.lastName} mobile ${userDetails.mobile}");

function sum(a?, b?, c?): number {
	return a + b + c;
}

console.log(sum(...myNumbersArray));

let { firstName } = userName;

console.log('${firstName}');

let [a, b, c] =  myNumbersArray;
console.log(a + " " + b + " " + c);

let [x, y, ...z] = myNumbersArray2;

console.log(x + " " + y + " " + z);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var myNumbersArray = [1, 2, 3];
var myNumbersArray2 = myNumbersArray.concat([4, 5, 6]);
console.log(myNumbersArray2);
var userName = { firstName: "Ser", lastName: "SER" };
var userDetails = __assign({ mobile: 123123123 }, userName);
console.log("firstName " + userDetails.firstName + " lastName " + userDetails.lastName + " mobile "
    + userDetails.mobile);
console.log("firstName ${userDetails.firstName} lastName ${userDetails.lastName} mobile ${userDetails.mobile}");
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum.apply(void 0, myNumbersArray));
var firstName = userName.firstName;
console.log('${firstName}');
var a = myNumbersArray[0], b = myNumbersArray[1], c = myNumbersArray[2];
console.log(a + " " + b + " " + c);
var x = myNumbersArray2[0], y = myNumbersArray2[1], z = myNumbersArray2.slice(2);
console.log(x + " " + y + " " + z);

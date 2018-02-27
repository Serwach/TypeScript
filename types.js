var myBoolean;
myBoolean = true; //undefined, null
var myString;
myString = "Ser";
myString = function () { return "Seeer"; }();
var myNumber;
myNumber = 10;
myNumber = 0x354;
myNumber = 28;
myNumber = 9;
function log() {
    myNumber = 8;
    console.log(myNumber);
    return myNumber;
}
myNumber = log();
var i;
var myArray = [1, 2, 3, 4, "Ser", true];
//let myArray1: [number | string] = [1, 2, 3, 4];
//let myArray2: (number, string)[] = [1, 2, 3, 4];
for (i = 0; i < 6; i++)
    console.log(myArray[i]);
var myAny;
myAny = true;
myAny = "Ser";
myAny = ["a", "b"];
console.log(myAny);
var Day;
(function (Day) {
    Day[Day["MONDAY"] = 0] = "MONDAY";
    Day[Day["TUESDAY"] = 1] = "TUESDAY";
    Day[Day["WEDNESDAY"] = 2] = "WEDNESDAY";
})(Day || (Day = {}));
var today = Day.TUESDAY;
console.log(today);
var myNull = null;
myNull = undefined;
var myUndefined = null;
myUndefined = undefined;
//myUndefined = true;
var myTuple = ['ser1', 1, true, 'ser2', 2];
myTuple = ['ser3', 3, true, true, 4, 'ser4'];

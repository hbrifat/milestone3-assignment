//Calculation for feet to mile

function feetToMile(feet) {
  var mile = feet * 0.000189394;
  return mile;
} 

var myInputInFeet = 10000;
var resultInMile = feetToMile(myInputInFeet);
console.log(myInputInFeet, "feet is equal to", resultInMile, "mile");





//Calculation for amount of wood needed

function woodCalculator(chair, table, bed) {
  var woodForChair = chair * 1;
  var woodForTable = table * 3;
  var woodForBed = bed * 5;
  var totalWoodNeeded = woodForChair + woodForTable + woodForBed;

  return totalWoodNeeded;
}


var chairNeeded = 12;
var tableNeeded = 4;
var bedNeeded = 3;
var totalWoodNeeded = woodCalculator(chairNeeded, tableNeeded, bedNeeded);
console.log("Total amount of wood needed: ", totalWoodNeeded, "cubic feet.");





//Calculation for amount of brick needed

function brickCalculator(floor) {
  var brickNeeded;
  var brickPerFeet = 1000;

  if (floor > 0 && floor <= 10) {
    brickNeeded = floor * 15 * brickPerFeet;
  }
  else if (floor >= 11 && floor <= 20) {
    var firstStage = 10 * 15 * brickPerFeet;
    var secondStage = (floor - 10) * 12 * brickPerFeet;
    brickNeeded = firstStage + secondStage;
  }
  else if (floor >= 21) {
    var firstStage = 10 * 15 * brickPerFeet;
    var secondStage = 10 * 12 * brickPerFeet;
    var thirdStage = (floor - 20) * 10 * brickPerFeet;
    brickNeeded = firstStage + secondStage + thirdStage;
  }
  return brickNeeded;
}



var floorOfBuilding = 45;
var brickNeeded = brickCalculator(floorOfBuilding);
console.log("Total brick needed for this building: ", brickNeeded, "pieces.");





//Calculation for finding out a name with tiny size

function tinyFriend(array) {
  var smallestName = array[0];
  for (var i=0; i<array.length; i++) {
    var element = array[i];
    if (element.length < smallestName.length) {
      smallestName = element;
    }
  }
  return smallestName;
}


var friendList = ["Jhankar", "Mahboob", "Hossain", "Rifat", "Razu", "Hb", "Apu", "Arafat"];
var nameWithTinySpelling = tinyFriend (friendList);
console.log("The smallest name spelling is: ", nameWithTinySpelling);

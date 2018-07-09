// FASE1-------------------------------------------

// class Rockets {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }
// }


// var rocket1 = new Rockets(" 32WESSDS", 3);
// var rocket2 = new Rockets(" LDSFJA32", 6);

// console.log(rocket1);
// console.log(rocket2);

// var rocketName1 = rocket1.name;
// var rocketName2 = rocket2.name;
// var rocketpropeller1 = rocket1.power;
// var rocketpropeller2 = rocket2.power;

// document.querySelector("#nameR1").innerHTML = rocketName1;
// document.querySelector("#nameR2").innerHTML = rocketName2;
// document.querySelector("#powerR1").innerHTML = rocketpropeller1;
// document.querySelector("#powerR2").innerHTML = rocketpropeller2;


// FASE2-------------------------------------------
// El primer coet tindrà tres propulsors (potència: 10,30,80) 
// i el segon sis propulsors (potència: 30,40,50,50,30,10). 

// var name = String;
// var power = [];

// class Rockets {
//     constructor(name, power) {
//         this.name = name;
//         this.power = power;
//     }
// }


// var rocket1 = new Rockets(" 32WESSDS", [10, 30, 80]);
// var rocket2 = new Rockets(" LDSFJA32", [30, 40, 50, 50, 30, 10]);

// console.log(rocket1);
// console.log(rocket2);


//FASE 3--------------------------------------------
// var name = String;
// var speed = [];
// var power = [];

// class Rockets {
//     constructor(name, power, speed) {
//         this.name = name;
//         this.power = power;
//         this.speed = speed;
//         this.accelerate = function(power, speed) {
//             var power = [];
//             var speed = [];
//             var resultado = [];
//             for (var i=0; i <speed.length; i++) {
//                 if (speed[i] < power[i]){
//                     speed += speed[i]+10
//                 }

//             }

//         };
//         this.decelerate = function(power, speed) {

//         };
//     }
// }


// var rocket1 = new Rockets(" 32WESSDS", [10, 30, 80], [0, 0, 0]);
// accelerate([10, 30, 80], [0, 0, 0]);
// var rocket2 = new Rockets(" LDSFJA32", [30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0]);
// accelerate([30, 40, 50, 50, 30, 10], [0, 0, 0, 0, 0, 0]);

// console.log(rocket1);
// console.log(rocket2);
// console.log(resultado);



var power = [10, 30, 80];
var speed = [0, 0, 0];
var accelerationLevel = 10;
// var iterationLimit = speed.length;
var i = 0;
// var newSpeed1 = 0;
// var newSpeed2 = 0;
// var newSpeed3 = 0;

// function accelerate() {

//     while (newSpeed1 < power[0]) {
//         newSpeed1 += accelerationLevel;
//         speed[0] = newSpeed1;
//     }
//     while (newSpeed2 < power[1]) {
//         newSpeed2 += accelerationLevel;
//         speed[1] = newSpeed2;
//     }
//     while (newSpeed3 < power[2]) {
//         newSpeed3 += accelerationLevel;
//         speed[2] = newSpeed3;
//     }
// }

// accelerate();

speed.forEach(element => {
    while (element.valueOf < power[i]) {
        newSpeed += accelerationLevel;
        element = newSpeed;
        i++;
    }

});



// function accelerate() {
//     for (var i = 0; i < iterationLimit; i++) {
//         if (newSpeed < power[i]) {
//             newSpeed += accelerationLevel;
//             speed[i] = newSpeed;
//         } else {
//             continue;
//         }
//     }
// for (var i = 0; i < iterationLimit; i++) {
//     if (newSpeed < power[i]) {
//         newSpeed += accelerationLevel;
//         speed[i] = newSpeed;
//     } else {
//         continue;
//     }
// }



// if (newSpeed <= power[i]) {
//     newSpeed += accelerationLevel;
//     speed[i] = newSpeed;
//     i++;
//     if (i = iterationLimit) {
//         while (iterationLimit >= 0) {
//             if (newSpeed <= power[i]) {
//                 newSpeed += accelerationLevel;
//                 speed[i] = newSpeed;
//                 i--;
//             } else {
//                 break;
//             }
//         }
//     } else {
//         break;
//     }


// var currentSpeed = speed.reduce(function(result, item) {
//     return result + item;
// }, 0);



console.log(speed);
// console.log(currentSpeed);
// console.log(iterationLimit);
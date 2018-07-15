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
var name = String;
var prop = [];
var power = 0;

class Propellers {
    constructor(maxPower, currentPower) {
        this.maxPower = maxPower;
        this.currentPower = 0;
    }
}

class Rockets {
    constructor(name, prop, propNumber) {
        this.name = name;
        var tmpProp = [];
        for (var i = 0; i < prop.length; i++) {
            // console.log(prop[i]);
            var propeller = new Propellers(prop[i]);
            tmpProp.push(propeller);
        }
        this.prop = tmpProp;
        this.arrayProp = prop;
        this.propNumber = prop.length;
        this.speed = 0;
        this.computeSpeed = function() {
            var tempSpeed = 0;
            for (var i = 0; i < this.prop.length; i++) {
                tempSpeed += this.prop[i].currentPower;
            }
            // console.log(tempSpeed);
            this.speed = tempSpeed;
        }
        this.accelerate = function() {
            for (var i = 0; i < this.prop.length; i++) {
                if (this.prop[i].currentPower < this.prop[i].maxPower) {
                    this.prop[i].currentPower += 10
                } else;
                continue;
            }
            this.computeSpeed();
        }
        this.decelerate = function() {
            for (var i = 0; i < this.prop.length; i++) {
                if (this.prop[i].currentPower > 0) {
                    this.prop[i].currentPower -= 10
                        // console.log(prop[i]);
                } else;
                continue;
            }
            this.computeSpeed();
        }
    }
}
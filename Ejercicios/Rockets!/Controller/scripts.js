var rocket1 = new Rockets(" 32WESSDS", [10, 30, 80]);
console.log(rocket1.speed);

function accelerate1() {
    for (var i = 0; i < 5; i++) {
        rocket1.accelerate();
        console.log(rocket1.speed);

    }
}
accelerate1();
console.log(rocket1.speed);

function decelerate1() {
    for (var i = 0; i < 2; i++) {
        rocket1.decelerate();
        console.log(rocket1.speed);
    }
}
decelerate1();


var rocket2 = new Rockets(" LDSFJA32", [30, 40, 50, 50, 30, 10]);

// function accelerate2() {
//     for (var i = 0; i < 1; i++) {
//         rocket2.accelerate();
//     }
// }
// accelerate2();

// function break2() {
//     for (var i = 0; i < 1; i++) {
//         rocket2.decelerate();
//     }
// }
// break2();


// Document ready presentation--------------------------
function followAssitant() {
    $(".typewriter>h3").html("<h3>Today I'll be your assitant,</h3>");

};

function followName() {
    $(".typewriter>h3>h3").html("<h3>please select a rocket...</h3>");
    // $(".typewriter>h3>h3>h3").removeClass(".typewriter");
};

function blink() {
    $(".typewriter>h3>h3>h3").toggleClass("blinking");
};

$(document).ready(function Time() {
    setTimeout(followAssitant, 5000);
    setTimeout(followName, 10000);
    setTimeout(blink, 15000);
});

function explainFalcon9() {
    $("#typewriter").removeClass("blinking");
    $("#typewriter").addClass("typewriter");
    $("#typewriter").html("<h3>Nice! You've chosen my beloved FALCON 9</h3>");
    setTimeout(writeMore, 3500);

    function writeMore() {
        $("#typewriter").append("<h3>designed to be reliable, safe and reusable.</h3>");
    }
}

function explainFalconHeavy() {
    $("#typewriter").removeClass("blinking");
    $("#typewriter").addClass("typewriter");
    $("#typewriter").html("<h3>Yoy've chosen the FALCON HEAVY!</h3>");
    setTimeout(writeMore, 3500);

    function writeMore() {
        $("#typewriter").append("<h3>This is our most powerfull rocket...</h3>");
    }
}


$("#Falcon9").click(explainFalcon9);
$("#FalconHeavy").click(explainFalconHeavy);

$(document).keydown(function(e) {
    //find out which key was pressed
    switch (e.keyCode) {
        case 65:
            explainFalcon9();
            break; // a
        case 66:
            explainFalconHeavy();
            break; // b
    }
});

function paintPropellers1() {
    for (var i = 0; i < rocket1.propNumber; i++) {
        var x = document.createElement("UL");
        x.setAttribute("id", "propellerIcon1");
        $("#propellersR1").append(x);
        var y = document.createElement("LI");
        var t = document.createElement("IMG");
        t.setAttribute("src", "../View/propeller.jpg");
        t.setAttribute("width", "35");
        // t.setAttribute("height", "228");
        // t.setAttribute("alt", "The Pulpit Rock");
        y.appendChild(t);
        document.getElementById("propellerIcon1").appendChild(y);
    }
}
paintPropellers1();


function paintPropellers2() {
    for (var i = 0; i < rocket2.propNumber; i++) {
        var x = document.createElement("UL");
        x.setAttribute("id", "propellerIcon2");
        $("#propellersR2").append(x);
        var y = document.createElement("LI");
        var t = document.createElement("IMG");
        t.setAttribute("src", "../View/propeller.jpg");
        t.setAttribute("width", "35");
        // t.setAttribute("height", "228");
        // t.setAttribute("alt", "The Pulpit Rock");
        y.appendChild(t);
        document.getElementById("propellerIcon2").appendChild(y);
    }
}
paintPropellers2();


var rocketPropellers1 = rocket1.propNumber;
var rocketPropellers2 = rocket2.propNumber;

var rocketName1 = rocket1.name;
var rocketName2 = rocket2.name;

var rocketPower1 = rocket1.arrayProp;
var rocketPower2 = rocket2.arrayProp;

var rocketSpeed1 = rocket1.speed;
var rocketSpeed2 = rocket2.speed;



document.querySelector("#nameR1").innerHTML = rocketName1;
document.querySelector("#nameR2").innerHTML = rocketName2;
// document.querySelector("#propellersR1").innerHTML = rocketPropellers1;
// document.querySelector("#propellersR2").innerHTML = rocketPropellers2;
document.querySelector("#powerR1").innerHTML = rocketPower1;
document.querySelector("#powerR2").innerHTML = rocketPower2;
document.querySelector("#speedR1").innerHTML = rocketSpeed1;
document.querySelector("#speedR2").innerHTML = rocketSpeed2;



// multiplica por la cifra que figura en pantalla
// <script>
// var numbers = [65, 44, 12, 4];

// function multiplyArrayElement(num) {
//     return num * document.getElementById("multiplyWith").value;
// }

//     document.getElementById("demo").innerHTML = numbers.map(multiplyArrayElement);
// }
// </script>

// FASE 3:

// Tots els propulsors tindran una potència actual que començarà amb 0. 

// El coet tindrà dos mètodes, accelerar o frenar i  augmentarà o es reduirà de 10 en 10 la potencia del propulsor.  

// El coet tindrà una velocitat actual que és la suma de totes les potències dels seus propulsors.

// Modifiquem en el main anterior: 

// Creem dos coets amb els codis “32WESSDS” I “LDSFJA32”. El primer coet tindrà tres propulsors (potència: 10,30,80) 
// i el segon sis propulsors (potència: 30,40,50,50,30,10). 

// Mostrar a pantalla el codi dels coets, el número de propulsors que té i la potència màxima de cada propulsor.

// Mostrar a pantalla la velocitat actual dels coets

// Accelerar amb els coets tres cops

// Mostrar a pantalla la velocitat actual

// Frenar cinc cops amb el primer coet (“32WESSDS”) i accelerar set amb el segon coet.

// Mostrar a pantalla la velocitat actual

// Accelerar 15 cops amb els dos coets.

// Mostrar a pantalla la velocitat actual
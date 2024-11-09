// ex 1
document.getElementById('sum').innerHTML = 5 + 6 ;

// ex-2
document.write( 5 + 6 );

// ex-3
alert( 5 + 6);

// ex 4
function printPage(){
    window.print('prp'); 
}
// ex 5
let a, b, c;
a = 10;
b = 5;
c = 10;
d = a + b + c ;
ap = a + b ;
document.getElementById('toop').innerHTML = " the value of "+ d + "." ;

// ex 6
document.getElementById('ab').innerHTML = " total " + ap + ".";

// ex 7
function varDeclare(){
    var a = 1;
    var b = 2;
    var c = 3;
    var d = 4;
    var e = 6;
    var f = 7;
    var g = 8;
    var h = 9;
    var i = a + b + c + d + e + f + g + h;
    document.getElementById('vcal').innerHTML = " " + i;
}
// ex 8
let x = 5;
let y = 10;
let z = x + y;
function letDe(){
    document.getElementById('lecal').innerHTML = "" + z;
}
// ex 9
function imgChangeo(){
    document.getElementById('image').src = "img/img.jpg";
   
}
function imgChanget(){
    document.getElementById('image').src = "img/img2.jpg";
}
// ex 10
function colorChange(){
    document.getElementById('c_change').style .color ="red";
}
// ex 11
function date(){
    document.getElementById('time').innerHTML = Date();
}

// ex 12
const car = ["toyota","nosimon", "royel anfiled"];
function carName(){
    document.getElementById('cnst').innerHTML =  car;
}

// ex 13
const gari = ["toyota","nosimon", "royel anfiled"];
gari[0] = "honda";
function carChange(){
    document.getElementById('cnstcng').innerHTML = gari;
}

// ex 14
const sawari = ["toyota","nosimon", "royel anfiled"];
sawari.push("tomtom");
function sawariChange(){
    document.getElementById('cnsadd').innerHTML = sawari;
}

// ex 15
function fontChange(){
    document.getElementById('font').style .fontSize = "30px";
}

// ex 16
let g = 5;
let h = 5;
let ab = g * h;
document.getElementById('arith').innerHTML =  ab;

// ex 17
let pric1 = 50;
let price2 = 10;
let result = pric1 - price2;
document.getElementById('minus').innerHTML = result;

// ex 18
let dd = 100;
let db = 10;
let end = dd / db;
function devide(){
    document.getElementById('divide').innerHTML = end;
}
// ex 19 20
let first = 500;
let second = 5;
let third = first % second;
function percentage(){
    document.getElementById('perc').innerHTML = third;
}
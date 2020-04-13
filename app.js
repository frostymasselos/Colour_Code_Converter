function changeRange(){
    //get R,G,B valyes and convert string into integer
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    //generate color. e
    var color = "#" + hex(r) + hex(g) + hex(b);

    // Change background color and text. 
    document.body.style.backgroundColor = color;

    document.getElementById("hex-label").innerHTML = color;
    document.getElementById("r-label").innerHTML = r;
    document.getElementById("g-label").innerHTML = g;
    document.getElementById("b-label").innerHTML = b;

    if (r < 100 && g < 100 && b < 100 ){
        document.getElementById("container").style.color = white;
    } else {
        document.getElementById("container").style.color = black;
    }

}

function hex(v) {
    //get hexadeicmal numbers.
    var hex = v.toString(16);
    if (v < 16) {
        hex = "0" + hex;
     }
     return hex;
}

function formHToRGB(){
    var transformValue = document.getElementById('calcValue').value;
    c = transformValue.slice(1,3);
    d = transformValue.slice(3,5);
    e = transformValue.slice(5);
    document.getElementById('displayValue').value = "RBA("+parseInt(c,16)+","+parseInt(d,16)+","+parseInt(e,16)+")";
}


// function formRToHex(){
//     var transformValue = Number(document.getElementById('rgbValue').value);
//     // c = transformValue.slice(1,3);
//     // d = transformValue.slice(3,5);
//     // e = transformValue.slice(5);
//     document.getElementById('displayHexValue').value = parseInt(transformValue).toString(16);
// }


var redValEl = document.getElementById('redVal');
var greenValEl = document.getElementById('greenVal');
var blueValEl = document.getElementById('blueVal');
var hexValue = document.getElementById('displayHexValue');

function formRToHex(){
    var red = redValEl.value;
    var green = greenValEl.value;
    var blue = blueValEl.value;

    var hexColorCode = '#' + getHexa(red) + getHexa(green) + getHexa(blue);
    hexValue.value = hexColorCode;
}

function getHexa(value){
    var hex = parseInt(value).toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}
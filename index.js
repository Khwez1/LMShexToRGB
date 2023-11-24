let output1 = document.getElementById('red');
let output2 = document.getElementById('green');
let output3 = document.getElementById('blue');

let btn = document.getElementById('calc');

function hexToRgb() {
    let hexValue = document.getElementById('hex').value
    
    let red = parseInt(hexValue.substring(0, 2), 16);
    let green = parseInt(hexValue.substring(2, 4), 16);
    let blue = parseInt(hexValue.substring(4, 6), 16);

    output1.value = red
    output2.value = green
    output3.value = blue
}

btn.addEventListener('click', hexToRgb);

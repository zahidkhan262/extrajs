// RGB to Hex
let Text = document.querySelector('p');
const rgbTohex = (r, g, b) =>
    "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);


// console.log(rgbTohex(66, 135, 245));
let color = rgbTohex(66, 135, 210);

Text.style.color = color;
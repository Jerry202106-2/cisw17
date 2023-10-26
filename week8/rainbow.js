
//rainbow.js
//pick a random color from a list of colors

const colors =["red","orange","yellow","green","blue","indigo","violet"];

let color_choice;

//pick a random color
let x = Math.floor(Math.random()*7);

color_choice=colors[x];

console.log(color_choice);
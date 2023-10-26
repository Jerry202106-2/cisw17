//JS file for rainbow.html

const colors =["red","orange","yellow","green","blue","indigo","violet"];

let color_choice;

//pick a random color
function changeBackground()
{
    let x = Math.floor(Math.random()*colors.length);

    color_choice=colors[x];
    
    document.body.style.backgroundColor=color_choice;
    
    console.log("The color choice is:"+ color_choice);
}

//declare a variable for the button

const button= document.getElementById("button");


//add an even listener to the button
button.addEventListener("click",changeBackground);
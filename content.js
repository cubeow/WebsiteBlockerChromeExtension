//Clears out all functioning HTML from webpage
document.body.innerHTML = '';

//Loops multiple times to cover the entire screen with repeating text
for (i=0; i<29; i++)
{
    var para = document.createElement("h1");
    var node = document.createTextNode("[insert repeating text to scold the user for trying to waste time]");
    para.appendChild(node);
    document.body.appendChild(para);
}

// Changes the background color to red
document.body.style.backgroundColor = "red";

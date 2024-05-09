document.body.innerHTML = '';

// Append the node to the body
for (i=0; i<29; i++)
{
    var para = document.createElement("h1");
    var node = document.createTextNode("[insert repeating text to scold the user for trying to waste time]");
    para.appendChild(node);
    document.body.appendChild(para);
}

// Change the background color of the body to red
document.body.style.backgroundColor = "red";

// Log "sup" to the console

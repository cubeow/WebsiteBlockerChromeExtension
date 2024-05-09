document.body.innerHTML = '';

// Append the node to the body
for (i=0; i<29; i++)
{
    var para = document.createElement("h1");
    var node = document.createTextNode("HAHAHAHA YOU ARE BLOCKED NOW GO BACK TO WORK YOU STUPID BLOKE HAHAHAHA YOU ARE BLOCKED NOW GO BACK TO WORK YOU STUPID BLOKE!!!!!!!!!!!!!!!!!!");
    para.appendChild(node);
    document.body.appendChild(para);
}

// Change the background color of the body to red
document.body.style.backgroundColor = "red";

// Log "sup" to the console

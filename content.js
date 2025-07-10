chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "runFunction") {
        console.log("URL matched! Running function...");
        runYourFunction();
    }
});

function runYourFunction() {
    console.log("Function executed on matching URL!");
    console.log("New page detected!");
        document.body.innerHTML = '';

    //Loops multiple times to cover the entire screen with repeating text
    for (i=0; i<29; i++)
    {
        var para = document.createElement("h1");
        var node = document.createTextNode("YOU FRICKING IDIOT, HOW DARE YOU STOP BEING PRODUCTIVE. YOU KNOW THE RABBIT HOLE YOU ARE GETTING YORUSELF INTO SO GET BACK TO FRICKING WORK IF YOU WANT A FRICKING FUTURE");
        para.appendChild(node);
        document.body.appendChild(para);
    }

    // Changes the background color to red
    document.body.style.backgroundColor = "red";
}





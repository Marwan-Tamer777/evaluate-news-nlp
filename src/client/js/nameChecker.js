
function checkForName(inputText) {
    //checks if the string inputted matches any of the names here
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    return 1;
    }
    return 0;
}

export { checkForName }


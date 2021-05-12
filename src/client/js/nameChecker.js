
function checkForName(inputText) {
    
    const regex = /^((http|https):\/\/www\.[^\s-])/;

    if(!regex.test(inputText)){
        alert("Please input a valid url");
        return 0;
    }
    return 1;
}

export { checkForName }


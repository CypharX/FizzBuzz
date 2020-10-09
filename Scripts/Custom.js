document.getElementById('fizzBtn').addEventListener('click', function () {
    let fizz = parseInt(document.getElementById('input1').value);
    let buzz = parseInt(document.getElementById('input2').value);
    let fizzedOut = fizzThis(fizz, buzz);
    document.getElementById('output').innerHTML = fizzedOut;
});
function fizzThis(fizz, buzz) {
    let output = "";
    for (let loop = 1; loop <= 100; loop++) {        
            let fizzCheck = loop % fizz;
            let buzzCheck = loop % buzz;
            if (fizzCheck == 0 && buzzCheck == 0) {
                output += "<span class='fizzBuzz h4'>FIZZBUZZ! </span> ";
            }
            else if (fizzCheck == 0) {
                output += "<span class='fizz h5'>Fizz, </span> ";
            }
            else if (buzzCheck == 0) {
                output += "<span class='buzz h5'>Buzz, </span> ";
            }
            else {
                output += `${loop}, `;
            }
        }
    return output
}
document.getElementById('input1').addEventListener('keypress', function (evt) {
    //Creates the "char" variable and sets it equal to the character code of the 
    //pressed input
    let char = evt.which;
    //Uses the value of "char" to determine the given character using its Ascii
    // code and returning true if it's a character we want and false if it's any
    //other character.
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});
document.getElementById('input2').addEventListener('keypress', function (evt) {
    //Creates the "char" variable and sets it equal to the character code of the 
    //pressed input
    let char = evt.which;
    //Uses the value of "char" to determine the given character using its Ascii
    // code and returning true if it's a character we want and false if it's any
    //other character.
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});

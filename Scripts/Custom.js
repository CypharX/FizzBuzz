//Listens for the button click at "fizzBtn" and runs a function on click.
document.getElementById('fizzBtn').addEventListener('click', function () {
    //Creates two variables and assigns them the values from the user inputs.
    let fizzInput = parseInt(document.getElementById('input1').value);
    let buzzInput = parseInt(document.getElementById('input2').value);
    //calls "fizzThis" function with the user inputs and returns the result to "fizzedOut" variable.
    let fizzedOut = fizzThis(fizzInput, buzzInput);
    //Sends the "fizzedOut" result to the "output" id to be displayed to the user. 
    document.getElementById('output').innerHTML = fizzedOut;
});
//Declaration of the "fizzThis" function.
function fizzThis(fizz, buzz) {
    let output = "";
    //Setting a loop to run 100 times
    for (let loop = 1; loop <= 100; loop++) {        
            //Using the modulus operator to find the remainders of
            //the inputs and the loop number to determine multiples.
            let fizzCheck = loop % fizz;
            let buzzCheck = loop % buzz;
            //If else functions to check for multiples and return the
            //corresponding output.
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
    return output;
}
//Function to listen for keypresses in "input1" and ignore all non-number characters
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
//Same as above function but for "input2"
document.getElementById('input2').addEventListener('keypress', function (evt) {   
    let char = evt.which;  
    if (char >= 48 && char <= 57) {
        return true;
    }
    else {
        evt.preventDefault();
        return false;
    }
});

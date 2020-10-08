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
                output += "<span class='fizzBuzz'>FIZZBUZZ! </span> ";
            }
            else if (fizzCheck == 0) {
                output += 'Fizz, ';
            }
            else if (buzzCheck == 0) {
                output += 'Buzz, ';
            }
            else {
                output += `${loop}, `;
            }
        }
    return output
    }
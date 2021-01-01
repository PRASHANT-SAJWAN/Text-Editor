let fontSize = '20px';
let input_box = null;

window.onload = function () {
    input_box = document.getElementById('input__section');
    input_box.focus();
}

function format(command, value) {
    document.execCommand(command, false, value);    // change selected elements acc to command
    document.getElementById(command).classList.toggle('selected__highlight');   // background color to lightgray
    input_box.focus();  // put cursor on input box
}

// font change
function myFunction(event) {
    if (event.keyCode == 13) {  // if enter is pressed
        var fontSizeValue = document.getElementById('input__fontSize').value;
        if (parseInt(fontSizeValue) >= 8 && parseInt(fontSizeValue) <= 80) {
            fontSize = ((fontSizeValue === '' || fontSizeValue === undefined) ? '20' : fontSizeValue) + 'px';
            document.getElementById('input__section').style.fontSize = fontSize;    // update font size
        } else if (parseInt(fontSizeValue) < 8) {
            document.getElementById('input__fontSize').value = '8';
            document.getElementById('input__section').style.fontSize = '8px';
        } else if (parseInt(fontSizeValue) > 80) {
            document.getElementById('input__fontSize').value = '80';
            document.getElementById('input__section').style.fontSize = '80px';
        }
        input_box.focus();
    }
}
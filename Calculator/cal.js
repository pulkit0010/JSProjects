let x = document.querySelectorAll('.btns');

Array.from(x).forEach((button) => {
    button.addEventListener('click', myFunction);
});

let string = "";
function myFunction(e) {
    console.log(e.target);
    if (e.target.innerHTML == 'x') {
        string += "*"
    }
    else if (e.target.innerHTML == '=') {
        string = eval(string);
    }
    else {
        string = string + e.target.innerHTML;
    }
    document.querySelector('.disp').value = string;
}

let clear = document.getElementById('btn16');
clear.addEventListener('click', function clean() {
    string = "";
    document.querySelector('.disp').value = "";
})
document.querySelector('.disp').readOnly = true;
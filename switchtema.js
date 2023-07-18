
var inputs = document.querySelectorAll('input');

for(var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', darkTheme);
}

function darkTheme(){
    var bodyAlterar = document.body;
    bodyAlterar.classList.toggle("dark");
    bodyAlterar.classList.toggle("w3-text-grey");
    bodyAlterar.style.transition = ".25s";
}
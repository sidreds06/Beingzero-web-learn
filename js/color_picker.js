
var key = document.querySelectorAll('input');

for (let index = 0; index < key.length; index++) {
    key[index].addEventListener('input',function(){
        var red = document.getElementById("red").value;
        var green = document.getElementById("green").value;
        var blue = document.getElementById("blue").value;

        var box = document.getElementById("box");
        box.style.background = "rgb(" + red + "," + green + "," + blue + ")";
        document.getElementById("txt").innerHTML = "rgb(" + red + "," + green + "," + blue + ")";
    });
    
}

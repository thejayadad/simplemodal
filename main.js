
let modal = document.getElementById("modal");
let btn = document.getElementById("btn");
let close = document.getElementById("close");

btn.onclick = function (){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
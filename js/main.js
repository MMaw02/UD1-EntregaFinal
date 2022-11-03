let x = document.getElementById("m-navbar");
x.style.display = "none";

function show(){
    if (x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}



let success = document.getElementById("success");
let form = document.getElementById("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    success.style.display = "block";
    success.style.color = "green";
    form.reset();
} );
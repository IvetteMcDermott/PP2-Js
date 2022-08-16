let start=document.getElementById("start");
let cover=document.getElementById("cover");
let hiddenButton=document.getElementById("getPic");

start.addEventListener("click",function() {
    cover.style.visibility="hidden";
    start.style.visibility="hidden";
    /*hiddenButton.style.visibility="visible"; */

})


let buttons = document.getElementsByTagName("button")



/*
document.getElementsByTagName("input").value="";
document.getElementsByTagName("input").focus();*/

for (let clicked of buttons) {
    clicked.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "getObject") {

            getObject ()

        } else if (this.getAttribute("data-type") === "sentenceCheck") {
           
           checkSent ()

        } else {

            alert("whatever");

        }
    });
}

let numObj = Math.floor(Math.random() * 25)+1;

function getObject() {

let img=document.getElementById("picture");

if (numObj!==0){
    img.src="assets/images/shorts-green.png"}

}
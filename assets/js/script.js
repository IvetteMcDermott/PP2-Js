document.addEventListener("DOMContentLoaded", function () {
    
});
/** background audio button */
    const music=document.getElementById("music");
    const audio=document.getElementById("audio");
       
    music.addEventListener("click",function(){
       if (music.innerHTML==="🔉"){
                audio.play();
                audio.loop=true;
                audio.volume=0.06;
                music.innerHTML="🔇";}
                else {
                    audio.pause()
                    music.innerHTML="🔉"
                }            
     });

/* variabale and array with data for functions, will be assign to variables for their use */
const imgFolder="assets/images/"

let itemsInfo=[ 
    {img:1, opt1:"The socks are green.", opt2:"The pants are blue.", opt3:"The coat is yellow.", correctAnswer:"The pants are blue.",},
    {img:2, opt1:"The shoes are black.", opt2:"The socks are pink.", opt3:"The pants are green.", correctAnswer:"The pants are green.",},
    {img:3, opt1:"The t-shirt is orange.", opt2:"The pants is orange.", opt3:"The pants are orange.", correctAnswer:"The pants are orange.",},
    {img:4, opt1:"The shorts are red.", opt2:"The pants are red.", opt3:"The pants are blue.", correctAnswer:"The pants are red.",},
    {img:5, opt1:"The pants are yellow.", opt2:"The skirt is orange.", opt3:"The pants are blue.", correctAnswer:"the pants are yellow.",},
    {img:6, opt1:"The shorts are blue.", opt2:"The shorts are red", opt3:"The shorts is blue.", correctAnswer:"The shorts are blue.",},
    {img:7, opt1:"The pants are green.", opt2:"The shorts are green.", opt3:"The shorts is red.", correctAnswer:"The shorts are green.",},
    {img:8, opt1:"The shorts are blue.", opt2:"The shorts are orange.", opt3:"The shorts are black.", correctAnswer:"The shorts are orange.",},
    {img:9, opt1:"The shorts are orange.", opt2:"The shorts are red.", opt3:"The shorts is green.", correctAnswer:"The shorts are red.",},
    {img:10, opt1:"The shorts are red.", opt2:"The shorts are yellow.", opt3:"The shorts are green.", correctAnswer:"The shorts are yellow.",},
    {img:11, opt1:"The t-shirt is green.", opt2:"The skirt is blue.", opt3:"The shorts are blue.", correctAnswer:"The skirt is blue.",},
    {img:12, opt1:"The skirts are green.", opt2:"The skirt is green.", opt3:"The short is green.", correctAnswer:"The skirt is green.",},
    {img:13, opt1:"The skirt is red.", opt2:"The skirt is orange.", opt3:"The skirt is blue.", correctAnswer:"The skirt is orange.",},
    {img:14, opt1:"The pants are blue.", opt2:"The skirt is red.", opt3:"The skirt is orange.", correctAnswer:"The skirt is red.",},
    {img:15, opt1:"The skirt are orange.", opt2:"The skirt is blue.", opt3:"The skirt is yellow.", correctAnswer:"The skirt is yellow.",},
    {img:16, opt1:"The t-shirt is blue.", opt2:"The t-shirt is green.", opt3:"The t-shirt is blue", correctAnswer:"The t-shirt is blue.",},
    {img:17, opt1:"The shorts are green.", opt2:"The pants are green.", opt3:"The t-shirt is green.", correctAnswer:"The t-shirt is green.",},
    {img:18, opt1:"The skirt is orange.", opt2:"The pants are orange.", opt3:"The t-shirt is orange.", correctAnswer:"The t-shirt is orange.",},
    {img:19, opt1:"The t-shirt is orange.", opt2:"The skirt is yellow.", opt3:"The t-shirt is red.", correctAnswer:"The t-shirt is red.",},
    {img:20, opt1:"The t-shirt is orange.", opt2:"The t-shirt is red.", opt3:"The t-shirt is yellow.", correctAnswer:"The t-shirt is yellow.",},
]
let buttons = document.getElementsByTagName("button")

    for (let clicked of buttons) {
    clicked.addEventListener("click", function() {
        if (this.getAttribute("data-type")==="startButton"){
            cover.style.visibility="hidden";
            start.style.visibility="hidden"; 
        }
        else if (this.getAttribute("data-type") === "getObject") {
            
            getObject()

        } else if (this.getAttribute("data-type") === "checkSentence") {
                    
           checkSent()

        } else if (this.getAttribute("data-type") === "help"){
            document.getElementById("helpInstructions").style.visibility="visible";
        } else if (this.getAttribute("data-type") === "closeInstructions"){
            document.getElementById("helpInstructions").style.visibility="hidden";
        }
        
    })}

/* game functions  */

let numObj = Math.floor(Math.random() * itemsInfo.length)+1;

let objToUse=itemsInfo.find(({ img }) => img === numObj);

function getObject() {
    
/* assigning ramdom image */    
let img=document.getElementById("picture");
let imgFile= `${imgFolder + numObj}.png`
img.src=imgFile

/* generating answer options */

let objOpt1= objToUse[0,'opt1'];
let objOpt2= objToUse[0,'opt2'];
let objOpt3= objToUse[0,'opt3'];

document.getElementById("labOpt1").innerHTML=objOpt1
document.getElementById("labOpt2").innerHTML=objOpt2
document.getElementById("labOpt3").innerHTML=objOpt3
document.getElementById("opt1").value=objOpt1
document.getElementById("opt2").value=objOpt2
document.getElementById("opt3").value=objOpt3
}

function checkSent() {
let correctAnswer= objToUse[0,'correctAnswer'];
let displayPic=document.getElementById("result");
let audio=document.getElementById("audioAnswer");

/* query selector from Geekforgeeks*/ 
let checkRadio = document.querySelector(
        'input[name="answer"]:checked');

if (checkRadio.value === correctAnswer){
    displayPic.src="assets/images/right-answer.gif"
    audioAnswer.src="assets/audio/woohoo.mp3"
    audioAnswer.play();
    audioAnswer.loop=false;
    audioAnswer.volume=0.04; 
    rightAnswerCount();
    increaseTries();
    
} else if (checkRadio.value !== correctAnswer){
    displayPic.src="assets/images/wrong-answer.gif"
    audioAnswer.src="assets/audio/oops.mp3"
    audioAnswer.play();
    audioAnswer.loop=false;
    audioAnswer.volume=0.04;
    increaseTries();
}
}

function rightAnswerCount() {

let rightAnswerCount=parseInt(document.getElementById("correctAnswer").innerText);
document.getElementById("correctAnswer").innerText=++rightAnswerCount;
}

function increaseTries() {

let triesCount=parseInt(document.getElementById("tries").innerText);

document.getElementById("tries").innerText=++triesCount;

}

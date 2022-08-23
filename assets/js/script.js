document.addEventListener("DOMContentLoaded", function () {
});
/** background audio control button, play/pause */
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
    {img:5, opt1:"The pants are yellow.", opt2:"The skirt is orange.", opt3:"The pants are blue.", correctAnswer:"The pants are yellow.",},
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
/** click event for buttons */
let buttons = document.getElementsByTagName("button")

    for (let clicked of buttons) {
    clicked.addEventListener("click", function() {
        if (this.getAttribute("data-type")==="startButton"){
            cover.style.visibility="hidden";
            start.style.visibility="hidden"; 
            document.getElementById("helpInstructions").style.visibility="visible";
        }
        else if (this.getAttribute("data-type") === "getObject") {
            document.getElementById("getPic").style.visibility="hidden";

            getObject()
        } else if (this.getAttribute("data-type") === "checkSentence") {

            checkSent()
        } else if (this.getAttribute("data-type") === "help"){
            document.getElementById("helpInstructions").style.visibility="visible";
        } else if (this.getAttribute("data-type") === "closeInstructions"){
            document.getElementById("helpInstructions").style.visibility="hidden";
        } else if (this.getAttribute("data-type")=== "exit"){
            exit();
        }        
    })}

/* functions that generate the ramdom number and pull the object accorder to */
function ramdomNumb() {
    let numObj1 = Math.floor(Math.random() * itemsInfo.length)+1;
    return numObj1
}

function ramdom() {
    let numObj1 = Math.floor(Math.random() * itemsInfo.length)+1;
    return numObj1
}
/** display the picture and the answer options */
function getObject() {
    let objToUse=ramdom()
    let numObj=ramdomNumb()
    objToUse=itemsInfo.find(({ img }) => img === numObj);
    
/* assigning ramdom image */    
let img=document.getElementById("picture");
let imgFile= `${imgFolder + numObj}.png`
img.src=imgFile

/* pulling the varianles for answer options */
let objOpt1= objToUse[0,'opt1'];
let objOpt2= objToUse[0,'opt2'];
let objOpt3= objToUse[0,'opt3'];
let correctAnswer= objToUse[0,'correctAnswer'];
/* assigning answer options */
document.getElementById("labOpt1").innerHTML=objOpt1
document.getElementById("labOpt2").innerHTML=objOpt2
document.getElementById("labOpt3").innerHTML=objOpt3
document.getElementById("answerLabel").innerHTML=correctAnswer
document.getElementById("opt1").value=objOpt1
document.getElementById("opt2").value=objOpt2
document.getElementById("opt3").value=objOpt3
/** display the button that compare the answer selected with the correct one, when get a new picture */
document.getElementById("checkSentence").style.visibility="visible";
/** set radios to unchecked */
document.getElementById("opt1").checked=false;
document.getElementById("opt2").checked=false;
document.getElementById("opt3").checked=false;
}
/** function that check the answer selected */
function checkSent() {
    
let correctAnswer=document.getElementById("answerLabel").innerHTML
let displayPic=document.getElementById("result");
let audio=document.getElementById("audioAnswer");

/** pull the selected radio */ 
let checkRadio = document.querySelector(
        'input[name="answer"]:checked');
/** conditional that trigger actions accorder if result is right or wrong */
if (checkRadio.value === correctAnswer){
    displayPic.src="assets/images/right-answer.gif"
    audioAnswer.src="assets/audio/woohoo.mp3"
    audioAnswer.play();
    audioAnswer.loop=false;
    audioAnswer.volume=0.04; 
    rightAnswerCount();
    increaseTries();
    document.getElementById("checkSentence").style.visibility="hidden";
    document.getElementById("getPic").style.visibility="visible";

} else if (checkRadio.value !== correctAnswer){
    displayPic.src="assets/images/wrong-answer.gif"
    audioAnswer.src="assets/audio/oops.mp3"
    audioAnswer.play();
    audioAnswer.loop=false;
    audioAnswer.volume=0.04;
    increaseTries();
}
}
/** right answer count */
function rightAnswerCount() {
    
let rightAnswerCount=parseInt(document.getElementById("correctAnswer").innerText);
document.getElementById("correctAnswer").innerText=++rightAnswerCount;
    console.log("rightAnswerCount", rightAnswerCount);
}
/** tries count */
function increaseTries() {
    
let triesCount=parseInt(document.getElementById("tries").innerText);

document.getElementById("tries").innerText=++triesCount;
let gotRight=parseInt(document.getElementById("correctAnswer").innerHTML)
   /** final message about the result */ 
    if (triesCount>= 10) {
        document.getElementById("finalResultText").innerHTML=`You got ${gotRight} of ${triesCount}`;
        let finalMessage=""
        if (gotRight<=4){
            finalMessage="Good try! Keep the practice."
            document.getElementById("finalResultImg").src="assets/images/reach-sad.gif";
            document.getElementById("finalResultImg").style.visibility="visible"; 
        } else if (gotRight=5 && gotRight<=8) {
            finalMessage="Well done! Keep the good work."
            document.getElementById("finalResultImg").src="assets/images/qoobee-agapi.gif";
            document.getElementById("finalResultImg").style.visibility="visible"; 
        } else {
            finalMessage="Excellent job!"
            document.getElementById("finalResultImg").src="assets/images/party-popper-confetti.gif";
            document.getElementById("finalResultImg").style.visibility="visible";                                            

        }
        document.getElementById("finalResultMessage").innerHTML=finalMessage;
        
        document.getElementById("finalResult").style.visibility="visible";
        setTimeout("location.reload(true);",6000);
        } 
}
/** exit button */
function exit() {
    console.log("exit triggered");
    let exitYes = confirm("Do you want to exit the game?");
    if (exitYes)
        {alert("Try again soon!");
            setTimeout("location.reload(true);",1200);}
    }
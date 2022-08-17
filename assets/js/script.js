


const imgFolder="assets/images/"

/* array with data for functions, will be assign to variables for their use */
/* key img = for picture to display. This is being done generating a string with imgFolder and .png"
   keys opt1, opt2 and opt3 = answer options (to labels for input radios)
   key corrrectAnswer = to compare with the answer submitted, yet to see if the id of the input can be use instead of the string */

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
    {img:11, opt1:"The st-shirt is green.", opt2:"The skirt is blue.", opt3:"The shorts are blue.", correctAnswer:"The shorts are blue.",},
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

/* welcome div */

let start=document.getElementById("start");
let cover=document.getElementById("cover");


start.addEventListener("click",function() {
    cover.style.visibility="hidden";
    start.style.visibility="hidden";
    
})

/* buttons click event */

let buttons = document.getElementsByTagName("button")


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

/* game functions  */

let numObj = Math.floor(Math.random() * itemsInfo.length)+1;

function getObject() {

/* generating ramdom image */    
let img=document.getElementById("picture");
let imgFile= `${imgFolder + numObj}.png`
img.src=imgFile

/* generating answer options */
/*
let onPlay = itemsInfo.find(img => itemsInfo.img === numObj);
let answerOpt1=slice(onPlay[0,1]);
document.getElementById("labOpt1")=answerOpt1
*/
}

function checkSent () {

    /** need to find how to recall what input radio was selected and submited */
    /** again extract the correctAnswer from the array */

let optPick

let displayPic = document.getElementById("result")

if (optPick === correctAnswer) {
    
    displayPic.src="assets/image/right-answer.gif"

} else {

    displayPic.src="assets/image/wrong-answer.gif"

}
}
/* variables and array with data for functions, data will be assign to variables for their use */
const imgFolder = "assets/images/";
const music = document.getElementById("music");
const audio = document.getElementById("audio");
const labOpt1 = document.getElementById("labOpt1");
const labOpt2 = document.getElementById("labOpt2");
const labOpt3 = document.getElementById("labOpt3");
const answerLabel = document.getElementById("answerLabel");
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const img = document.getElementById("picture");
const getPicButton = document.getElementById("getPic");
const checkSentenceButton = document.getElementById("checkSentence");
const helpInstructions = document.getElementById("helpInstructions");

checkSentenceButton.classList.add("invisible");

let itemsInfo = [{
        opt1: "The socks are green.",
        opt2: "The pants are blue.",
        opt3: "The coat is yellow.",
        correctAnswer: "The pants are blue.",
    },
    {
        opt1: "The shoes are black.",
        opt2: "The socks are pink.",
        opt3: "The pants are green.",
        correctAnswer: "The pants are green.",
    },
    {
        opt1: "The t-shirt is orange.",
        opt2: "The pants is orange.",
        opt3: "The pants are orange.",
        correctAnswer: "The pants are orange.",
    },
    {
        opt1: "The shorts are red.",
        opt2: "The pants are red.",
        opt3: "The pants are blue.",
        correctAnswer: "The pants are red.",
    },
    {
        opt1: "The pants are yellow.",
        opt2: "The skirt is orange.",
        opt3: "The pants are blue.",
        correctAnswer: "The pants are yellow.",
    },
    {
        opt1: "The shorts are blue.",
        opt2: "The shorts are red",
        opt3: "The shorts is blue.",
        correctAnswer: "The shorts are blue.",
    },
    {
        opt1: "The pants are green.",
        opt2: "The shorts are green.",
        opt3: "The shorts is red.",
        correctAnswer: "The shorts are green.",
    },
    {
        opt1: "The shorts are blue.",
        opt2: "The shorts are orange.",
        opt3: "The shorts are black.",
        correctAnswer: "The shorts are orange.",
    },
    {
        opt1: "The shorts are orange.",
        opt2: "The shorts are red.",
        opt3: "The shorts is green.",
        correctAnswer: "The shorts are red.",
    },
    {
        opt1: "The shorts are red.",
        opt2: "The shorts are yellow.",
        opt3: "The shorts are green.",
        correctAnswer: "The shorts are yellow.",
    },
    {
        opt1: "The t-shirt is green.",
        opt2: "The skirt is blue.",
        opt3: "The shorts are blue.",
        correctAnswer: "The skirt is blue.",
    },
    {
        opt1: "The skirts are green.",
        opt2: "The skirt is green.",
        opt3: "The short is green.",
        correctAnswer: "The skirt is green.",
    },
    {
        opt1: "The skirt is red.",
        opt2: "The skirt is orange.",
        opt3: "The skirt is blue.",
        correctAnswer: "The skirt is orange.",
    },
    {
        opt1: "The pants are blue.",
        opt2: "The skirt is red.",
        opt3: "The skirt is orange.",
        correctAnswer: "The skirt is red.",
    },
    {
        opt1: "The skirt are orange.",
        opt2: "The skirt is blue.",
        opt3: "The skirt is yellow.",
        correctAnswer: "The skirt is yellow.",
    },
    {
        opt1: "The t-shirt is blue.",
        opt2: "The t-shirt is green.",
        opt3: "The t-shirt is blue",
        correctAnswer: "The t-shirt is blue.",
    },
    {
        opt1: "The shorts are green.",
        opt2: "The pants are green.",
        opt3: "The t-shirt is green.",
        correctAnswer: "The t-shirt is green.",
    },
    {
        opt1: "The skirt is orange.",
        opt2: "The pants are orange.",
        opt3: "The t-shirt is orange.",
        correctAnswer: "The t-shirt is orange.",
    },
    {
        opt1: "The t-shirt is orange.",
        opt2: "The skirt is yellow.",
        opt3: "The t-shirt is red.",
        correctAnswer: "The t-shirt is red.",
    },
    {
        opt1: "The t-shirt is orange.",
        opt2: "The t-shirt is red.",
        opt3: "The t-shirt is yellow.",
        correctAnswer: "The t-shirt is yellow.",
    },
];

/** background audio control button, play/pause onclick event*/
music.addEventListener("click", function() {
    if (music.innerHTML === "🔉") {
        audio.play();
        audio.loop = true;
        audio.volume = 0.06;
        music.innerHTML = "🔇";
    } else {
        audio.pause();
        music.innerHTML = "🔉";
    }
});

/** click event for buttons */
let buttons = document.getElementsByTagName("button");

for (let clicked of buttons) {
    clicked.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "startButton") {
            const cover = document.getElementById("cover");
            const start = document.getElementById("start");
            cover.classList.add("invisible");
            start.classList.add("invisible");
            helpInstructions.style.visibility = "visible";
        } else if (this.getAttribute("data-type") === "getObject") {
            getPicButton.classList.add("invisible");
            checkSentenceButton.classList.remove("invisible");
            getObject();
        } else if (this.getAttribute("data-type") === "checkSentence") {
            checkSent();
        } else if (this.getAttribute("data-type") === "help") {
            helpInstructions.style.visibility = "visible";
        } else if (this.getAttribute("data-type") === "closeInstructions") {
            helpInstructions.style.visibility = "hidden";
        } else if (this.getAttribute("data-type") === "exit") {
            exit();
        }
    });
}

/* functions that generate the ramdom number that will be use for display the img and pull the right object for
 * answer options and the right answer. 
 * @return {numbObj1} number that will be call in next function  */
function ramdomNumb() {
    let numObj1 = Math.floor(Math.random() * itemsInfo.length);
    return numObj1;
}

/** display the img and the answer options */
function getObject() {
    /*calls the return from previous function*/
    let objToUse;
    let numObj = ramdomNumb();

    objToUse = itemsInfo[numObj];

    /* assigning ramdom image. using the +1 since the img are named from 1 to 20 and index starts in 0 */
    let imgFile = `${imgFolder + (numObj+1)}.png`;
    img.src = imgFile;

    /* pulling the variables for answer options */
    let objOpt1 = objToUse[0, "opt1"];
    let objOpt2 = objToUse[0, "opt2"];
    let objOpt3 = objToUse[0, "opt3"];
    let correctAnswer = objToUse[0, "correctAnswer"];

    /** set radios to unchecked */
    opt1.checked = false;
    opt2.checked = false;
    opt3.checked = false;

    /* assigning answer options */
    labOpt1.innerHTML = objOpt1;
    labOpt2.innerHTML = objOpt2;
    labOpt3.innerHTML = objOpt3;
    answerLabel.innerHTML = correctAnswer;
    opt1.value = objOpt1;
    opt2.value = objOpt2;
    opt3.value = objOpt3;
}
/** function that check the answer selected */
function checkSent() {

    const displayPic = document.getElementById("result");
    const audio = document.getElementById("audioAnswer");
    let correctAnswer = document.getElementById("answerLabel").innerHTML;

    /** pull the selected radio */
    let checkRadio = document.querySelector(
        'input[name="answer"]:checked');

    /** conditional that trigger actions accorder if result is right or wrong. 
     * it will display img, audio and a sweetAlert as feedback */
    if (checkRadio.value === correctAnswer) {
        displayPic.src = imgFolder + "right-answer.gif";
        audio.src = "assets/audio/woohoo.mp3";
        audio.play();
        audio.loop = false;
        audio.volume = 0.06;
        rightAnswerCount();
        increaseTries();
        swal(
        {text:"Good job!", 
        icon:"success",});
        checkSentenceButton.classList.add("invisible");
        getPicButton.classList.remove("invisible");
    } else if (checkRadio.value !== correctAnswer) {
        displayPic.src = imgFolder + "wrong-answer.gif";
        audio.src = "assets/audio/oops.mp3";
        audio.play();
        audio.loop = false;
        audio.volume = 0.06;
        swal(
            {text: "Try again!", 
            icon: "error",});
        increaseTries();
    }
}

/** increase the right answer count */
function rightAnswerCount() {
    let rightAnswerCount = parseInt(document.getElementById("correctAnswer").innerText);
    document.getElementById("correctAnswer").innerText = ++rightAnswerCount;
}

/** increase the tries count, and run actions when reach 10 of them */
function increaseTries() {

    let triesCount = parseInt(document.getElementById("tries").innerText);
    let finalResultImg = document.getElementById("finalResultImg");

    document.getElementById("tries").innerText = ++triesCount;

    /** bring the right count that is calculated in other function*/
    let gotRight = parseInt(document.getElementById("correctAnswer").innerHTML);

    /** gives text to the div that show message about the final score when the tries is e */
    if (triesCount >= 10) {
        document.getElementById("finalResultText").innerHTML = `You got ${gotRight} of ${triesCount}`;
        let finalMessage = "";
        if (gotRight <= 4) {
            finalMessage = "Good try! Keep the practice.";
            finalResultImg.src = imgFolder + "reach-sad.gif";
            finalResultImg.style.visibility = "visible";
        } else if (gotRight === 5 && gotRight <= 8) {
            finalMessage = "Well done! Keep the good work.";
            finalResultImg.src = imgFolder + "qoobee-agapi.gif";
            finalResultImg.style.visibility = "visible";
        } else {
            finalMessage = "Excellent job!";
            finalResultImg.src = imgFolder + "party-popper-confetti.gif";
            finalResultImg.style.visibility = "visible";
        }
        document.getElementById("finalResultMessage").innerHTML = finalMessage;
        document.getElementById("finalResult").style.visibility = "visible";
    }
}

/** exit button */
function exit() {
    /* sweetAlert used for the confirmation of the exit of the game button */
    swal({
        title: "Sure ?",
        icon: "warning",
        buttons: {
            Yes: true,
            No: true,
        },
    }).then(value => {
        switch (value) {

            case "Yes":
                location.reload();
                break;

            case "No":
                swal.close();
        }
    });
}


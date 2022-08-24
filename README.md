
# 🕹️ Let's play!
## Elementary level English exercises for children.

![N|Solid](https://share.balsamiq.com/c/psMBm4vtGhEpHc6erWf33o.png)

## Learn is Fun! 

[🖥️ Site live]( https://ivettemcdermott.github.io/PP2-Js/)

This site is design to provide a tool where the children can practice in a fun way describing clothing items with a basic sentence structure, according to a ramdomly display picture. The image is not just focus in articules of clothing but also in a basic range of colours. 
The exercises are targeted to been used by children at elementary level of English.

The site opens with a full welcome screen with a fun animated character inviting the child to start the game, once the start button is clicked the welcome screen hides, and allows the child to see the game screen with a div in front where there the instructions for play can be read. The div needs to be closed in order to start the game itself.

The first step is click to click in the "Get a picture" button, which internally generate a ramdom number that will allow the functions to start the process and search in the array what object will be use. This object contains the picture, answer options and the correct answer for this exercise. It will display the picture and the options in the inputs radio.
Next, the child will select one of the options, and following click the "Check your answer" button, this action will trigger a function that compare the selected with the correct answer, and display a gif with an audio according to the result being right or wrong.
The gifs and audios used are cartonish in order to dont discourage the child and to make the process fun.

The score, as the exercise actions are repeated over and over it will log the amount of tries, as the amount of right answer. As the amount of tries get to 10, the game will stop and give back a final result in a pop div where can be read the number of right answers of the ten tries that had been done, that together with a encouraging message and a fun gif again.
After that, the child will need to exit the game as it will be lock. The game won't exit automaticaly thinking of that the children could want to show their results to someone that it is not inmediately available.

The exit is trigger by a button in the bottom right corner, it will give an alert to confirm the exit and a second one inviting them to come back again. After that it will bring the screen to the welcome one again.

Aditional features, in the top right corner can be found two buttons, one with the question mark symbol, easily recognizable as help, what will display the instructions div again when click.  Next to it, the audio button, it will play and pause a background audio, that had been set to a reduce volumen to no be intrusive while the game is being play.

## Index – Table of Contents

- [User Experience (UX)](#User-Experience-(UX))
- [Features](#features)
- [Design](#design)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Credits](#credits)

<br>

## User Experience (UX)
___________

As a user I want to be able to:

- Easily recongize the purpose of the website.
- Navigate instintivily throught the site.
- Easy to recognize the steps to follow in the game.
- Get access to help when and if needed.
- Get feedback where my answer is right or wrong. 
- Get a final score that show my performance at the end of the 10 exercises.
- Find the game engaging and fun.

<br>

## Features
___________

Included features by screen

- ### The welcome screen 

- Intructions Button: It displays a div as pop up, where the instructions can be red.
- Bacground Button: It allows the user to play or pause a background audio.
- Start Button: It hides the welcome screen and allows the user to visualize the next one.

- Other elements: the welcome screen also contains a gif element that is apealing to targeted user, and texts used as title 

![NSolid](https://share.balsamiq.com/c/oAhej9aYXz5zwZC95REDcG.png)

- ### The main game screen

- Closed Button: It hides the pop up div that contains the intructions.

- Other elements: the game can be visualized in the behind the div, the buttons for audio and exit can be used from this screen.

![NSolid](https://share.balsamiq.com/c/XxvD88yD5FdrY7kstbxKZ.png)

- ### The game screen

- Get a picture Button: It runs a function that generate a ramdom number, which is used for search for the corresponding object in the array and assign it to a variable that will be used in the next steps. In the screen, this action will display the image and its answer options.

![NSolid](https://share.balsamiq.com/c/vfCLsMmLpEDnuBUQukNqCL.png)

- Input radios: They contain the answer options and it will allow the user to select one of them at the time. 
- Check your answer Button: When click it will compare the user selected input with the correct answer. This will give a feedback display a gif in the "animation for answer div" plus and audio related to it. 

![NSolid](https://share.balsamiq.com/c/vfCLsMmLpEDnuBUQukNqCL.png)

buttons

![NSolid](https://share.balsamiq.com/c/baYCU5vjysAfhYjzmvBrcy.png)

buttons

![NSolid](https://share.balsamiq.com/c/bT7LDd1Cct5VWz2UXKfzXC.png)


button 

![NSolid](https://share.balsamiq.com/c/2Z8iagiKKq7eL84ZjWgeve.png)

buttons

![NSolid](https://share.balsamiq.com/c/esZCbYVTXNvmR7khmHEbi6.png)

buttons

<br>

## Design
___________

[Wireframes](https://share.balsamiq.com/c/8RjqARgW8qAXxcvg1BcgMo.png)

<br>

## Technologies Used 
___________

<br>

## Testing
___________

| Working | Yes | No |
|:---|        :---:| :---:|
| example |example|example|
| example |example|example|


| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

<br>

## Deployment
___________

<br>

## Credits
___________

gifs  https://tenor.com/ 

/* query selector from Geekforgeeks*/ 
let checkRadio = document.querySelector(
        'input[name="answer"]:checked');

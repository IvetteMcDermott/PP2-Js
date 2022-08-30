
# 🕹️ Let's play!
## Elementary level English exercises for children.

![N|Solid](https://share.balsamiq.com/c/j9ugKagWkeU1AnrgVVpd8x.png)

## Learn is Fun! 

[🖥️ Site live]( https://ivettemcdermott.github.io/PP2-Js/)

This site is designed to provide a tool where the children can practice in a fun way describing clothing items with a basic sentence structure, according to a randomly displayed picture. The image is not just focus on articles of clothing but also on a basic range of colors. 
The exercises are targeted to be used by children at elementary level of English.

The site opens with a full welcome screen with a fun animated character inviting the child to start the game, once the start button is clicked the welcome screen hides, and allows the child to see the game screen with a div in front where there the instructions for play can be read. The div needs to be closed in order to start the game itself.

The first step to click on the "Get a picture" button, which internally generates a random number that will allow the functions to start the process and search in the array which object will be used. This object contains the picture, answer options and the correct answer for this exercise. On the screen, the picture and the options for the inputs radio will be displayed.

Next, the child will select one of the options, and after clicking the "Check your answer" button, this action will trigger a function that compares the selected with the correct option. On the screen, a gif with an audio according to the result being right or wrong will be displayed.
The gifs and audios used are cartoonish in order to not discourage the child and to make the process fun.

The score, as the exercise actions are repeated over and over, it will log the amount of tries, and the amount of right answers. As the amount of tries get to ten, the game will stop and give back a final result in a pop div where can be read the number of right answers of the ten tries that had been done, that together with an encouraging message and a fun gif again.

After that, the children will need to exit the game as it will be locked. The game won't exit automatically, this thinking of the children could want to show their results to someone that it is not inmediatelly available.

The exit is triggered by a button in the bottom right corner, it will give an alert to confirm the exit and a second one inviting them to come back again. After that it will bring the screen to the welcome one again.

Additional features, in the top right corner can be found two buttons, one with the question mark symbol, easily recognizable as help, which will display the instructions div again when clicked.  Next to it, the audio button, it will play and pause a background audio that had been set to a reduced volume in order not to be intrusive while the game is being played.

<br>

## Index – Table of Contents
___

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

- Easily recognize the purpose of the website.
- Navigate instinctively  throught the site.
- Easy to recognize the steps to follow in the game.
- Get access to help when and if needed.
- Get feedback where my answer is right or wrong. 
- Get a final score that shows my performance at the end of the 10 exercises.
- Find the game engaging and fun.

<br>

## Features
___________

Included features by screen

### The welcome screen

- *Instructions Button:* It displays a div as pop up, where the instructions can be red.
- *Background Button:* It allows the user to play or pause a background audio.
- *Start Button:* It hides the welcome screen and allows the user to visualize the next one.

- *Other elements:* the welcome screen also contains a gif element that is appealing to the targeted user, and texts used as title 

![NSolid](https://share.balsamiq.com/c/oAhej9aYXz5zwZC95REDcG.png)

### The main game screen

- *Close Button:* It hides the pop up div that contains the intructions.

- *Other elements:* the game screen can be visualized behind the div, the buttons for audio and exit can be used from this screen.

![NSolid](https://share.balsamiq.com/c/XxvD88yD5FdrY7kstbxKZ.png)

### The game screen

- *Get a picture Button:* It runs a function that generates a random number, which is used to search for the corresponding object in the array and assign it to a variable that will be used in the next steps. In the screen, this action will display the image and its answer options.

![NSolid](https://share.balsamiq.com/c/vfCLsMmLpEDnuBUQukNqCL.png)

- *Input radios:* They contain the answer options and it will allow the user to select one of them at a time. 
- *Check your answer Button:* When clicked it will compare the users's selected input with the correct answer. This will give a feedback displaying a gif in the "animation for answer" div plus and an audio related to it. 

![NSolid](https://share.balsamiq.com/c/baYCU5vjysAfhYjzmvBrcy.png)

- *Animation for answer:* Div that contains a gif according to the result of the input selected, it will be displayed as feedback if it was right or wrong, as shown in the following image.

![NSolid](https://share.balsamiq.com/c/bT7LDd1Cct5VWz2UXKfzXC.png)

- *Final Result Div:* It will be displayed on top of the game when the score reachs 10 tries. It contains the score in a text, an encorauging message and a gif. The message and gif will vary according to the final score.
- *Exit Button:* It gives an alert to confirm the exit, and a second one with an invitation to return.

![NSolid](https://share.balsamiq.com/c/2Z8iagiKKq7eL84ZjWgeve.png)

- *Gif on final result div:* According to the final result will be as follows

![NSolid](https://share.balsamiq.com/c/esZCbYVTXNvmR7khmHEbi6.png)

<br>

### Features that can be implemented in the future

- The array can be increase with new objects and with this the vocabulary to use. 
- A form that sends the results to a data base, or the teacher or tutor of the children by email.
- A report could be included that show a full list of the selected answers, indicating if they were right or wrong.

## Design
___________
The game had been created from zero, but had been influeced by exercise pages for children like British Council where different types of practice exercises can be found.

Color scheme had been based in a selection from https://coolors.co/.

Typography, the font used for the website is "PT Sans" from Google Fonts. Easy to read in any element.

### Wireframes
- [Welcome Screen - Monitor](https://share.balsamiq.com/c/8RjqARgW8qAXxcvg1BcgMo.png) 
- [Game Screen with Instructions/Help displayed - Monitor](https://share.balsamiq.com/c/mPyivSBs2yEnCTwYX15VAG.png) 
- [Game Screen with Final Result div displayed - Monitor](https://share.balsamiq.com/c/5utevUF2k4Q5b7zuhFhU2N.png) 
- [Game Screen - Monitor](https://share.balsamiq.com/c/mYPVPf4hb1ox4fTkJG1KnQ.png)  

<br>

## Technologies Used 
___________

### Languages

- [HTML5](https://en.wikipedia.org/wiki/HTML5)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Other resources
- [GitHub](https://github.com/)
- [GitPod](https://www.gitpod.io/)
- [Balsamiq](https://balsamiq.com/)
- [Google Fonts](https://fonts.google.com/)

<br>

## Testing
___________

### HTML Validation

*Result:* No errors or warnings to show.

![NSolid](https://share.balsamiq.com/c/uHJrvGTLLtuXx5umHLg8pD.png)

<br>

### CSS Validation

*Result:* No errors found.

![NSolid](https://share.balsamiq.com/c/krygGhkWab6r8cGc8ftWYq.png)

<br>

### JavaScript Validation

*Result:* No errors, two warnings.

![NSolid](https://share.balsamiq.com/c/3p81Pov42dJbSwB3prBfGE.png)

<br>

### Features Testing
<br>

| Feature | Test Action | Expected Outcome | Test Outcome |
|:---|        :---:| :---|:---:|
| Start Button | Click on it | Hide the welcome screen | Pass |
| Instructions/Help Button | Click on it | Display a div with instructions | Pass |
| Background Audio Button | Click on it | Play/Pause the background audio | Pass |
| Close Instructions/Help Button | Click on it | Close the div | Pass |
| Get a picture Button | Click on it | Display a picture and the answer options | Pass |
| Input radios | Click on it | Select the answer to check | Pass |
| Check your answer Button | click on it | Check if the answer is right and give the feedback gif | Pass |
| Exit Button | Click on it | Exit the game, return to the welcome screen | Pass |

<br>

## Deployment
___________
The website had been deployed on GitHub from the main branch on the repository PP2-Js, following the steps that had been mark in the screenshot as listed here:

1. Settings
2. Pages.
3. Branch main.
4. Site URL address is show.

<br>

![NSolid](https://share.balsamiq.com/c/a6tnq5QiiznugdZYD9XZNL.png)



<br>

## Credits
___________

- [Get Emoji](https://getemoji.com/) Emoji used in the title and name had been copied from this site.
- [Tenor](https://tenor.com/) Gifs used in the website had been obtained from this site.

 While no code had been copied completely, through research and problem solving I had learned and found solutions in different blogs and websites, as listed below.    

- [GeeksforGeeks](https://www.geeksforgeeks.org/)
- [Stack Overflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)
- [Programiz](https://www.programiz.com/javascript/setTimeout)
- [CSS-Tricks](https://css-tricks.com/)

Also, I had made use of the tutor support and received guidance of my mentor.
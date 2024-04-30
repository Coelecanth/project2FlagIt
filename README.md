[PROJECT2FLAGIT](https://coelecanth.github.io/project2FlagIt)

[![GitHub commit activity](https://img.shields.io/github/commit-activity/t/Coelecanth/project2FlagIt)](https://github.com/Coelecanth/project2FlagIt/commits/main)
[![GitHub last commit](https://img.shields.io/github/last-commit/Coelecanth/project2FlagIt)](https://github.com/Coelecanth/project2FlagIt/commits/main)
[![GitHub repo size](https://img.shields.io/github/repo-size/Coelecanth/project2FlagIt)](https://github.com/Coelecanth/project2FlagIt)

# Flag-it! a Javascript Game by  Stewart Gibbons

![screenshot](documentation/mockup.png)

# Introduction 
I chose to write a game as I saw this as challenge and to stretch my knowledge of javascipt. I chose a game as it was something I had never done before. This represented a technical challenge in managing a process of the game play. So as an example managing the game flow, making sure only the right resources are available a the right time during the game flow. 

ed based to identify the national flags of the world for several reasons. 
- Firtly it something I am really interested in temrs of travel and knowledge of other countrires.

[View the live project here.](https://coelecanth.github.io/project2FlagIt//)

# Game Design Story 

The name I chose for the game was "Flag-it!", this being an obvious reference to flags; but also the other reference in colloquail terms to highlight/illustrate something. Which given the game was all about finding the right name for a flag seemed apporpriatte. Lastly the expression of the words "flag-it" seemed very much to represent the spirit of the game of being fun and not too serious. 
The name at the time of design wasn not being foranyhting like this

So when I started designing the game my intial idea for it requirement were to be visually pleasing and easy to understand with out the need for signficant explanation, more guidance. When i started rearching the idea looking at similer types of game, this list grew significantlty into the below criteria. 

- The game needed to be both educational and fun 
- Will be pleasing to use in terms of its colours, layout, and fonts
- layout should lend its elf to divide thgame play area into clearly understood regions e.g. 
    - Heading area
    - Flag area
    - Answer Area/panel 
    - Footer - with Copyright for the game and logos
    Acknowledgment to public domain images 
- Need to have the minimum amount of scrolling when actually playing the game   
- Needed to be bale to provide a complete list of all recognised country flags 
- The game needed to be written with HTML and Javascipt.
- will also include the appropriate functional libraries for the above e.g. Jquery, Bootstrap 
### Game features
Would include the following game features
- Game score feature, counting during the game, and summay a the end.
- would show the corect answer when answering questions if you get it wrong
- Have a seperate learn the flags section where game player cna look at all flags and become familar with withhe flags of each country
- Would be a multiple choice Question and asnswer game
- would show one flag image and mutiple answer, this was chosen to give a better performance 
when compared to display multiple images and a single answer.
- Would alter screen viewing pane to reduce the amount clutter and therfore scrolling when playing the game eg would hide elements that are not required such as the heading banner, text.
this will also be related to viewport size as well 
- include all (the vast majority) of world flags as recognised by an authorative body.
- Provide game options
    - To change the default number of questions to higher and lower number of questions
    - High score feature - although technicall this will only perssit locally and to the browser 
    - Provide access to diffeent game types, eg flags by region 
    - Alternative flag game - flags tahat are very similar in appearance to look at - "look-ee-likey game", and the answer would be all from same group of look-ee-likey flags  


# Site Design  
## Colour Scheme

The overall colour scheme design for this game was chosedn to provide a passive game plaette that had good contrast 

- The banner section of each page 

   the  colour reference and there names are as follows:


For reference and clarity these have been detailed in the style.css as a comment.
   


## Wireframes
![Wire Frames Colour For the  Fly fishing Lodge](/assets/readme-img/wirfr1-small.png?raw=true "Colour palette")

## Design developement 
### site model 
intially I was working on site structure and have 2 pages utilisng modlas to to reduce duplicate similar pages 
the modalsructure became too complicated to magae SO this was simplified to a 3 page structure  
### General page structure 
used throughout the site 
compromises of the following structure 
- Heading Banner 
- Flag Bannner 
- Answer Banner 
- Score Banner 
- Copyright Banner 

In addtion to this there are 2 modal pages used from the game 
these are 
- End of Game Modal 
- Game Options Modal 


### site design 
The intial layout i tried as shown in the wire frame  
 
intial layout did not work weell enough as a rsposive desgn and reaplced with a simpler model which worked far better
#### Game page 
to aid layout in the game page BS grid syetm was ussed and also BS hide options were used to alter view when view port changed, when thesesoptions were reured for the game JS was used to perform this  

#### stf
 - was going to use modal but was struggling wih the complex methodology of doing this so simplified the design to use a page where flags were laoded one a t atime 



     



## Typography
Fonts I used  were chosen from Fontjoy.com which provides a mechanism to mix and match together fonts to provide aestically pleasing results. 

The following 3 fonts were chosen to provide good contrast in styles to each other and be symapthetic with the site and its function 

- 



## Images
### Image Sources 
- The subject material required for the flag images are are piblic domain, theyfore easy to obtiona full set set of flags for the world, without the need for copyright, etc. Having had previous expereince where  imagery has been difficult to source and not alwys ideal.  

Copy right images which there is only one were sourced from 
- Istock https://www.istockphoto.com/
     
# Technologies Used 

## Languages
1. HTML5
1. CSS3
1. Javascript 

## Frameworks, Libraries & Programs Used
### 1. [Bootstrap 5.3](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- Bootstrap was used to assist with the capabiliites and responsiveness and styling of the website. It is used througout the site.

### 2. [JQuery ](https://#)  
- jQuery  

### 3. [Git](https://git-scm.com/) 
- Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
### 4. [GitHub:](https://github.com/) 
- GitHub is used to store the projects code after being pushed from Git.

### 5. [GitPod](https://www.gitpod.io/)
- Gitpod was the IDE that i used to edit and build the html pages in, and dvelope an debug the javascript code with. 

 ### 7. [Squoosh](https://squoosh.app/)
- Squooosh was used to perform the following functions 
- convert the images from jpg to Avif 
- Also to resize (reduce pixel count) the images to a more managable size to improve download speed.

### 8. [Visio](https://support.microsoft.com/en-gb/office/install-visio-or-access-visio-for-the-web-f98f21e3-aa02-4827-9167-ddab5b025710) 
- Visio was used to create the wireframes during the design process. as this was a tool I am  very fmailar with and have license for. and I used this tool for expendency, over tools like Figma which would require me to learn. 
### 9. [Google Fonts](https://fonts.google.com/)
- Google fonts was used to source the fonts that were sleected from FontAwesome. 

### 10. [StackOverflow](https://stackoverflow.com/) 
- Stack overflow was an invaluable resource I used for code validation, examples and research.

### 13. [FontJoy](https://fontjoy.com/)
- Font joy was used in the design process to create a palette of fonts, to be empathic with the site topic, and provide contrast between various type stying. 
    
**Quote** from https://fontjoy.com/  

 *The goal of font pairing is to select fonts that share an overarching theme yet have a pleasing contrast. Which fonts work together is largely a matter of intuition, but we approach this problem with a neural net.*


# Testing

## High Level Test Strategy 
- Responsiveness -  tested across mutiple screen size and devices 
- User testing - Game flow and interaction 
- Javascript operation - 
- javascript automated testing  
- validation using Jhint, w3c, 
- performance using lighthouse, gtmetrix 


## Device base 
The follwoing devices were tested against, these were selected to provide a broad but common base of devices  

Emulated devices using Google Chrome emulator   
- Iphone XR 
- galaxy s20 
- Ipad mini 
- Kindle fire 
- Ipad Pro
Physical device 
- Pc desktop -  Firefox, Chrome, and Edge
- Samsung s22 Ultra - Firefox and Chrome    
- iphone XR#
### Browser 
The site was tested on the following browsers acroos the above devices :
 -  safari
 - Google Chrome
 - Mozilla Firefox
 - Microsoft Edge

## MarkUp Validation -  
The W3C Markup Validator and W3C CSS Validator Services were used to validate all page of the project to ensure there were no syntax errors in the project.
- W3C Markup Validator - Results can be seen in TESTING.md including errors and final validation
-  W3C CSS Validator - - Results can be seen in TESTING.md including errors and final validation

## JS automated testing

## Performance Testing  
### [GtMetrix](https://gtmetrix.com/) Testing 
### lighthouse 

# Testing Issues and Resolution

### 1. Bug - Game Flow behaviour after Start Pressed  
Problem found when AFTER the "Start" button is clicked in the game, the "Next"  and Restart Game button is active even though no answer has been selected.
this was cooorected  
### Resoloution 
Hide buttons until answer buttons have been pressed 


### 2. Game Flow behaviour with reset Button after start 
Once a game has been played (scores recorded), and the game is started again with Start, if you now press the reset button the scores from the previous game are shown. 
### Resolution 
This happens as the scores have been written to the modal page, and had not been reset as part of the restart process, this was fixed by resetting the scores values in the modal page as part of the reset.

### 3. Game Flow 



### 4 Game responsiveness on small screens 

icon in the copy right banner at smallscreen clashed with copyright 
resolved this by hiding Icon at small screen size using bootstrap setting for small 


### 5 Game responsiveness on samll screens - main flag Image 



# Deployment 
### **GitHub Pages**

GitHub pages were used to deploy this site.

The steps to deploy the live site are:

In the GitHub repository navigate to the 'Settings' tab
On the left hand menu click on 'Pages'
Under Build and Deployment > Branch select 'main' and '/root'
Click save
The link to the live website will then be displayed at the top when successfully published

### **Forking the GitHub Repository**

 Go to the GitHub repository
Click on the fork button in the top right hand corner of the page

### **Cloning the GitHub Repository**

+ Go the GitHub repository
+ Click on the 'Code' button
+ In the dropdown menu click on 'HTTPS'
+ Copy the link to the clipboard
+ Open Git Bash
+ Locate the desired directory where you want to place the cloned directory
+ Type 'git clone' and then paste the copied URL
+ Press 'enter' to create the clone

# Acknowledgements

- Mentor support at Code Institute for their support.

- Tutor for continuous helpful input and feedback

- Friends and family for valuable insights and feedback



## Deployment

The site was deployed to GitHub Pages. The steps to deploy are as follows:

- In the [GitHub repository](https://github.com/Coelecanth/project2FlagIt), navigate to the Settings tab 
- From the source section drop-down menu, select the **Main** Branch, then click "Save".
- The page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://coelecanth.github.io/project2FlagIt)

### Local Deployment

This project can be cloned or forked in order to make a local copy on your own system.

#### Cloning

You can clone the repository by following these steps:

1. Go to the [GitHub repository](https://github.com/Coelecanth/project2FlagIt) 
2. Locate the Code button above the list of files and click it 
3. Select if you prefer to clone using HTTPS, SSH, or GitHub CLI and click the copy button to copy the URL to your clipboard
4. Open Git Bash or Terminal
5. Change the current working directory to the one where you want the cloned directory
6. In your IDE Terminal, type the following command to clone my repository:
	- `git clone https://github.com/Coelecanth/project2FlagIt.git`
7. Press Enter to create your local clone.

Alternatively, if using Gitpod, you can click below to create your own workspace using this repository.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/Coelecanth/project2FlagIt)

Please note that in order to directly open the project in Gitpod, you need to have the browser extension installed.
A tutorial on how to do that can be found [here](https://www.gitpod.io/docs/configure/user-settings/browser-extension).

#### Forking

By forking the GitHub Repository, we make a copy of the original repository on our GitHub account to view and/or make changes without affecting the original owner's repository.
You can fork this repository by using the following steps:

1. Log in to GitHub and locate the [GitHub Repository](https://github.com/Coelecanth/project2FlagIt)
2. At the top of the Repository (not top of page) just above the "Settings" Button on the menu, locate the "Fork" Button.
3. Once clicked, you should now have a copy of the original repository in your own GitHub account!

### Local VS Deployment

# Future Developments
## All time High scores  
        
    // check high scores
     // read high score value from modal checks its not 0 or lower than cuurent
     hScoretotalq = parseInt(h-score-q.innerText, 10)

     if (maxQuestions > hScoreTotalq) {
        // if modal value is lower than maxQuestions eg the current number of questions then,
        // then write the value for max question 
        $("#h-score-q").text(maxQuestions)
     } 
      // read high score value from modal checks its not 0 or lower than cuurent 
    hScoreValq =  parseInt(h-score.innerText, 10)
     if (correctQuestions > hScoreValq) {
        // if modal value is lower than correctQuestions eg the current 
        // number of correctly answered questions then,
        // then write the value for correctQuestions 
        $("#h-score-q").text(maxQuestions)
        }
     

 ## Multi region Game 
I was developing a new feature for the game where you could select a region in the world where flags were from these were idenitified by field in the JSON arraay called territory. There were 5 territories recorded which were Asia, Oceania, Americas, Europe and Africa.   

     //captures input from modal - change game type is eg flags by region
    modChgFg()
    function modChgFg() {
       $('.f-class').on("click", function () {
       gameFilter = (this.id); 
       if (gameFilter != "All") {
         // call function to creat new arry with territory filter
        arrFilter(gameFilter)
         //show text with game type on page
        $(".ps-game").show();
        $("#" + "flag-game-type").html(gameFilter + ` Flags`)
    } else { 
         // gameFilter is set to "All" 
         //once closed now start game
        $("#GameEndModal").on("hide.bs.modal", function () {
        initNewgame()
        });
       }
      });
     }


 function arrFilter(idRegion) {
     let filteredArr = [];
     for (let i = 0; i < shuffled.length; i++) {
         if (shuffled[i].territory === idRegion) {
             filteredArr = [...filteredArr, shuffled[i]];
         }
     }
    
 }
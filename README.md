#![alt text][logo] Netflix Roulette Phone Gap
 
[Click here to view demo video]( https://www.youtube.com/watch?v=9-w0zgxhO0c " Netflix Roulette")

##Assignment Outline

PhoneGap/jQuery Mobile project of your choosing incorporating a jQuery Ajax call to some public service/API.

##Chosen API

The API that I chose was called Netflix roulette. The Netflix roulette API giving developers access to the Netflix Roulette Database so you can search for movies as you wish. The Netflix Roulett can be found at http://netflixroulette.net/API/.

To search for the title (search by title) of a movie use the following url: http://netflixroulette.net/API/API.php?title=clerks
 
To search for the films a director (search by director) directed use the following url which give back multiple results in this case
http://netflixroulette.net/API/API.php?director=Quentin%20Tarantino
 
To search for an actor (search by actor) you can use the following url. 
http://netflixroulette.net/API/API.php?actor=Nicolas%20Cage

***

##Screen Overview

**Home Screen**

The home button uses a theme that I installed from http://themeroller.jquerymobile.com/. This also required me to change the build in JQueary mobile from 1.7 to 1.11. The home button (top left) appears on every screen and brings the user back to the home screen. The home screen uses reverse transitions from the left to right. While all other pages go right to left.  

**Options Screen**

The options screen (top right) shows what options are available to the user. The options screen is on every screen and transitions from down the screen. When you press the button to go to the respective page using a pop transaction.

**Search for Title**

Here we can search for the title “clerks”. We type in the word “clerks” and the result is returned and then I parse it and put it out to screen. Each section in the app has a different theme and colouring. The Search Results is the same search results screen for all searches.

**Search for Actor**

As you will see there is a different theme being used on each section. The results shown for “Nicolas Cage” as the same as the results shown in the API section above. There is more than one result shown.

**Search for Director**

Here you can chose to search for “Tarantino” or “Quentin Tarantino”. This search will bring back Quentin Tarantino or directors that have “Tarantino” in their name. This could have also been done for the actor’s last name. I could have search for “Cruise” and got back Tom, Penelope etc.  

***

## Installation and Usage

Download the files and run the project in Eclipse. For better results download the project to an Android device.

***

##Additional Information

Please view the ‘phonegap_writeup.pdf’ for further information about this assignment. 


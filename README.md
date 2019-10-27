# clicky_game

## Overview
Clicky-Game is a front-end application built with the React javascript library.  It showscases several features of a typical React application, namely:

 - Reusable components
 - Event handling
 - Component state updates. 
 - Passing Props (properties) to components.
 - Bootstrap CSS/HTML/JS framework.
 - Cloud deployment of a React application. 
 

## How to Play
Access the deployed application [here.](https://j0serobles.github.io/clicky_game/)

The application shows 12 thumbnail images in a grid,   The purpose of the game is to click on all twelve images **only once**.  The player will receive one point for each image clicked, and the score will reset to 0 if one of the images is clicked more than once.  The game is won if the user can click on all images only once. 


## File directory structure
```
click_game
|   .gitignore - Files to ignore when pushing to GitHub
|   package-lock.json -- Created by npm init
|   package.json -- Project metadata
|   README.md -- This file
|   
+---build -- Build directory
+---doc 
|       README.md -- Documentation generated by create-react-app
|       
+---node_modules -- Module dependencies.
|               
+---public -- Static project assets
|       favicon.ico
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       robots.txt
|       
\---src -- Source code.
    |   App.css -- CSS Stylings for App component.
    |   App.js -- App component
    |   App.test.js  -- App component for tests.
    |   icons.json -- Contains the icons for the images in the game.
    |   index.css -- CSS Stylings
    |   index.js -- React index.js (Main logic).
    |   logo.svg -- Static asset (Generated by create-react-app)
    |   serviceWorker.js -- Generated by create-react-app
    |   
    \---components -- Application components.
        +---Footer -- Stateless page footer
        |       index.js
        |       style.css
        |       
        +---Game -- Main application component, contains state.
        |       index.js
        |       style.css
        |       
        +---IconCard -- Stateless "grid tile" component. 
        |       index.js
        |       style.css
        |       
        +---Navbar -- Stateless Navigation bar
        |       index.js
        |       style.css
        |       
        +---ScoreBoard -- Stateless score string.
        |       index.js
        |       
        +---StatusMessage -- Stateless string.
        |       index.js
        |       style.css
        |       
        \---Wrapper -- Encloses all other containers. 
                index.js
                style.css
```
## Application Design

[Rendered game page](https://github.com/j0serobles/clicky_game/blob/master/doc/homepage.jpg)
The image shows the application's components when rendered.  The most important component is the "Game" component, as it is the one where the game state is saved:

src/components/Game.js:
```
class  Game  extends  React.Component {
  state  = {
  "currentScore" :  0,
  "highScore" :  0,
  "statusMsg" :  "Click an image to   begin!",
  "icons" :  icons
}
. . . 
```
The "icons" attribute is an array of 12 elements, imported into the "Game" component via:

src/components/Game.js:
```
import  icons  from  "../../icons.json";
. . . 
```
src/icons.json:
```
[{
"id": 1,
"name": "SpongeBob",
"image": "https://vignette.wikia.nocookie.net/spongebobgalaxy/images/0/07/SpongeBob_SquarePants.png/revision/latest?cb=20171228024014",
"occupation": "Fry Cook",
"location": "A Pineapple Under the Sea",
"isClicked" : false
},
{
"id": 2,
"name": "Mr. Krabs",
"image": "https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",
"occupation": "Restaurant Owner",
"location": "A Giant Anchor",
"isClicked" : false
},
...
```
At startup, the Game is initially rendered, and each icon is displayed in an ```<IconCard>``` component:
```{  this.state.icons.map( icon  => (
<IconCard
processClick={ () =>  this.processClick(icon.id) }
id={icon.id}
key={icon.id}
name={icon.name}
image={icon.image}
occupation={icon.occupation}
location={icon.location}
/>
. . . 
```
The ```processClick``` prop will execute the ```Game.processClick()``` method when an icon is clicked.  This method will:

 - Update the element in the ```[icons```] array, setting the ```isClicked``` attribut

<!--stackedit_data:
eyJoaXN0b3J5IjpbMTcxNTM4MTQ2LDIwNDY0MTU0MDIsLTE1NT
c0MTY0OTNdfQ==
-->
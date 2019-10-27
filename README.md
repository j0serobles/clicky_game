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

state  = {

"currentScore" :  0,

"highScore" :  0,

"statusMsg" :  "Click an image to begin!",

"icons" :  icons

}

<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3MzExMzg3NSwyMDQ2NDE1NDAyLC0xNT
U3NDE2NDkzXX0=
-->
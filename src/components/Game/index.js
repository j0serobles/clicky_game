import React    from "react";
import IconCard from "../IconCard";
import Navbar   from "../Navbar";
import Footer   from "../Footer";
import icons    from "../../icons.json";

class Game extends React.Component { 

    state = { 
        "currentScore"  : 0,
        "highScore"      : 0, 
        "statusMsg"     : "Click an image to begin!",
        "icons"         : icons
    }

    shuffleIcons = () => {
        
         let arra1 = this.state.icons;
         let ctr   = this.state.icons.length
         let temp
         let index;
        
        // While there are elements in the array
        while (ctr > 0) {
          // Pick a random index
          index = Math.floor(Math.random() * ctr);
          // Decrease ctr by 1
          ctr--;
          // And swap the last element with it
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
        }
        this.setState( { icons : arra1 } )
    }

    processClick = (iconId) => {

        let clickedOnIcon = null;  // stores the Icon object clicked on from the state's icon[].
        let newIconArray  = [];    // Copies the current state's icon[] array to replace the clicked icon.
        let newStatusMsg  = "";
        let currentScore  =  this.state.currentScore;
        let highScore     =  this.state.highScore;

        //Extract the clicked on Icon object from the state icon[] array:
        this.state.icons.forEach( (matchingElement, index) => {

            if ( matchingElement.id === iconId ) { 
                clickedOnIcon = matchingElement;
                //console.log (`clickedOnIcon= `+ JSON.stringify(clickedOnIcon));
            }
        });

            //If the clicked-on icon has already been clicked on, notify incorrect guess:
            //Otherwise, notify the correct status and set current status to "clicked = true"
            if ( clickedOnIcon && clickedOnIcon.isClicked ) {
                newStatusMsg = " You Guessed Incorrectly! ";
                currentScore = 0;
                this.resetIcons(); 
            } else if (clickedOnIcon && !clickedOnIcon.isClicked)  {
               
                console.log( `${currentScore} , ${this.state.icons.length}` );
                if ( currentScore + 1 === this.state.icons.length) {
                    newStatusMsg = " Game Won!";
                    highScore = currentScore + 1;
                    currentScore = 0;
                    this.resetIcons();
                } else {
                  newStatusMsg = " You guessed correctly! ";
                  currentScore++;
                  clickedOnIcon.isClicked = true;
                  if ( currentScore > highScore ) {
                    highScore = currentScore; 
                  }
                }

            }

        //Copy each element of the current state's icon[] array to the new one, 
        // but replace the clicked-on icon to the modified copy.
        newIconArray = this.state.icons.map ( iconElement => 
            (iconElement.id === clickedOnIcon.id) ? clickedOnIcon : iconElement );
        
            this.setState ( { 
                "icons"        : newIconArray,
                "statusMsg"    : newStatusMsg,
                "currentScore" : currentScore,
                "highScore"    : highScore
             }) ;
       
        this.shuffleIcons();
    }

    resetIcons = () => {
        let newIconArray = [ ...this.state.icons];
        newIconArray.forEach( iconElement => {
            iconElement.isClicked = false;
        });
        this.setState( { 
            "icons"        : newIconArray 
        });
    }

    render() { 
        return ( 
            <div className="container">
                <Navbar statusMsg={this.state.statusMsg} currentScore={this.state.currentScore} highScore={this.state.highScore}/>
              <div className="row mt-3">
                { this.state.icons.map( icon => (
                <IconCard
                  processClick={ () => this.processClick(icon.id) }
                  id={icon.id}
                  key={icon.id}
                  name={icon.name}
                  image={icon.image}
                  occupation={icon.occupation}
                  location={icon.location}
                />
          
            )) }
            </div>
            <Footer/>
            </div>
        )
    }
}

export default Game;
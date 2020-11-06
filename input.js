const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;


const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;






function setupInput(){
    

    document.addEventListener('keydown', keyPressed)
    document.addEventListener('keyup', keyReleased)

    greenCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A)
    blueCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW)
}

function keySet(keyEvent, whichCar, setTo){
    if(keyEvent.keyCode == whichCar.controlKeyLeft){
        whichCar.keyHeld_TurnLeft = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyRight){
       whichCar.keyHeld_TurnRight = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyUp){
        whichCar.keyHeld_Gas = setTo;
    }
    if(keyEvent.keyCode == whichCar.controlKeyDown){
        whichCar.keyHeld_Reverse = setTo;
    }

}

function keyPressed(event){
    // console.log("Key pressed:"+event.keyCode);
    keySet(event,blueCar, true)
    keySet(event,greenCar, true)
    event.preventDefault();
}

function keyReleased(event){
    // console.log("Key released:"+event.keyCode);
    keySet(event,blueCar, false)
    keySet(event,greenCar, false)
    event.preventDefault();
}
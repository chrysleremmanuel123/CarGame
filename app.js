var canvas,canvasContext;

var blueCar = new carClass();
var greenCar = new carClass();
window.onload = function(){
    canvas = document.getElementById('gameCanvas')
    canvasContext = canvas.getContext('2d')

    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond)
    setupInput();
    loadImages();
    
    loadLevel(levelOne);
}


    function loadLevel(whichLevel){
        trackGrid = whichLevel.slice();
        greenCar.reset(otherCarPic,"Green Car");
        blueCar.reset(carPic,"Blue Car");

        
    }
    function updateAll(){
        moveAll();
        drawAll();
    }
    function moveAll() {
        greenCar.move();
        blueCar.move();
        
    }
    function clearScreen(){
        colorRect(0,0, canvas.width,canvas.height, 'black');
    }
    function drawAll() {
        clearScreen();
        drawTracks();
        greenCar.draw();
        blueCar.draw();
    } 


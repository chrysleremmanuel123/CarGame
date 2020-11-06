var wallPic = document.createElement("img")
var roadPic = document.createElement("img")

const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_COLS = 34;
const TRACK_ROWS = 16;

var levelOne = 
[4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,1, 1, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 1,
 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,1, 1, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 1,
 1, 0, 0, 5, 4, 4, 0, 0, 1, 0, 0, 5, 4, 4, 5, 0, 0,1, 1, 0, 0, 5, 5, 0, 0, 1, 1, 4, 0, 0, 5, 0, 0, 1,
 1, 0, 0, 1, 4, 4, 0, 0, 1, 0, 0, 1, 4, 4, 1, 0, 0,1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 0, 0, 1, 0, 0, 1,
 1, 0, 0, 1, 4, 4, 0, 0, 1, 0, 0, 1, 4, 4, 1, 0, 0,1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 0, 0, 1, 0, 0, 1,
 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 4, 4, 1, 0, 0,1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 0, 0, 1, 0, 0, 1,
 1, 0, 0, 1, 0, 0, 0, 1, 4, 0, 0, 1, 4, 4, 1, 0, 0,1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 4, 0, 0, 1, 0, 0, 1,
 1, 0, 0, 1, 0, 0, 0, 5, 4, 0, 0, 1, 1, 1, 1, 0, 0,5, 5, 0, 0, 1, 1, 0, 0, 5, 5, 4, 0, 0, 1, 0, 0, 1,
 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0,0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 1,
 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0,0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1,
 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

var trackGrid = [];


const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

function trackLoadImages(){
    roadPic.src = "./images/track_road.png"
    wallPic.src = "./images/track_wall.png"
}

function returnTileTypeAtColRow(col, row) {
    if(col >= 0 && col < TRACK_COLS &&
        row >= 0 && row < TRACK_ROWS) {
         var trackIndexUnderCoord = rowColToArrayIndex(col, row);
        //  console.log(trackGrid[trackIndexUnderCoord]);
         return trackGrid[trackIndexUnderCoord];
        } else {
        return TRACK_WALL;
    }
}
function carTrackHandling(whichCar) {
    var carTrackCol = Math.floor(whichCar.x / TRACK_W);
    var carTrackRow = Math.floor(whichCar.y / TRACK_H);
    var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);
    // console.log(trackIndexUnderCar);
    if(carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
        carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
            var tileHere = returnTileTypeAtColRow( carTrackCol,carTrackRow )
        if(tileHere == TRACK_GOAL) {
            // alert(whichCar.name + " wins");
            var carWon = document.getElementById("winner")
            carWon.innerHTML = whichCar.name + " wins";
            var popup = document.getElementById("toggle-popup")
            popup.style.visibility = 'visible'
            loadLevel(levelOne)
        }else if(tileHere != TRACK_ROAD){
            whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
            whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
            whichCar.speed *= -0.5;
        }
    } 
} 

function rowColToArrayIndex(col, row) {
    return col + TRACK_COLS * row;
}


function drawTracks() {

    for(var eachRow=0;eachRow<TRACK_ROWS;eachRow++) {
        for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

            var arrayIndex = rowColToArrayIndex(eachCol, eachRow); 
            var tileKindHere = trackGrid[arrayIndex];
            var useImg;

            switch(tileKindHere) {
                case TRACK_ROAD:
                    useImg = roadPic;
                    break;
                case TRACK_WALL:
                    useImg=wallPic;
                    break;
                case TRACK_GOAL:
                    useImg=goalPic;
                    break;
                case TRACK_TREE:
                    useImg=treePic;
                    break;
                case TRACK_FLAG:
                    useImg=flagPic;
                    break;

            }

            canvasContext.drawImage(useImg,TRACK_W*eachCol,TRACK_H*eachRow);
            // end of is this track here
        } // end of for each track
    } // end of for each row

} // end of drawTracks func
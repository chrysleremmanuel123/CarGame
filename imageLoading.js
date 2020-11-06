var carPic = document.createElement("img");
var otherCarPic = document.createElement("img");
var carPicLoaded = false;
var wallPic = document.createElement("img")
var roadPic = document.createElement("img")
var goalPic = document.createElement("img")
var treePic = document.createElement("img")
var flagPic = document.createElement("img")

function carImageLoad(){
    carPic.onload = function(){
        carPicLoaded = true;
    }
    carPic.src = "./images/player1car.png"
    otherCarPic.onload = function(){
        carPicLoaded = true;
    }
    otherCarPic.src = "./images/player2car.png"
}

function trackLoadImages(){
    roadPic.src = "./images/track_road.png"
    wallPic.src = "./images/track_wall.png"
}
function loadExtraImages(){
    goalPic.src = "./images/track_goal.png"
    treePic.src = "./images/track_tree.png"
    flagPic.src = "./images/track_flag.png"
}
function loadImages(){
    carImageLoad();
    trackLoadImages();
    loadExtraImages();
}
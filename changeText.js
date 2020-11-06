
  //Change Background Text
  function changeBackgroundText() {
    let textBg = document.getElementById("text-bg");
    if (textBg.innerHTML == "3") textBg.innerHTML = "2";
    else if (textBg.innerHTML == "2") textBg.innerHTML = "1";
    else if (textBg.innerHTML == "1") textBg.innerHTML = "READY";
    else if (textBg.innerHTML == "READY") textBg.innerHTML = "TO";
    else if (textBg.innerHTML == "TO") textBg.innerHTML = "RACE?";
    else if (textBg.innerHTML == "RACE?") textBg.innerHTML = "3";
  }
  //calling all the functions sir in popup i want to display username
  
  function checkbg() {
    
    changeBackgroundText();
  }
  //changes the background color and text every 0.5 seconds
  setInterval(checkbg, 750);
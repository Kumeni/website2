let wallpapers = [
    "./images/Preskil-beach-resort-wallpaper-08.jpg",
    "./images/wallpaper1.jpg",
    "./images/wallpaper2.jpg",
];

let landingContainer = document.getElementById("landingContainer");
let toggleIn = document.getElementById("toggle"), toggleTarget = document.getElementById("toggleTarget");
let lightBox = document.getElementsByClassName("lightBox");
let toggle = 0,swapId = 0,k;


function imageSwap(){
    landingContainer.style.backgroundImage = `url(${wallpapers[swapId]})`;

    for(k=0;k<3;k++){
        if( k == swapId ){
            lightBox[k].style.backgroundColor = "white";
        } else {
            lightBox[k].style.backgroundColor = "rgba(255, 255, 255, 0.575)";
        }
    }

    swapId = swapId + 1;
    if(swapId == 3){
        swapId = 0;
    }
}
setInterval( imageSwap ,15000);


function handleToggleClick(){
   if(toggle == 0){
        toggleTarget.style.display = "block";
        toggleIn.style.color = "blue";
       toggle = 1;
    } else if (toggle == 1){
        toggleTarget.style.display = "none";
        toggleIn.style.color = "black";
       toggle =0;
   }
}

function handleToggleFocus(){
    toggleTarget.style.display = "block"; 
}
function handleToggleBlur(){
    toggleTarget.style.display = "none";
}

function handleSubscribeClick(){
    console.log("welcome");
}
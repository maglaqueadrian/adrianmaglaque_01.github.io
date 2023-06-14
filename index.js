function EZSounds() {
  document.getElementById("adrianmaglaquemp3").play();
}

//create favorite sound with play and pause function

//1. create variable for the music assets
//2. create variable for the buttons
//3. since music will be played when the button is clicked {
//       so that means that the current situation of music = not playing / its paused since the button is not clicked yet when you run the page
// }
//4.since we know that the music is paused we need to set the if statement that if music is paused then if we run/call the function the music should play using .play()
// and change the button text to Pause since the audio is playing

//5.so after clicking the button the audio should be playing and because of that we know that {
//    the current situation of the audio is = playing (so we need to change the else statement to pause and if we call the function again and the current situation is the audio is playing then the audio should be paused and change button text to Play since the audio is pause)
// }

//                       EXPLAINATION:
// 1st Situation = THE audio is always PAUSED unless CLICKED or AUTOPLAY!
//So Therefore = (IF) button is clicked its gonna play() the audio

//2nd Situation = Audio is Currently playing
//So Therefore =(ELSE) if its not pause then if the button is clicked then Pause() the audio

// function killbill() {
//   var killbill = document.getElementById("killbill");
//   var playbutton = document.getElementById("playbutton");

//   //audio is always pause unless you click it or autoplay it
//   if (killbill.paused) {
//     //if paused
//     killbill.play(); //if clicked or function is called play audio
//     playbutton.innerHTML = "Pause Killbill"; //and display the text 'PAUSE'
//   } else {
//     //if its not paused
//     killbill.pause(); // then if clicked or function is called pause the audio
//     playbutton.innerHTML = "Play Killbill"; //and display the text 'PLAY'
//   }
// }

function cupid(icon) {
  var cupid = document.getElementById("cupid");
  var playbutton = document.getElementById("playbutton2");

  var pauseIcon = document.getElementById("pause");

  // audio is always pause unless you click it or autoplay it

  if (cupid.paused) {
    //if paused

    cupid.play(); //if clicked or function is called play audio
    // playbutton.innerHTML = "Pause cupid"; //and display the text 'PAUSE'
    document.getElementById("play").innerHTML = "pause";
    document.getElementById("play").style.color = "red";
    document.getElementById("play").style.transition = ".5s ease-in";
    console.log("cupid played");
  } else {
    //if its not paused
    cupid.pause(); // then if clicked or function is called pause the audio
    // playbutton.innerHTML = "play"; //and display the text 'PLAY'
    document.getElementById("play").innerHTML = "play_arrow";
    document.getElementById("play").style.color = "pink";
    console.log("cupid paused");
  }
}

let darkmode = document.getElementById("darkmode");

darkmode.addEventListener("click", () => {
  let intro = document.getElementById("intro");
  // let body = document.querySelector("body");
  intro.classList.toggle("darkmode");
  darkmode.style.color = "gold";
});

let button1 = document.querySelector(".d1");

button1.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.toggle("lel");
  console.log("Darkmode Clicked");
});

let close = document.getElementById("close");

close.addEventListener("clicked", () => {
  window.close;
});
// function goback(dkimode) {
//   let dkmode = document.getElementById("darkmode");
//   dkimode.style.color = "#fff";
// }

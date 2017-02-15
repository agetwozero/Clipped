//
//Function to play the selected sound
//
function playSound(audioSrc)
{
  var audioEl = document.getElementById(audioSrc);
  if(audioEl.paused){
    audioEl.play();
  }else {
    audioEl.pause();
    audioEl.load();
  }
}
//TODO: add function to keep playing when pressed

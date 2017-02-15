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

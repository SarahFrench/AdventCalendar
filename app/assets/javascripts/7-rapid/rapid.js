document.addEventListener('DOMContentLoaded', function(){
  const TEN_SECONDS_IN_MS = 10000;
  const ONE_SECONDS_IN_MS = 1000;

  let game = {
    firstClick: 0,
    numberOfClicks: 0
  }
  let button = document.getElementById('rapid-click');

  button.addEventListener('click', function(event){
    let audio = document.getElementById('audio');
    if(game.firstClick === 0){
      game.firstClick = event.timeStamp;
      console.log("first click at " + game.firstClick)
    } else {
      if(event.timeStamp - game.firstClick < ONE_SECONDS_IN_MS){
        console.log("click within 10 seconds of first");
        game.numberOfClicks++;
      } else if (audio.currentTime === 0) {
        console.log("curr Time =" + audio.currentTime);
        playAudioWithDelayedRepeat(audio, 1000, 500, game.numberOfClicks);
      }
    }
  })
})

function playAudioWithDelayedRepeat(audio, delay, repeatDuration, numberRepeats){
  let audioPlaying = true
  let callback = function(){
    while(audioPlaying){
      for(let i=0; i < numberRepeats; i++){
        console.log(i);
        setTimeout(function(){
          console.log("loop " + i + ": "+ audio.currentTime);
          audio.currentTime = 0.9;
          audio.play();
        }, (repeatDuration*i));
      }
      audioPlaying = false;
    }
  }

  audio.play();
  setTimeout(callback, delay);
}

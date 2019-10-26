document.addEventListener('DOMContentLoaded', function(){
  const TEN_SECONDS_IN_MS = 10000;
  const ONE_SECONDS_IN_MS = 1000;

  let game = {
    firstClick: 0,
    numberOfClicks: 0
  }
  let button = document.getElementById('rapid-click');

  button.addEventListener('click', function(event){
    let fartAudio = document.getElementById('audio-1');
    let omgAudio = document.getElementById('audio-2');
    if(game.firstClick === 0){
      game.firstClick = event.timeStamp;
      console.log("first click at " + game.firstClick)
    } else {
      if(event.timeStamp - game.firstClick < ONE_SECONDS_IN_MS){
        console.log("click within 10 seconds of first");
        game.numberOfClicks++;
      } else if (fartAudio.currentTime === 0) {
        console.log("curr Time =" + fartAudio.currentTime);
        playAudioWithDelayedRepeat(fartAudio, 500, 150, game.numberOfClicks, omgAudio);
      }
    }
  })
})

function playAudioWithDelayedRepeat(repeatAudio, delay, repeatDuration, numberRepeats, finalAudio){
  let audioPlaying = true
  let callback = function(){
    while(audioPlaying){
      for(let i=0; i < numberRepeats; i++){
        console.log(i);
        setTimeout(function(){
          console.log("loop " + i + ": "+ repeatAudio.currentTime);
          repeatAudio.currentTime = 0.6;
          repeatAudio.play();
        }, (repeatDuration*i));
      }
      audioPlaying = false;
    }

  }

  repeatAudio.play();
  setTimeout(callback, delay);
  setTimeout(function(){finalAudio.play();}, delay+(repeatDuration*numberRepeats));
}

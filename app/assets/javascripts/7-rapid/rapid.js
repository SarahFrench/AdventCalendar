document.addEventListener('DOMContentLoaded', function(){
  const TEN_SECONDS_IN_MS = 10000;

  let game = {
    firstClick: 0,
    numberOfClicks: 0,
    audioPlaying: false
  }
  let button = document.getElementById('rapid-click');

  button.addEventListener('click', function(event){
    if(game.firstClick === 0){
      game.firstClick = event.timeStamp;
      console.log("first click at " + game.firstClick)
    } else {
      if(event.timeStamp - game.firstClick < TEN_SECONDS_IN_MS){
        console.log("click within 10 seconds of first");
        game.numberOfClicks++;
      } else {
        game.audioPlaying = true;
        let audio = document.getElementById('audio');
        while(game.audioPlaying){
          for(let i=0; i < game.numberOfClicks; i++){
            console.log(i);
            setTimeout(function(){console.log(audio.currentTime);audio.currentTime = 4; audio.play()}, 2000)
          }
          game.audioPlaying = false;
        }
      }
    }
  })
})

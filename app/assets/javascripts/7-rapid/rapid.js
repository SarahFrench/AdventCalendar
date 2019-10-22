document.addEventListener('DOMContentLoaded', function(){
  const TEN_SECONDS_IN_MS = 10000;
  let game = {
    firstClick: 0,
    numberOfClicks: 0
  }
  document.addEventListener('click', function(event){
    if(game.firstClick === 0){
      game.firstClick = event.timeStamp;
      console.log("first click at " + game.firstClick)
    } else {
      if(event.timeStamp - game.firstClick < TEN_SECONDS_IN_MS){
        console.log("click within 10 seconds of first");
        game.numberOfClicks++;
      } else {
        console.log("click >10 seconds after first");
        console.log(game);
      }
    }
  })
})

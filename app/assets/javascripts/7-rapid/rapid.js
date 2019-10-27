document.addEventListener('DOMContentLoaded', function(){
  const TEN_SECONDS_IN_MS = 10000;
  const FIVE_SECONDS_IN_MS = 5000;
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
      if(event.timeStamp - game.firstClick < FIVE_SECONDS_IN_MS){
        console.log("click within 10 seconds of first");
        game.numberOfClicks++;
      } else if (fartAudio.currentTime === 0) {
        console.log("curr Time =" + fartAudio.currentTime);
        liftOff();
        playAudioWithDelayedRepeat(fartAudio, 600, 300, game.numberOfClicks, omgAudio);
      }
    }
  })
})

function liftOff(){
  let groundedSVGPaths = document.getElementsByClassName('grounded');
  let flyingSVGPaths = document.getElementsByClassName('flying');
  for (let i = 0; i < groundedSVGPaths.length; i++){
    groundedSVGPaths[i].setAttribute('opacity', 0);
  }
  for (let i = 0; i < flyingSVGPaths.length; i++){
    flyingSVGPaths[i].setAttribute('opacity', 1);
  }

}

function wobbleToilet(){
  //I will never make a function with a better name in my life
  let options = ["rotate(-15 250 350)", "rotate(10 200 500)", "rotate(-20 200 300)", "rotate(-5)"]
  let rotator = document.getElementById('rotator');
  rotator.setAttribute('transform', options[3]);
  setTimeout(function(){rotator.setAttribute('transform', options[0])}, 100);
  setTimeout(function(){rotator.setAttribute('transform', options[2])}, 200);
  setTimeout(function(){rotator.setAttribute('transform', options[1])}, 300);
  setTimeout(function(){rotator.setAttribute('transform', "rotate(0)")}, 400);
}

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
          wobbleToilet();
        }, (repeatDuration*i));
      }
      audioPlaying = false;
    }
  }

  repeatAudio.playbackRate = 0.5;
  repeatAudio.play();
  setTimeout(callback, delay);
  setTimeout(function(){finalAudio.play();}, delay+(repeatDuration*numberRepeats));
}

function recordNewScore(name, score){
    let response = POSTRequest(name, score);
    response.then( json => {
      if(!jsonIsError(json)){
        console.log("No error when logging Name: " + json.name + ", Score: " + json.score);
      } else {
        console.log("Error");
        console.log(json);
      }
    });
}

function jsonIsError(json){
  return (
    (json.name === undefined || json.score === undefined) ||
    (typeof json.name === 'array' || typeof json.score === 'array')
  )
}

async function POSTRequest(name, score){
  let csrfToken;
  let metas= document.getElementsByTagName('meta');
  for(let i=0; i < metas.length; i++){
    if(metas[i].name === "csrf-token"){
      csrfToken= metas[i].content;
    }
  }

  const response = await fetch('/click_scores.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'X-CSRF-Token': `${csrfToken}`
      },
      body: `{"click_score":{"name":"${name}", "score":"${score}"}}`
    });

    return await response.json();
}

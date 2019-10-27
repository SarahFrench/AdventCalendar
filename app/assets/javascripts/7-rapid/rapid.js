let score;
let highScoresVisible = false;

document.addEventListener('DOMContentLoaded', function(){
  alert("This works best on a Desktop, and audio doesn't play in Safari because they block loading of audio and video files")

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
    let scoreElement = document.getElementById('player-score');
    if(game.firstClick === 0){
      game.firstClick = event.timeStamp;
      game.numberOfClicks++;
      showScoreElements();
      updateScoreElement(game.numberOfClicks,scoreElement);
    } else {
      if(event.timeStamp - game.firstClick < FIVE_SECONDS_IN_MS){
        game.numberOfClicks++;
        updateScoreElement(game.numberOfClicks,scoreElement);
      } else if (fartAudio.currentTime === 0) {
        liftOff();
        playAudioWithDelayedRepeat(fartAudio, 600, 300, game.numberOfClicks, omgAudio);
        manageTopFiveScores(game.numberOfClicks);
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

function showScoreElements(){
  let elements = document.getElementsByClassName('live-score');
  for(let i=0; i < elements.length; i++){
    elements[i].style.display = "block";
  }
}

function updateScoreElement(score, scoreElement){
  scoreElement.innerText = score;
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
        setTimeout(function(){
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

async function manageTopFiveScores(newScore){
  //Show header
  document.getElementById('scoreboard').style.display = "block";

  //Get top 5 data
  let topFive = await getTopFiveScores();

  //Is new score a highscore?
  if(isNewHighscore(newScore,topFive)){
    score = newScore;
    topFive = insertNewHighscore(newScore,topFive);

    //Show highscore submission
    document.getElementById('score-submit').style.display = "block";
  }
  //Display data
  if(!highScoresVisible){
    let scoreList = document.getElementById('scores-list');
    topFive.forEach(score => {
      let rowElement = document.createElement("tr");
      let nameElement = document.createElement("td");
      let scoreElement = document.createElement("td");
      nameElement.innerText = score.name;
      scoreElement.innerText = score.score;
      rowElement.appendChild(nameElement);
      rowElement.appendChild(scoreElement);
      rowElement.classList.add("rapid__text");
      if(score.name === "You"){
        rowElement.style.color = "red";
      }
      scoreList.appendChild(rowElement);
    })
    highScoresVisible = true;
  }
}

function isNewHighscore(newScore, topFive){
  if(topFive.length < 5){
    return true;
  } else {
    let smallestHighscore = topFive[4].score;
    return newScore > smallestHighscore;
  }
}

function insertNewHighscore(newScore, topFive){
  let newScoreObject = {name: "You", score: newScore};
  let newArray =[];
  while (topFive.length > 0){
    let record = topFive.shift();
    if(record.score > newScoreObject.score){
      newArray.push(record);
    } else if (!newArray.includes(newScore)){
      newArray.push(newScore);
      newArray.push(record);
    } else {
      newArray.push(record);
    }
  }
  if(topFive.length < 5 && !newArray.includes(newScore)){
    //Scenario: score is highscore by default due to <5 highscores
    newArray.push(newScore);
  }

  newArray[newArray.indexOf(newScore)] = newScoreObject;
  let firstFivePositions = newArray.slice(0,5);
  return firstFivePositions;
}

async function getTopFiveScores(){
  const response = await fetch('/top-five-rapid-clicks.json', {
      method: 'GET'
    });
    return await response.json();
}


function getName(){
  let name = document.getElementById('player-name').value;
  if(name === ""){
    return false;
  } else {
    return name;
  }
}

function showMessage(message){
  let el = document.getElementById('message');
  el.innerText = message;
}

function removeMessage(){
  let message = document.getElementById('message');
  message.innerText = "";
}

function disableSubmit(){
  let button = document.getElementById('player-name-submit');
  button.disabled = true;
}

function recordNewScore(){
  let name = getName();
  if(name){
    removeMessage();
    let response = POSTRequest(name, score);
    response.then( json => {
      if(!jsonIsError(json)){
        showMessage("Score recorded!");
        disableSubmit();
      } else {
        showMessage("Sorry, an error occurred...")
        console.log("Error when saving high score:");
        console.log(json);
      }
    });
  } else {
    showMessage("Make sure you've entered a valid name")
  }
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

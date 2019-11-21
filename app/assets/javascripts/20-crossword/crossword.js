document.addEventListener('DOMContentLoaded', function(){
  loadAnswers();

  let clues = document.getElementsByClassName('clue');
  for(let i=0; i < clues.length; i++){
    clues[i].addEventListener('click', function(event){
      removeHighlight();
      let group = event.target.id.replace("clue-", "");
      addHighlight(group);
    })
  }

  let removeHighlightButton = document.getElementById('remove-highlight');
  removeHighlightButton.addEventListener('click', function(){
    removeHighlight();
  })

  function addHighlight(group){
    let boxes = document.getElementsByClassName(group)

    for(let i=0; i < boxes.length; i++){
      boxes[i].classList.add('crossword__highlight');
    }
  }

  function removeHighlight(){
    let boxes = document.getElementsByClassName('crossword__highlight');
    while (boxes[0]) {
      boxes[0].classList.remove('crossword__highlight');
    }
  }

})

function clearAnswers(){
  saveAnswers('[]');
  fillInBoxes({});
}

function removeErrorHighlight(){
  let boxes = document.getElementsByClassName('crossword__incorrect');
  while (boxes[0]) {
    boxes[0].classList.remove('crossword__incorrect');
  }
}

document.addEventListener('click', function(){
  removeErrorHighlight();
})


document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById('check-answers-button');
  button.addEventListener('click', function(){
    let correctAnswers = getAnswers();
    let submittedLetters = getLetters();


    correctAnswers.then(answers => {
      let correctLetters = {};

      Object.keys(answers).forEach(function(k){
        if (answers[k] == submittedLetters[k].toLowerCase()){
          correctLetters[k] = answers[k];
        }
      })

      return correctLetters

    }).then( correctLetters => {

      saveAnswers(correctLetters)
      fillInBoxes(correctLetters)

      function changeMessage(message){
        let el = document.getElementsByClassName('crossword__message')[0];
        el.innerText = message;
      }

      if(Object.keys(correctLetters).length === 94){
        changeMessage("Yay, you've completed the crossword! 100% correct!")
      } else {
        changeMessage("I've removed all the incorrect letters from the board. Click anywhere to remove the error highlight")
      }

    })


    async function getAnswers(){
      const response = await fetch(`/crossword-answers`, {
          method: 'GET'
        });
      return await response.json();
    }

    function getLetters(){
      const inputs = document.querySelectorAll('input[id^=letter]')
      let answers = {};
      for(let i = 0; i < inputs.length; i++){
        answers[inputs[i].id] = inputs[i].value;
      }
      return answers;
    }


  })
})




function fillInBoxes(object){
  for(let i = 1; i < 95; i++){
    let answer = object[`letter-${i}`];
    let el = document.querySelector(`input[id=letter-${i}]`);
    if (answer === undefined){
      //wipe letter
      el.value = "";
      el.classList.add('crossword__incorrect')
    } else {
      //fill in correct letter
      el.value = answer;
    }
  }
}

function saveAnswers(json){
  window.localStorage.setItem("advent-crossword", JSON.stringify(json))
}

function loadAnswers(){
  if(localStorage['advent-crossword'] != undefined){
    let answers = JSON.parse(window.localStorage["advent-crossword"]);
    fillInBoxes(answers);
  }
}

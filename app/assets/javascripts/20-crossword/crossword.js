document.addEventListener('DOMContentLoaded', function(){
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
      boxes[i].classList.add('highlight');
    }
  }

  function removeHighlight(){
    let boxes = document.getElementsByClassName('highlight');
    while (boxes[0]) {
    boxes[0].classList.remove('highlight');
    }
  }

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

      for(let i = 1; i < 95; i++){
        let answer = correctLetters[`letter-${i}`];
        let el = document.querySelector(`input[id=letter-${i}]`);
        el.value = typeof answer != 'undefined' ? answer : "";
      }

      console.log(correctLetters);
    })


  })
})

function getLetters(){
  const inputs = document.querySelectorAll('input[id^=letter]')
  let answers = {};
  for(let i = 0; i < inputs.length; i++){
    answers[inputs[i].id] = inputs[i].value;
  }
  return answers;
}

async function getAnswers(){
  const response = await fetch(`/crossword-answers`, {
      method: 'GET'
    });
  return await response.json();
}

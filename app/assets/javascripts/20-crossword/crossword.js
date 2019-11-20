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
  let button = document.getElementsById('check-answers-button');
  document.addEventListener('click', function(){
    const answers = getAnswers();
    const letters = getLetters();
    const correctLetters = {};

    //TODO: iterate through k:v of letters, if matches answers then set in correctLetters
    //boolean to track if any errors found
    //if boolean true, use correctLetters to replace text in input fields.
    //if false then 100% correct - show congratulations message
  })
})

function getLetters(){
  const inputs = document.getElementsByTagName('input');
  let answers = {};
  for(let i = 0; i < inputs.length; i++){
    answers[inputs[i].id] = inputs[i].value;
  }
  return answers;
}

async function getAnswers(){
  const response = await fetch(`/crossword-answers.json`, {
      method: 'GET'
    });
  return await response.json();
}

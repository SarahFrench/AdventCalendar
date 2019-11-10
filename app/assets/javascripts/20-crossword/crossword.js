document.addEventListener('DOMContentLoaded', function(){
  let clues = document.getElementsByClassName('clue');
  for(let i=0; i < clues.length; i++){
    clues[i].addEventListener('click', function(event){
      removeHighlight();
      let group = event.target.id.replace("clue-", "");

      addHighlight(group);
    })
  }

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

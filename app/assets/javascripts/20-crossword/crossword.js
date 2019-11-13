document.addEventListener('DOMContentLoaded', function(){
  let responsiveContainer = document.getElementById('responsive-container');
  if (window.orientation !== undefined) {
    //column on mobile
    responsiveContainer.classList.add("crossword__flex--column");
  } else {
    //row on desktop
    responsiveContainer.classList.add("crossword__flex--row");
  }
})


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

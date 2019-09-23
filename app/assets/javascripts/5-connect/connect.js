document.addEventListener("DOMContentLoaded", function(){
  let wall = document.getElementById('wall');
  let cardElements = document.getElementsByClassName('card');
  for(let i=0; i<cardElements.length; i++){
    let cardData = coren.cards[i];
    let cardClasses = getCardPositionClasses(i);
    cardElements[i].innerText = cardData.text;
    cardElements[i].id = cardData.id;
    cardElements[i].classList.add(cardClasses.row);
    cardElements[i].classList.add(cardClasses.col);
    cardElements[i].addEventListener('click', function(event){
      if(coren.selections.cards.length < 4){
        console.log(event.target.id);
        selectCard(event.target);
      } else {
        resetSelectedCards();
      }
    })
  }
})

function getCardPositionClasses(index){
  let col, row;
  col = (index%4)+1;
  row = (Math.ceil((index-3)/4))+1;
  return {
    col: `col_${col}`,
    row: `row_${row}`
  }
}

function resetSelectedCards(){
  coren.selections.cards.forEach(function(cardID){
    let element = document.getElementById(cardID);
    element.classList.remove('selected');

  })
  coren.selections.cards = [];
  coren.selections.cardSelected = false;
}

function selectCard(card){
  if(coren.selections.cards.length < 4){
    coren.selections.cards.push(card.id)
  }
  card.classList.add('selected');
}

let coren = {
  rowSorted: {
    row1: false,
    row2: false,
    row3: false,
    row4: false
  },
  selections: {
    cardSelected: false,
    cards: []
  },
  cards: [
    { id: 1, text: "card 1", set: 1 },
    { id: 2, text: "card 2", set: 2 },
    { id: 3, text: "card 3", set: 3 },
    { id: 4, text: "card 4", set: 4 },
    { id: 5, text: "card 5", set: 1 },
    { id: 6, text: "card 6", set: 2 },
    { id: 7, text: "card 7", set: 3 },
    { id: 8, text: "card 8", set: 4 },
    { id: 9, text: "card 9", set: 1 },
    { id: 10, text: "card 10", set: 2 },
    { id: 11, text: "card 11", set: 3 },
    { id: 12, text: "card 12", set: 4 },
    { id: 13, text: "card 13", set: 1 },
    { id: 14, text: "card 14", set: 2 },
    { id: 15, text: "card 15", set: 3 },
    { id: 16, text: "card 16", set: 4 },
  ]
}

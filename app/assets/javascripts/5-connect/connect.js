document.addEventListener("DOMContentLoaded", function(){
  let wall = document.getElementById('wall');
  let cardElements = document.getElementsByClassName('card');
  let coren = new Game;
  for(let i=0; i<cardElements.length; i++){
    let cardData = coren.cards[i];
    let cardClasses = coren.getCardPositionClasses(i);
    cardElements[i].innerText = cardData.text;
    cardElements[i].id = cardData.id;
    cardElements[i].classList.add(cardClasses.row);
    cardElements[i].classList.add(cardClasses.col);
    cardElements[i].addEventListener('click', function(event){
      if(coren.selections.cards.length < 4){
        coren.selectCard(event.target);
      } else {
        coren.resetSelectedCards();
        coren.selectCard(event.target);
      }
    })
  }
  // coren.cards.forEach(function(card, index) {
  //   let classes = getCardPositionClasses(index);
  //   let el = new element TODO: find out syntax for making a new element of type Node
  //   el.classList.add(classes.row);
  //   el.classList.add(classes.col);
  //   el.addEventListener('click', function(event){
  //       selectCard(event.target);
  //   })
  //   wall.appendChild(el);
  // })
})

class Game {
  constructor(){
    this.rowSorted = {
        row1: false,
        row2: false,
        row3: false,
        row4: false
      };
    this.selections = {
        cardSelected: false,
        cards: []
      };
      this.cards = [
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
        ];
  }

  getCardPositionClasses(index){
    let col, row;
    col = (index%4)+1;
    row = (Math.ceil((index-3)/4))+1;
    console.log('col=' + col);
    console.log('row=' + row);
    return {
      col: `col_${col}`,
      row: `row_${row}`
    }
  }

  resetSelectedCards(){
    // depend on HTML being set up
    this.selections.cards.forEach(function(cardID){
      let element = document.getElementById(cardID);
      element.classList.remove('selected');

    })
    this.selections.cards = [];
    this.selections.cardSelected = false;
  }

  selectCard(card){
    if(this.selections.cards.length < 4){
      this.selections.cards.push(card.id)
    }
    card.classList.add('selected');
  }

}

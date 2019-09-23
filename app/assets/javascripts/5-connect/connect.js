document.addEventListener("DOMContentLoaded", function(){
  let wall = document.getElementById('wall');
  let cardElements = document.getElementsByClassName('card');
  let coren = new Game;
  for(let i=0; i<cardElements.length; i++){
    let cardData = coren.cards[i];
    let cardClasses = coren.getCardPositionClasses(i);
    cardElements[i].innerText = cardData.text;
    cardElements[i].id = cardData.id;
    // cardElements[i].classList.add(cardClasses.row);
    // cardElements[i].classList.add(cardClasses.col);
    cardElements[i].addEventListener('click', function(event){
      if(coren.selections.cards.length < 3){
        coren.selectCard(event.target);
      } else {
        coren.selectCard(event.target);
        if(coren.areCardsSameGroup()){
            coren.positionSortedCards();
        }
        setTimeout(function(){coren.resetSelectedCards(), 3000});
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
    this.isRowSorted = [false,false,false];
    this.selections = {
        cardSelected: false,
        cards: []
      };
    this.cards = [
        { id: 1, text: "A", group: 1 },
        { id: 2, text: "B", group: 2 },
        { id: 3, text: "C", group: 3 },
        { id: 4, text: "D", group: 4 },
        { id: 5, text: "A", group: 1 },
        { id: 6, text: "B", group: 2 },
        { id: 7, text: "C", group: 3 },
        { id: 8, text: "D", group: 4 },
        { id: 9, text: "A", group: 1 },
        { id: 10, text: "B", group: 2 },
        { id: 11, text: "C", group: 3 },
        { id: 12, text: "D", group: 4 },
        { id: 13, text: "A", group: 1 },
        { id: 14, text: "B", group: 2 },
        { id: 15, text: "C", group: 3 },
        { id: 16, text: "D", group: 4 },
      ];

  }

  getCardPositionClasses(index){
    let col, row;
    col = (index%4)+1;
    row = (Math.ceil((index-3)/4))+1;
    return {
      col: `col_${col}`,
      row: `row_${row}`
    }
  }

  resetSelectedCards(){
    // depend on HTML being set up
    this.selections.cards.forEach(function(card){
      let element = document.getElementById(card.id);
      element.classList.remove('selected');

    })
    this.selections.cards = [];
    this.selections.cardSelected = false;
  }

  isCardAlreadySelected(card){
    if(this.selections.cards.length == 0){
      return false
    } else {
      let searchForCard = this.selections.cards.filter(x => x.id == parseInt(card.id) );
      return searchForCard.length > 0 ? true : false;
    }
  }

  selectCard(card){
    if(this.selections.cards.length < 4  && !this.isCardAlreadySelected(card)){
      if(this.isCardAlreadySelected(card)){
        console.log("already selected");
      }
      let selectedCardData = this.cards.filter(x => x.id == parseInt(card.id) )[0];
      this.selections.cards.push(selectedCardData);
    }
    card.classList.add('selected');
  }

  areCardsSameGroup(){
    let groups = []
    this.selections.cards.forEach( card => {
      console.log('card group=' + card.group);
      groups.push(card.group);
    })
    let selectedSets = new Set(groups);
    if(selectedSets.size === 1){
      console.log("all same set!");
      return true;
    } else {
      console.log("cards don't match");
      return false;
    }
  }

  positionSortedCards(){

    let freeRow = (this.isRowSorted.indexOf(false)) + 1;
    this.isRowSorted[freeRow-1] = true;
    if(freeRow > 0 && freeRow < 3){
      this.selections.cards.forEach( card => {
        let element = document.getElementById(card.id);
        element.classList.add(`row_${freeRow}`);
        element.classList.remove('selected');
        element.classList.add('correct');
      })
    } else if (freeRow == 3) {
      this.selections.cards.forEach( card => {
        let element = document.getElementById(card.id);
        element.classList.add(`row_${freeRow}`);
      })
      let cards = document.getElementsByClassName('card')
      for(let i=0; i < cards.length; i++){
        cards[i].classList.add('correct')
      }
    }

  }

}

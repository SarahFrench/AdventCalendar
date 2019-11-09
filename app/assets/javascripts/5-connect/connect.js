
document.addEventListener("DOMContentLoaded", function(){
  if(window.location.pathname === "/days/5"){
      let wall = document.getElementById('wall');
      let coren = new Game;
      coren.cards.forEach(function(card, index) {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add('card');
        cardElement.innerText = card.text;
        cardElement.addEventListener('click', function(event){
          const isNotAlreadySorted = !event.target.classList.contains('card__correct');
          if(coren.selections.cards.length < 3 && isNotAlreadySorted){
            coren.selectCard(event.target);
          } else if(isNotAlreadySorted) {
            coren.selectCard(event.target);
            if(coren.selections.cards.length === 4 && coren.areCardsSameGroup()){
                coren.positionSortedCards();
                setTimeout(function(){coren.resetSelectedCards(), 3000});
            } else if (coren.selections.cards.length === 4 && !coren.areCardsSameGroup()){
              setTimeout(function(){coren.resetSelectedCards(), 3000});
            }
          }
        })
        wall.appendChild(cardElement);
      })
      let checkButton = document.getElementById('checkButton');
      checkButton.addEventListener('click', function(){
        coren.checkAnswer();
      });

      let skipButton = document.getElementById('skipButton');
      skipButton.addEventListener('click', function(){
        coren.skip();
      });
  }
});

class Game {
  constructor(){
    this.answers = {
      1: [/^v{1,10}\s+(good|gd)\s+(Sunday|Sun)*\s*(eve|evening)*\s*(mah|my)*\s*(bois|boys|boiz)*$/i, 'vvv good Sunday evening my bois','vvv good evening mah bois','vvv good evening my bois','vvv good'],
      2: ['hinge','early dating','dating app','dating chat','hinge','chat','messages'],
      3: ['new years day','nyd','January','Jan','anniversary','new years','1st','4th date','date 4' ],
      4: ['edgy dates','dates', 'we did', 'date', 'activities'],

    };
    this.currentRowToConnect = 1;
    this.questionsSorted = new Set([]);
    this.promptsByRow = {2:"Great! Now, row 2: ", 3:"Row 3: ", 4:"FINAL ROW 4 MAH BOIS:"};
    this.answersByQuestion = {1:"Answer: vvv good (Sunday) evening mah bois", 2:"Answer: Things we talked about on Hinge", 3:"Answer: Things from our date on New Years Day", 4:"Answer: Edgy dates"};
    this.sortedRowInfo = [{ row: 1, question:0}, { row: 2, question:0}, { row: 3, question:0}, { row: 4, question:0}];
    this.isRowSorted = [false,false,false];
    this.selections = {
        cardSelected: false,
        cards: []
      };
    this.cards = [
        { id: 1, text: "exceptionally, especially, exceedingly", group: 1 },
        { id: 2, text: "cable cars", group: 2 },
        { id: 3, text: "bicycle", group: 3 },
        { id: 4, text: "axes", group: 4 },
        { id: 5, text: "quality", group: 1 },
        { id: 6, text: "Bruce Forsyth", group: 2 },
        { id: 7, text: "walking tour", group: 3 },
        { id: 8, text: "pharaoh", group: 4 },
        { id: 9, text: "dusk", group: 1 },
        { id: 10, text: "surgery on mice", group: 2 },
        { id: 11, text: "brunch", group: 3 },
        { id: 12, text: "yogi", group: 4 },
        { id: 13, text: "dear gentlemen", group: 1 },
        { id: 14, text: "harvesting personal data", group: 2 },
        { id: 15, text: "champagne", group: 3 },
        { id: 16, text: "pottery", group: 4 }
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
      element.classList.remove('card__selected');

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
      let selectedCardData = this.cards.filter(x => x.id == parseInt(card.id) )[0];
      this.selections.cards.push(selectedCardData);
    }
    card.classList.add('card__selected');
  }

  areCardsSameGroup(){
    let groups = []
    this.selections.cards.forEach( card => {
      groups.push(card.group);
    })
    let selectedSets = new Set(groups);
    if(selectedSets.size === 1){
      return true;
    } else {
      return false;
    }
  }

  updateGameStats(freeRow){
    if (!this.questionsSorted.has(this.selections.cards[0].group)){
      this.questionsSorted.add(this.selections.cards[0].group);
      this.sortedRowInfo[freeRow-1] = {row: freeRow, question: this.selections.cards[0].group};
    } else {
      //adding 4th question
      for (let i=1; i <= 4; i++){
        if (!this.questionsSorted.has(i)){
          this.questionsSorted.add(i);
          this.sortedRowInfo[freeRow-1] = {row: freeRow, question: i}
        }
      }
    }
    this.isRowSorted[freeRow-1] = true;
  }

  positionSortedCards(){
    let freeRow = (this.isRowSorted.indexOf(false)) + 1;
    this.updateGameStats(freeRow);
    if(freeRow > 0 && freeRow < 3){
      this.selections.cards.forEach( card => {
        let element = document.getElementById(card.id);
        element.classList.add(`row_${freeRow}`);
        element.classList.remove('card__selected');
        element.classList.add('card__correct');
      })
    } else if (freeRow == 3) {
      this.selections.cards.forEach( card => {
        let element = document.getElementById(card.id);
        element.classList.add(`row_${freeRow}`);
      })
      this.updateGameStats(freeRow+1);
      this.addRowClassLastFourCards();
      let cards = document.getElementsByClassName('card')
      for(let i=0; i < cards.length; i++){
        cards[i].classList.add('card__correct')
      }
      this.showTextInputField();
      this.highlightRowToConnect();
    }
  }

  addRowClassLastFourCards(){
    let cards = document.getElementsByClassName('card');
    let lastFour = [];
    for(let i=0; i < cards.length; i++){
      if(!/row_/.test(cards[i].classList.value)){
        lastFour.push(cards[i]);
      }
    }
    lastFour.forEach(card => {
      card.classList.add('row_4');
    })
  }

  showTextInputField(){
    document.getElementById('connect').style.visibility = 'visible';
  }

  getTextInput(){
    let input = document.getElementById('input').value;
    return input;
  }

  clearTextInput(){
    let input = document.getElementById('input');
    input.value = "";
  }

  removeHighlightRowToConnect(){
    let cardsConnect = document.getElementsByClassName('row_' + this.currentRowToConnect);
    for(let i=0; i < cardsConnect.length; i++){
      cardsConnect[i].classList.remove('highlight');
    }
  }

  highlightRowToConnect(){
    let cardsConnect = document.getElementsByClassName('row_' + this.currentRowToConnect);
    for(let i=0; i < cardsConnect.length; i++){
      cardsConnect[i].classList.add('highlight');
    }
  }

  updatePromptText(text){
    let prompt = document.getElementById('prompt-text');
    prompt.innerText = text;
  }

  updateAnswerText(text){
    let answer = document.getElementById('answer-text');
    answer.innerText = text;
  }

  checkAnswer(){
    let row = this.currentRowToConnect;
    let question = this.sortedRowInfo[row-1].question;
    let answers = this.answers[question];
    let submission = this.getTextInput();
    let correct = false;
    answers.forEach( ans => {
      if(ans instanceof RegExp && ans.test(submission)){
        correct = true;
      } else if (new RegExp(ans, 'i').test(submission)) {
        correct = true;
      };
    })

    if(correct){
      this.removeHighlightRowToConnect();
      this.currentRowToConnect = row + 1;
      if (this.currentRowToConnect < 5){
        this.highlightRowToConnect();
        this.updatePromptText(this.promptsByRow[this.currentRowToConnect]);
      } else {
        this.updatePromptText("You win!")
      }
      this.updateAnswerText(this.answersByQuestion[question]);
      this.clearTextInput();
    } else {
      this.updateAnswerText("Nuh-uh, incorrect");
    }
  }

  skip(){
    let row = this.currentRowToConnect;
    let question = this.sortedRowInfo[row-1].question;
    this.removeHighlightRowToConnect();
    this.currentRowToConnect = row + 1;
    if (this.currentRowToConnect < 5){
      this.highlightRowToConnect();
      this.updatePromptText(this.promptsByRow[this.currentRowToConnect]);
      this.updateAnswerText(this.answersByQuestion[question]);
      this.clearTextInput();
    } else {
      this.updatePromptText("You win!");
      this.updateAnswerText(this.answersByQuestion[question]);
      this.clearTextInput();
    }
  }

}

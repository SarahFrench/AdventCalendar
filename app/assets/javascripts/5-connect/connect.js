document.addEventListener("DOMContentLoaded", function(){
  let wall = document.getElementById('wall');
  coren.cards.forEach(function(card, index) {
    console.log('card= ' + card);
    console.log('index= ' + index);
  })
})

let coren = {
  rowSorted: {
    row1: false,
    row2: false,
    row3: false,
    row4: false
  },
  cards: [
    {
      text: "card 1",
      set: 1
    },
    {
      text: "card 2",
      set: 1
    },
    {
      text: "card 3",
      set: 1
    },
    {
      text: "card 4",
      set: 1
    },
  ]
}

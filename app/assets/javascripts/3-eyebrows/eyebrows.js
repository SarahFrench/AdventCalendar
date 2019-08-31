let isHugoHappy = false;

document.addEventListener("DOMContentLoaded", function() {
  eyebrowRaising();
})

function eyebrowRaising(){
  var eyebrowDown = Snap.select('#eyebrow-down');
  var eyebrowUp = Snap.select('#eyebrow-up');

  var eyebrowDownPoints = eyebrowDown.node.getAttribute('d');
  var eyebrowUpPoints = eyebrowUp.node.getAttribute('d');

  var toUp = function(){
    eyebrowDown.animate({ d: eyebrowUpPoints }, 2000, mina.elastic, toDown);
  }

  var toDown = function(){
    eyebrowDown.node.setAttribute('d',eyebrowDownPoints);
    setTimeout(toUp, 5000);
  }

  toUp();
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function angryShake(){
  let hugo = document.getElementById('hugo');
  hugo.classList.add("animated");
  hugo.classList.add("shake");

  //need to remove fro repeat animation
  setTimeout(function(){
    hugo.classList.remove("animated");
    hugo.classList.remove("shake");
  }, 1000);
}

document.addEventListener("drop", function(event){
  var data = event.dataTransfer.getData("Text");
  if (data === 'frag' && event.target.id === 'hugo'){
    happyObject = document.getElementsByClassName("happy")
    Object.keys(happyObject).forEach(function (key){
      happyObject[key].setAttribute('opacity', 1);
    });

    unHappyObject = document.getElementsByClassName("unhappy")
    Object.keys(unHappyObject).forEach(function (key){
      unHappyObject[key].setAttribute('opacity', 0);
    });

    event.target.parentNode.appendChild(document.getElementById('frag'))

  } else if (data != 'frag' && event.target.id === 'hugo'){
    angryShake();
  }

});

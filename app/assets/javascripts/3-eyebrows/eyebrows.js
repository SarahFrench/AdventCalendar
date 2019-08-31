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

function makeHugoSVGHappy(){
  happyObject = document.getElementsByClassName("happy")
  Object.keys(happyObject).forEach(function (key){
    happyObject[key].setAttribute('opacity', 1);
  });

  unHappyObject = document.getElementsByClassName("unhappy")
  Object.keys(unHappyObject).forEach(function (key){
    unHappyObject[key].setAttribute('opacity', 0);
  });
}

function moveFragrance(){
  let hugoContainer = document.getElementById('hugo-container')
  hugoContainer.appendChild(document.getElementById('favourite'))
}

function showHeartRings(){
  let favourite = document.getElementById('favourite');
  let innerRing = document.getElementById('ring--inner');
  let outerRing = document.getElementById('ring--outer');

  favourite.setAttribute('overflow', 'show');

  //using sequential setTimeouts to change opacity as can't do multiple webkit CSS animations on the same element (?)
  setTimeout(function(){
    innerRing.setAttribute('opacity', 0.25);
    outerRing.setAttribute('opacity', 0.25);
  },500);
  setTimeout(function(){
    innerRing.setAttribute('opacity', 0.5);
    outerRing.setAttribute('opacity', 0.5);
  },700);
  setTimeout(function(){
    innerRing.setAttribute('opacity', 0.75);
    outerRing.setAttribute('opacity', 0.75);
  },800);
  setTimeout(function(){
    innerRing.setAttribute('opacity', 1);
    outerRing.setAttribute('opacity', 1);
  },900);
  }

document.addEventListener("drop", function(event){
  if (!isHugoHappy){
    var data = event.dataTransfer.getData("Text");
    if (data === 'favourite' && event.target.id === 'hugo'){
      makeHugoSVGHappy();
      moveFragrance();
      showHeartRings();
      isHugoHappy = true;
    } else if (data != 'favourite' && event.target.id === 'hugo'){
      angryShake();
    }
  }
});

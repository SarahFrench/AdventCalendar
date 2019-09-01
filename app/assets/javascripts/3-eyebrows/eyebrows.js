let isHugoHappy = false;

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById('hugo')) {

    showIntroMessage();
    setTimeout(hideIntroMessage, 5000);
    setTimeout(function(){
      fadeIntoView(document.getElementById('hugo'));
      let bottles = document.getElementsByClassName('bottle__svg');
      for (let i = 0; i < bottles.length; i++){
        fadeIntoView(bottles[i]);
      }
    }, 8000);

    // let allBottles = document.getElementsByClassName('bottle__container');
    // for (let i = 0; i < allBottles.length; i++){
    //   allBottles[i].addEventListener('mouseover', function(){
    //     // console.log(allBottles[i]);
    //   })
    // }
  }
})

function showIntroMessage(){
  let message1 = document.querySelector('#start-message #intro-text-1');
  let message2 = document.querySelector('#start-message #intro-text-2');
  let message3 = document.querySelector('#start-message #intro-text-3');
  let message4 = document.querySelector('#start-message #intro-text-4');

  setTimeout(function(){
    message1.classList.add('animated')
    message1.classList.add('fadeInDown')
  }, 0);
  setTimeout(function(){
    message2.classList.add('animated')
    message2.classList.add('fadeInDown')
  }, 2000);
  setTimeout(function(){
    message3.classList.add('animated')
    message3.classList.add('fadeInDown')
  }, 3000);
  setTimeout(function(){
    message4.classList.add('animated')
    message4.classList.add('fadeInDown')
  }, 5000);
}

function hideIntroMessage(){
  let message1 = document.querySelector('#start-message #intro-text-1');
  let message2 = document.querySelector('#start-message #intro-text-2');
  let message3 = document.querySelector('#start-message #intro-text-3');
  let message4 = document.querySelector('#start-message #intro-text-4');

  setTimeout(function(){
    message1.classList.add('animated');
    message1.classList.remove('fadeInDown');
    message1.classList.add('fadeOutDown');
  }, 0);
  setTimeout(function(){
    message2.classList.add('animated');
    message2.classList.remove('fadeInDown');
    message2.classList.add('fadeOutDown');
  }, 0);
  setTimeout(function(){
    message3.classList.add('animated');
    message3.classList.remove('fadeInDown');
    message3.classList.add('fadeOutDown');
  }, 0);
  setTimeout(function(){
    message4.classList.add('animated');
    message4.classList.remove('fadeInDown');
    message4.classList.add('fadeOutDown');
  }, 3000);
}

function fadeIntoView(element){
  //Needed if element is already animated via CSS
  setTimeout(function(){
    element.setAttribute('opacity', 0.25);
  },500);
  setTimeout(function(){
    element.setAttribute('opacity', 0.5);
  },700);
  setTimeout(function(){
    element.setAttribute('opacity', 0.75);
  },800);
  setTimeout(function(){
    element.setAttribute('opacity', 1);
  },900);
}

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

  //need to remove for repeat animation
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

  favourite.appendChild(innerRing);
  favourite.appendChild(outerRing);

  //using sequential setTimeouts to change opacity as can't do multiple webkit CSS animations on the same element (?)
  fadeIntoView(innerRing);
  fadeIntoView(outerRing);
}

function showThanksMessage(){
  let message1 = document.querySelector('#success-message #success-text-1');
  let message2 = document.querySelector('#success-message #success-text-2');

  setTimeout(function(){
    message1.classList.add('animated')
    message1.classList.add('fadeInDown')
  }, 0);
  setTimeout(function(){
    message2.classList.add('animated')
    message2.classList.add('fadeInDown')
  }, 2000);
}
  }

document.addEventListener("drop", function(event){
  if (!isHugoHappy){
    var data = event.dataTransfer.getData("Text");
    if (data === 'favourite' && event.target.id === 'hugo'){
      makeHugoSVGHappy();
      moveFragrance();
      showHeartRings();
      showThanksMessage();
      isHugoHappy = true;
    } else if (data != 'favourite' && event.target.id === 'hugo'){
      angryShake();
    }
  }
});

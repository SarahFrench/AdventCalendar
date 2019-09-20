let isHugoHappy = false;

document.addEventListener("DOMContentLoaded", function() {
  if (document.getElementById('eyebrows')) {

    showIntroMessage();
    setTimeout(hideIntroMessage, 5000);
    setTimeout(function(){
      fadeIntoView(document.getElementById('hugo'));
      let bottles = document.getElementsByClassName('bottle__svg');
      for (let i = 0; i < bottles.length; i++){
        fadeIntoView(bottles[i]);
      }
    }, 8000);
    setTimeout(function(){
      showPromptMessage(2000);
    }, 9000);
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

function swapToAngryEyes(){
  let neutralRightEyeEyebrow = document.getElementById("eye-eyebrow-right-neutral");
  let neutralLeftEye = document.getElementById("eye-left-neutral");
  let neutralLeftEyebrow = document.getElementById("eyebrow-left-neutral");
  let angryLeftEyeEyebrow = document.getElementById("eye-eyebrow-left-angry");
  let angryRightEyeEyebrow = document.getElementById("eye-eyebrow-right-angry");

  neutralRightEyeEyebrow.setAttribute('opacity', '0');
  neutralLeftEye.setAttribute('opacity', '0');
  neutralLeftEyebrow.setAttribute('opacity', '0');

  angryLeftEyeEyebrow.setAttribute('opacity', '1');
  angryRightEyeEyebrow.setAttribute('opacity', '1');
}

function swapToNeutralEyes(){
  let neutralRightEyeEyebrow = document.getElementById("eye-eyebrow-right-neutral");
  let neutralLeftEye = document.getElementById("eye-left-neutral");
  let neutralLeftEyebrow = document.getElementById("eyebrow-left-neutral");
  let angryLeftEyeEyebrow = document.getElementById("eye-eyebrow-left-angry");
  let angryRightEyeEyebrow = document.getElementById("eye-eyebrow-right-angry");

  angryLeftEyeEyebrow.setAttribute('opacity', '0');
  angryRightEyeEyebrow.setAttribute('opacity', '0');

  neutralRightEyeEyebrow.setAttribute('opacity', '1');
  neutralLeftEye.setAttribute('opacity', '1');
  neutralLeftEyebrow.setAttribute('opacity', '1');
}

function dragStart(event) {
  event.dataTransfer.setData("id", event.target.id);
  event.dataTransfer.setData("classes", event.target.classList);
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

  // document.getElementById('eye-left-neutral').setAttribute('opacity', 0);
  // document.getElementById('eyebrow-left-neutral').setAttribute('opacity', 0);
  // document.getElementById('eye-eyebrow-right-neutral').setAttribute('opacity', 0);
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
    message1.classList.add('fadeIn')
  }, 0);
  setTimeout(function(){
    message2.classList.add('animated')
    message2.classList.add('fadeIn')
  }, 2000);
}

function showPromptMessage(duration){
  let message1 = document.querySelector('#hugo-message #prompt-text-1');
  let message2 = document.querySelector('#hugo-message #prompt-text-2');

  message1.classList.add('animated');
  message1.classList.add('fadeIn');
  message2.classList.add('animated');
  message2.classList.add('fadeIn');

  setTimeout(function(){
    message1.classList.add('animated');
    message1.classList.remove('fadeIn');
    message1.classList.add('fadeOut');
    message2.classList.add('animated');
    message2.classList.remove('fadeIn');
    message2.classList.add('fadeOut');
    setTimeout(function () {
      message1.classList.remove('animated');
      message2.classList.remove('animated');
      message1.classList.remove('fadeOut');
      message2.classList.remove('fadeOut');
    }, 1000);
  }, duration)
}

function showRejectionMessage(duration){
  let message1 = document.querySelector('#hugo-message #reject-text-1');
  let message2 = document.querySelector('#hugo-message #reject-text-2');

  message1.classList.add('animated');
  message1.classList.add('fadeIn');
  message2.classList.add('animated');
  message2.classList.add('fadeIn');

  setTimeout(function(){
    message1.classList.add('animated');
    message1.classList.remove('fadeIn');
    message1.classList.add('fadeOut');
    message2.classList.add('animated');
    message2.classList.remove('fadeIn');
    message2.classList.add('fadeOut');
    setTimeout(function () {
      message1.classList.remove('animated');
      message2.classList.remove('animated');
      message1.classList.remove('fadeOut');
      message2.classList.remove('fadeOut');
    }, 1000);
  }, duration)
}

function showNoThanksMessage(duration){
  let message1 = document.querySelector('#hugo-message #nothanks-text-1');
  let message2 = document.querySelector('#hugo-message #nothanks-text-2');

  message1.classList.add('animated');
  message1.classList.add('fadeIn');
  message2.classList.add('animated');
  message2.classList.add('fadeIn');

  setTimeout(function(){
    message1.classList.add('animated');
    message1.classList.remove('fadeIn');
    message1.classList.add('fadeOut');
    message2.classList.add('animated');
    message2.classList.remove('fadeIn');
    message2.classList.add('fadeOut');
    setTimeout(function () {
      message1.classList.remove('animated');
      message2.classList.remove('animated');
      message1.classList.remove('fadeOut');
      message2.classList.remove('fadeOut');
    }, 1000);
  }, duration)
}

document.addEventListener("drop", function(event){
  if (!isHugoHappy && event.target.classList.contains('hugo')){
    var data = event.dataTransfer.getData("id");
    var data2 = event.dataTransfer.getData("classes");
    if (data === 'favourite'){
      makeHugoSVGHappy();
      moveFragrance();
      showHeartRings();
      showThanksMessage();
      isHugoHappy = true;
    } else if (/good/.test(data2)){
      angryShake();
      showNoThanksMessage(2000);
      setTimeout(swapToNeutralEyes, 2000);
    } else {
      swapToAngryEyes()
      angryShake();
      showRejectionMessage(2000);
      setTimeout(swapToNeutralEyes, 2000);
    }
  }
});

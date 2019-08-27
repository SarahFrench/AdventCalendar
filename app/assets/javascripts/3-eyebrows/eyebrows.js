document.addEventListener("DOMContentLoaded", function() {

  let page = document.getElementsByTagName("body")[0].getAttribute('data-page');

  var svg = document.getElementById("hugo");
  var s = Snap(svg);

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

})

document.addEventListener("drop", function(event){
  var data = event.dataTransfer.getData("Text");
  //some issues if event.target ends up being svg element
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

  }

});

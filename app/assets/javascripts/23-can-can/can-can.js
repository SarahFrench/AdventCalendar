document.addEventListener('DOMContentLoaded', function(){
  let rightCurtain = document.getElementById('right-curtain');
  let rightStartPos = window.visualViewport.height/2;
  
  let begin = document.getElementById('begin-button');

  begin.addEventListener('click', function(){
    let overlay = document.getElementById('overlay');
    document.body.removeChild(overlay);

    let audio = document.getElementsByTagName('audio')[0];
    audio.play();
  })
})

document.addEventListener('DOMContentLoaded', function(){
    let audio = document.getElementsByTagName('audio')[0];
    let curtainsOpen = false;
    audio.addEventListener('timeupdate', function(){
        if(audio.currentTime > 9.5 && audio.currentTime < 11){
          console.log("Open curtains");
          if (!curtainsOpen){
            moveLeftCurtain();
            moveRightCurtain();
          }
          curtainsOpen = true;
        }
    })
})

function moveLeftCurtain(){
  let leftCurtain = document.getElementById('left-curtain');
    let loopCount = 1;
    for(let i=0; i<1000; i++){
      setTimeout(function(){
        console.log(i);
        leftCurtain.style.left = -i;
      },10*loopCount, i);
      loopCount +=1;
    }
}

function moveRightCurtain(){
  let rightCurtain = document.getElementById('right-curtain');
  let rightStartPos = window.visualViewport.height/2;
  rightCurtain.style.left = rightStartPos;
    let loopCount = 1;
    for(let i=rightStartPos; i<(rightStartPos+1000); i++){
      setTimeout(function(){
        rightCurtain.style.left = i;
      },10*loopCount, i);
      loopCount +=1;
    }
}

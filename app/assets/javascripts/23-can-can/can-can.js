

function start(){
  let overlay = document.getElementById('overlay');
  document.body.removeChild(overlay);

  let audio = document.getElementsByTagName('audio')[0];
  audio.play();
}

document.addEventListener('DOMContentLoaded', function(){
    let audio = document.getElementsByTagName('audio')[0];
    let curtainsTrigger = document.getElementById('curtain-open-trigger');
    let curtainsOpen = false;
    audio.addEventListener('timeupdate', function(){
        if(audio.currentTime > 9.5 && audio.currentTime < 11){
          curtainsTrigger.checked = false;
        }
    })
})

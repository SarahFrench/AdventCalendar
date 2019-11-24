

function start(){
  let overlay = document.getElementById('overlay');
  document.body.removeChild(overlay);

  let audio = document.getElementsByTagName('audio')[0];
  audio.play();
}

document.addEventListener('DOMContentLoaded', function(){
    let audio = document.getElementsByTagName('audio')[0];
    let curtain = document.getElementById('curtain');
    audio.addEventListener('timeupdate', function(){
        if(audio.currentTime > 9.5 && audio.currentTime < 11){
          curtain.classList.add('curtain--up');
        }
    })
})

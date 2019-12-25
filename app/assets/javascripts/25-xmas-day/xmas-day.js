document.addEventListener('DOMContentLoaded', function(){
  let heart = document.getElementById('heart');
  let audio = document.getElementById('audio');
  heart.addEventListener('click', function(){
    if(!document.getElementById('xmas-easteregg')){
      let el = document.createElement('p');
      el.id = "xmas-easteregg";
      el.innerText = 'Sound on ;)';
      heart.appendChild(el);
    }
    setTimeout( function(){ audio.play(); }, 1500);
  })
})

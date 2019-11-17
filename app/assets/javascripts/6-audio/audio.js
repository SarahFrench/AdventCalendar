document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById('audio-button');
  let audio = document.getElementById('audio');
  let iconEasterEgg = document.getElementById('easter-egg');
  let audioEasterEgg = document.getElementById('audio-easteregg');
  let audioEasterEggContainer = document.getElementById('easter-egg-container');
  let form = document.getElementById('audio-answer-form')

  button.addEventListener('click', function(){
    audio.play();
    setTimeout(function(){
      form.style.visibility = "visible";
    }, (audio.duration*1000));

  })

  iconEasterEgg.addEventListener('click', function(){
    audioEasterEgg.play();
    setTimeout(function(){
      audioEasterEggContainer.innerHTML = "<small class=\"audio__grey\">You found the Easter egg! Sound familiar?</small>"
    }, (audioEasterEgg.duration*1000));

  })



})

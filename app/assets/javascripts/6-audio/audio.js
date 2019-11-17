document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById('audio-button');
  let audio = document.getElementById('audio');
  let form = document.getElementById('audio-answer-form')

  button.addEventListener('click', function(){
    audio.play();
    setTimeout(function(){
      form.style.visibility = "visible";
    }, (audio.duration*1000));

  })



})

document.addEventListener('DOMContentLoaded', function(){
  let audio = document.getElementById('rap-audio');
  let quizButton1 = document.getElementById('quiz-button-1');

  quizButton1.addEventListener('click', function(){
    audio.play();
  })
})

document.addEventListener('DOMContentLoaded', function(){
  let button = document.getElementById('been-bad-button');
  let video = document.getElementById('been-bad-video');

  button.addEventListener('click', function(){
    button.style.display = "none";
    video.style.display = "block";
    video.play();
    setTimeout(function(){
      window.location.href = window.location.origin;
    }, (video.duration*1000)+500 )
  })
})

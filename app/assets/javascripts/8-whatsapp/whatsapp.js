document.addEventListener('DOMContentLoaded', function(){
  var ctx = document.getElementById('myChart').getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November'],
          datasets: [{
              label: 'Sarah',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgb(255, 99, 132)',
              data: [119,70,59,25,28,22,16,16,8,7,0,50]
          },{
              label: 'Hugo',
              backgroundColor: 'rgba(99, 255, 132, 0.5)',
              borderColor: 'rgb(99, 255, 132)',
              data: [58,34,20,7,8,10,3,3,2,0,0,24]
          }]
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: true
      }
  });
  chart.canvas.parentNode.style.height = '200px';
  chart.canvas.parentNode.style.width = '500px';
});

document.addEventListener('DOMContentLoaded', function(event){
  const buttons = document.getElementsByClassName('answer-button');
  for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      showAnswer(buttons[i]);
    })
  }


})


function showAnswer(element){
  const word = element.id.replace(/^\w+-/, "").replace(/-button$/, "");
  if(!document.getElementById(`answer-${word}`)){
    const stats = getStats(word);
    stats.then( stats => {
      const percentages = calcPercentages(stats);
      answer = percentages.hugo > percentages.sarah ? "hugo" : "sarah";
      console.log(percentages);
      showAnswerOnPage(element, answer, word)
    })
  } else {
    console.log("clicked already");
  }
}

function showAnswerOnPage(element, answer, word){
  let el = document.createElement('p');
  el.id = `answer-${word}`
  el.innerText = `The answer is ${answer}`;
  element.parentNode.appendChild(el);
}

function calcPercentages(stats){
  const total = (stats.hugo_frequency + stats.sarah_frequency) * 1.0;
  const sarah_percent = stats.sarah_frequency/total;
  const hugo_percent = stats.hugo_frequency/total;
  return {hugo: hugo_percent, sarah: sarah_percent};
}

async function getStats(word){
  const response = await fetch(`/whatsapp_stats/${word}.json`, {
      method: 'GET'
    });
  return await response.json();
}

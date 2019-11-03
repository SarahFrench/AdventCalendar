function convertStatsToArray(stats){
  stats = JSON.parse(stats);
  let months = Object.keys(stats);
  let array = [];
  months.forEach( month => {
    array[month] = stats[month];
  })
  return array;
}

function addLineChart(word, stats){
  let sarahData = convertStatsToArray(stats.sarah_months_frequency)
  let hugoData = convertStatsToArray(stats.hugo_months_frequency)
  console.log(sarahData);
  console.log(hugoData);
  var ctx = document.getElementById(`chart-${word}`).getContext('2d');
  var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November'],
          datasets: [{
              label: 'Sarah',
              backgroundColor: 'rgba(255,188,88,0.5)',
              borderColor: 'rgb(255,188,88)',
              data: sarahData
          },{
              label: 'Hugo',
              backgroundColor: 'rgba(88,155,255, 0.5)',
              borderColor: 'rgb(88,155,255)',
              data: hugoData
          }]
      },

      // Configuration options go here
      options: {
        maintainAspectRatio: true
      }
  });
  chart.canvas.parentNode.style.height = '200px';
  chart.canvas.parentNode.style.width = '500px';
};

document.addEventListener('DOMContentLoaded', function(event){
  const buttons = document.getElementsByClassName('answer-button');
  for(let i=0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
      processAnswer(buttons[i]);
    })
  }
})


function processAnswer(element){
  //get the query param from button ID
  const word = element.id.replace(/^\w+-/, "").replace(/-button$/, "");
  //get the choice of sarah or hugo from button ID
  const usersGuess = element.id.match(/^\w+/)[0];
  if(!document.getElementById(`answer-${word}`)){
    const stats = getStats(word);
    stats.then( stats => {
      const percentages = calcPercentages(stats);
      correctAnswer = percentages.hugo > percentages.sarah ? "hugo" : "sarah";
      let wasUserCorrect = (correctAnswer === usersGuess)
      showAnswerOnPage(element, correctAnswer, word, percentages, wasUserCorrect);
      if(wasUserCorrect){
        addLineChart(word, stats);
        showChart(word, stats);
      }
    })
  } else {
    console.log("clicked already");
  }
}

function showAnswerOnPage(element, correctAnswer, word, percentages, wasUserCorrect){
  correctAnswer = correctAnswer[0].toUpperCase() + correctAnswer.slice(1)
  let el = document.createElement('p');
  el.id = `answer-${word}`
  let responseText = "";
  if(wasUserCorrect){
    el.classList.add('correct');
    responseText = "Correct! ";
  } else {
    el.classList.add('incorrect');
    responseText = "Incorrect... ";
  }
  el.innerHTML = `<p> ${responseText} The answer is ${correctAnswer} </p>`;
  el.innerHTML += `<p> Sarah: ${formatPercentageString(percentages.sarah)} Hugo: ${formatPercentageString(percentages.hugo)} </p>`;
  element.parentNode.appendChild(el);
}

function formatPercentageString(percentage){
  percentage *= 100;
  return `${percentage.toPrecision(4)}%`
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

function showChart(word){
  document.getElementById(`chart-${word}`).style.display = "block"
}

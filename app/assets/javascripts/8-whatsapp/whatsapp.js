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

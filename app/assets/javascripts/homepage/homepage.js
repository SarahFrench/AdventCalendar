document.addEventListener("DOMContentLoaded", function() {

    if(window.localStorage.hasOwnProperty("advent")){
      console.log(window.localStorage.getItem("advent"));
    } else {
      console.log("localStorage not present");
      let dates = {
        1: false, 2: false, 3: false, 4: false, 5: false,
        6: false, 7: false, 8: false, 9: false, 10: false,
        11: false, 12: false, 13: false, 14: false, 15: false,
        16: false, 17: false, 18: false, 19: false, 20: false,
        21: false, 22: false, 23: false, 24: false, 25: false,
      }
      window.localStorage.setItem("advent", JSON.stringify(dates) )
    }

    let menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', function(event){
      menuOpen(20);
    })
    menuButton.addEventListener('touchstart', function(event){
      menuOpen(50);
    })
})

function updateAdventPlace(number){
  if(number){
    number = number.toString();
    let dates = JSON.parse( window.localStorage.getItem("advent") );
    if(typeof dates[number] == 'boolean'){
      dates[number] = true;
      console.log("updating");
      window.localStorage.setItem("advent", JSON.stringify(dates))
    } else {
      console.log("incorrect number");
    }
  } else {
    console.log("argument passed was bad");
  }
}

function menuOpen(percentage) {
  console.log('open');
  document.getElementById('menu-area').style.width = `${percentage}%`;
  document.getElementById('menu-button').style.visibility = "hidden";
}

function menuClose(){
  console.log('close');
  document.getElementById('menu-area').style.width = '0%';
  document.getElementById('menu-button').style.visibility = "visible";
}

function resetHomepage(){
  var choice = confirm("This will make all the panels reappear on the homepage. Do you want to continue?");
  if (choice) {
    localStorage.removeItem('advent');
  }
}

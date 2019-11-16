//When at South Croydon station: latitude: 51.376596, longitude: -0.0922664


// Kentish Town coords
// 51.545299, -0.145377
// 51.550847, -0.137245


//Croydon coords
// 51.354803, -0.100475
// 51.353577, -0.097943

//Inbetween limits
// Latitude
// 51.545299  51.354803
// Longitude
// west  -0.277072
// east -0.027369

function getLocation(){
  return new Promise((resolve, reject)=>{
    navigator.geolocation.getCurrentPosition(function(position){
      resolve(position);
    });
  });
}

//Promise
let locationCoords = getLocation();


//FIX BELOW
locationCoords
  .then(position => {
    let string = "";
    if(
      (position.coords.latitude > 51.354803 && position.coords.latitude < 51.545299)
      &&
      (position.coords.longitude > -0.145377 && position.coords.longitude < -0.137245)
    ){
      string = "Are you in Kentish Town?";
    } else if(
        (position.coords.latitude > 51.353577 && position.coords.latitude < 51.354803)
        &&
        (position.coords.longitude > -0.100475 && position.coords.longitude < -0.097943)
      ){
        string = "Are you in Croydon?";
      } else if(
          (position.coords.latitude > 51.545299 && position.coords.latitude < 51.354803)
          &&
          (position.coords.longitude > -0.027369 && position.coords.longitude < -0.277072)
        ){
          string = "Are you travelling through London?";
        } else {
          string = "I don't known where you are right now, but...";
        }

      return string;
  })
  .then(message => {
    console.log(location);
    let locationText = document.getElementById('location');
    locationText.innerText = message;
    locationText.style.visibility = "visible";

    setTimeout(function(){
      document.getElementById('message').style.visibility = "visible";
    }, 2000);
  })
  .catch( error => {
    setTimeout(function(){
      let messageText = document.getElementById('message');
      messageText.innerText = "I'm always watching.";
      messageText.style.visibility = "visible";
    }, 2000);
  })

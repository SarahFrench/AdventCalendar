document.addEventListener("DOMContentLoaded", function(){
  function getLatLong(){
    return new Promise((resolve, reject)=>{
      navigator.geolocation.getCurrentPosition(function(position){
        resolve(position);
      });
    });
  }

  let key = document.querySelector("input[name='mb']").value;


  function getLocationInfo(lat, long){
    return new Promise((resolve, reject)=>{
      const response = fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=${key}`, {
          method: 'GET'
      })
      resolve(response);
    });
  }

  function hasLeftLondon(lat, long){
    return( lat < 51.447040 && long < -0.666881);
  }

  function isNearLooe(lat, long){
    return( lat < 50.403443 && long < -4.396514);
  }

  function decideResponseSentence(data){
    let locationString = data.data.features[0].text;
    console.log("DATA");
    console.log(data.data);


    if(data.leftLondon && !data.nearLooe){
      return "You've left London? Finally!"
    } else if (data.nearLooe) {
      return "You've arrived!"
    } else if (locationString === "Kentish Town Road"){
      return "You're home, good. I can keep an eye on you with the secret cameras.";
    } else if (locationString === "Avondale Road"){
      return "You're down in Croydon? I miss you but...";
    } else {
      return `What are you doing in ${locationString}? Without me?? :( `
    }
  }


  //Promise
  let coordinates = getLatLong();

  coordinates.then( position => {
    locationInfo = getLocationInfo(position.coords.latitude, position.coords.longitude);
    return locationInfo;
  }).then( data => {
    data = data.json();
    return data
  }).then( data => {
    let lat = data.query[1];
    let long = data.query[0];

    return {
      data: data,
      leftLondon: hasLeftLondon(lat, long),
      nearLooe: isNearLooe(lat, long)
    };
  }).then( data => {
    let message = decideResponseSentence(data);
    let locationText = document.getElementById('location');
    locationText.innerText = message;
    locationText.style.visibility = "visible";

    //creepy second message added after delay
    setTimeout(function(){
      document.getElementById('message').style.visibility = "visible";
    }, 2000);

  }).catch( error => {
    //only show second message
    setTimeout(function(){
      let messageText = document.getElementById('message');
      messageText.innerText = "I'm always watching.";
      messageText.style.visibility = "visible";
    }, 2000);
  })
});

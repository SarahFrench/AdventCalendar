document.addEventListener('DOMContentLoaded', function(){
  async function getSamoyeds(number){
    const response = await fetch(`https://dog.ceo/api/breed/samoyed/images/random/${number}`, {
        method: 'GET'
      });
      return await response.json();
  }

  function addSamoyeds(number, container){
    let dogs = getSamoyeds(number);
    dogs.then(dogs => {
      let urls = dogs.message;
      urls.forEach(url => {
        let el = document.createElement('div');
        el.classList.add('samoyeds__image');
        el.style.backgroundImage = `url(${url})`;
        console.log(typeof container);
        container.appendChild(el);
      })
    })
  }

  //Add initial Samoyeds
  const container = document.getElementsByClassName('samoyeds__container')[0];
  addSamoyeds(20,container);

  //Add more Samoyeds after scroll events of sufficient magnitude
  let scrollPositions = [0];

  document.addEventListener('scroll', function(){
    let lastPosition = scrollPositions.slice(-1)[0];
    if(window.scrollY > lastPosition && (lastPosition === 0 || (window.scrollY - lastPosition) > 200) ){
      scrollPositions.push(window.scrollY);
      addSamoyeds(4, container);
    }
  })
})

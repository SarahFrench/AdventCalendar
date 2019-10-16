document.addEventListener("DOMContentLoaded", function() {
      window.localStorage.removeItem("advent");
      if(localStorage['advent'] === undefined){
        document.bgColor = 'lightblue';
      }
})

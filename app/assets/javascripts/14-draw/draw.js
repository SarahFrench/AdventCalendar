document.addEventListener('DOMContentLoaded', function(){
  let brushSize = 10;
  let brushColour = "#000000";

  const brushDial = document.getElementById('brush-size');
  const brushSizeDisplay = document.getElementById('brush-size-display');
  let downloadButton = document.getElementById('download-button');
  let undoButton = document.getElementById('undo-button');

  const colourSwatches = document.getElementsByClassName('draw__colour-swatch');
  for(let i=0; i < colourSwatches.length; i++){
    colourSwatches[i].addEventListener('click', function(event){
      brushColour = event.target.id;
    })
  }

  brushDial.addEventListener('change', function(){
    brushSize = brushDial.value;
    brushSizeDisplay.innerText = brushDial.value;
  })

  downloadButton.addEventListener('click', function(){
    download();
  })

  undoButton.addEventListener('click', function(){
    undo();
  })

  const canvas = document.getElementsByTagName('canvas')[0];
  let context = canvas.getContext('2d');
  let lastVersion = context.getImageData(0, 0, canvas.width, canvas.height);
  let currentlyDrawing = false;


  canvas.addEventListener('mousedown', function(event){
    currentlyDrawing = true;
    saveUndoState();
    drawWithBrush(event);
  })
  canvas.addEventListener('mousemove', function(event){
    if(currentlyDrawing){
      drawWithBrush(event);
    }
  })
  canvas.addEventListener('mouseup', function(event){
    currentlyDrawing = false;
  })

  function drawWithBrush(event){
    // set brush position, based on mouse and take canvas offset into account
    let brushX = (event.x - (brushSize/2) - canvas.offsetLeft)
    let brushY = (event.y - (brushSize/2) - canvas.offsetTop)

    //create the brushstroke on the canvas
    context.beginPath();
    context.arc(brushX, brushY, brushSize, 0, 360);
    context.strokeStyle = brushColour;
    context.fillStyle = brushColour;
    context.fill();
    context.stroke();
    context.closePath();
  }

  function undo(){
    context.putImageData(lastVersion,0,0);
  }

  function saveUndoState(){
    lastVersion = context.getImageData(0, 0, canvas.width, canvas.height);
  }

  function download(){
    let data = canvas.toDataURL();
    downloadButton.href = data;
    downloadButton.download = "mypainting.png";

  }

})

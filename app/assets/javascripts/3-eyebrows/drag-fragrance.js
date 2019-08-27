  function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
  }

  function allowDrop(event) {
    event.preventDefault();
  }

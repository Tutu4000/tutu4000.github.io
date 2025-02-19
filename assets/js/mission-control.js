(function() {
  let dragElement = document.getElementById('mission-control-panel');
  let dragHandle = dragElement.querySelector('.drag-handle');
  
  if (dragHandle && dragElement) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    dragHandle.onmousedown = dragMouseDown;
    
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }
    
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      dragElement.style.right = '';
      dragElement.style.top = (dragElement.offsetTop - pos2) + 'px';
      dragElement.style.left = (dragElement.offsetLeft - pos1) + 'px';
    }
    
    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
})(); 
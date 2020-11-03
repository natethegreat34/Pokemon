window.addEventListener('load', function() { 
  console.log('All assets are loaded') 
  document.getElementByID("makingTask").onclick = function(){
    event.preventDefault()
    console.log("I've been clicked")
  }
})

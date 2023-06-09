const clock = document.getElementById('clock')

function getCurrentTime() {
    
    clock.innerHTML = new Date().toLocaleTimeString();
   
}

function runEverySecond() {
  setInterval(function() {
    getCurrentTime()
  }, 1000); 
}

runEverySecond();
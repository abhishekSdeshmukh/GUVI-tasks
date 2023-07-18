function countdown(seconds, callback) {
    var countdownElement = document.getElementById("countdown");
    
    countdownElement.innerHTML = seconds;
  
    if (seconds > 0) {
      setTimeout(function() {
        countdown(seconds - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  countdown(10, function() {
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "Happy Independence Day";
  });
  
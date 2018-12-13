// Countdown Timer
var countDownDate = new Date("Dec 25, 2018 00:00:00").getTime();
        var x = setInterval(function() {
          var now = new Date().getTime();
          var distance = countDownDate - now;
          var days = Math.floor(distance / (1000 * 60 * 60 * 24));
          var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          var seconds = Math.floor((distance % (1000 * 60)) / 1000);
          document.getElementById("counter").innerHTML = days + "d " + hours + "h "
          + minutes + "m " + seconds + "s until Christmas Day!";
          if (distance <= 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "It's Christmas Day!!";
          }
        }, 1000);
//Naughty or Nice spinner        
function naughtyOrNice() {
    alert("You know you were naughty!");
}
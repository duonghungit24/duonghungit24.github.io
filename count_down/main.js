  // Set the date we're counting down to
  var countDownDate = new Date("January 1, 2021 00:00:00").getTime();
  // Update the count down every 1 second
  var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML =   days + "d " + hours + "h "
          + minutes + "m " + seconds + "s ";

      // If the count down is over, write some text 
      if (distance <= 0) {
          clearInterval(x);
          var none1 = document.querySelector('.tittle').style.display = 'none';
          var none2 = document.querySelector('#demo').style.display = 'none';
          var body = document.querySelector('body').style.backgroundImage = 'none';
          var child1 = document.querySelector('.text span:nth-child(1)').style.display = 'inline';
          var child2 = document.querySelector('.text span:nth-child(2)').style.display = 'inline';
          var child3 = document.querySelector('.text span:nth-child(3)').style.display = 'inline';
          var child4 = document.querySelector('.text span:nth-child(4)').style.display = 'inline';
          var child5 = document.querySelector('.text span:nth-child(5)').style.display = 'inline';
          var child6 = document.querySelector('.text span:nth-child(6)').style.display = 'inline';
          var stars1 = document.querySelector('.stars-01').style.display = 'block';
          var stars2 = document.querySelector('.stars-02').style.display = 'block';
          var stars3 = document.querySelector('.stars-03').style.display = 'block';
          var stars4 = document.querySelector('.stars-04').style.display = 'block';
          var year = document.querySelector('.year').style.display = 'block';
      }   
  },0);
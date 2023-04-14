$(document).ready(function() {
  
  $(".saveBtn").on("click", function() {
    // Save the user input in local storage using the id in the time block.
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
    // Show a custom alert box with the notification message.
    showAlert("Success! Your appointment has been saved to your localStorage.");
  });
  
  function showAlert(message) {
    // Create a new div element to hold the alert box content.
    var alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");
    // Create a new paragraph element to hold the message text.
    var alertMessage = document.createElement("p");
    alertMessage.textContent = message;
    alertBox.appendChild(alertMessage);
    // Add the alert box to the body of the document.
    document.body.appendChild(alertBox);
    // Hide the alert box after 3 seconds.
    setTimeout(function() {
      alertBox.style.display = "none";
    }, 3000);
  }  

  // Compare the id to the current hour and apply the appropriate past, present, or future class to each hour block.
  function updateHourlyStatus() {
    var currentHour = moment().hours();
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }
  updateHourlyStatus();

  // Pull any user input that was saved in the localStorage and set the values of the corresponding textarea elements.
  $(".description").each(function() {
    var key = $(this).parent().attr("id");
    var value = localStorage.getItem(key);

    if (value) {
      $(this).val(value);
    }
  });

  // Show the current date and time on the page.
  $("#currentDay").text(moment().format("dddd, MMMM Do"));

  // Show the current time on the page.
  function updateTime() {
    var currentTime = moment().format("h:mm:ss a");
    $("#currentTime").text(currentTime);
  }

  setInterval(updateTime, 1000);
});

// Randomized footer quotes.
var quotes = [
  "There are no shortcuts to any place worth going. -Beverly Sills",
  "Hard work beats talent when talent fails to work hard. -Kevin Durant",
  "Work hard, keep your nose clean, and just stick around. -Clint Eastwood",
  "Don't get bitter, just get better. -Alyssa Edwards",
  "Water off a duck's back. -Jinkx Monsoon",
  "When you become the image of your imagination, it's the most powerful thing you could ever do. -RuPaul",
  "No bird soars too high if he soars with his own wings. -William Blake",
  "You are only free when you realize you belong no place - you belong every place - no place at all. The price is high. The reward is great. -Brené Brown",
  "Set your goals high, and don't stop till you get there. -Bo Jackson",
  "The dictionary is the only place that success comes before work. Work is the key to success, and hard work can help you accomplish anything. -Vince Lombardi",
  "A journey of a thousand miles must begin with a single step. -Lao Tzu"
  ];
  
  // Select a random quote from the array.
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  // Insert the random quote into the footer.
  $("#footer").text(randomQuote);
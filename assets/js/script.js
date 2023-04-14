// $(document).ready(function() {
//   // Listen for click events on the save button.
//   $(".saveBtn").on("click", function() {
//     // Save the user input in local storage using the id in the time block.
//     var key = $(this).parent().attr("id");
//     var value = $(this).siblings(".description").val();
//     localStorage.setItem(key, value);
//   });

//   // Compare the id to the current hour and apply the appropriate past, present, or future class to each hour block.
//   function updateHourlyStatus() {
//     var currentHour = moment().hours();
//     $(".time-block").each(function() {
//       var blockHour = parseInt($(this).attr("id").split("-")[1]);
//       if (blockHour < currentHour) {
//         $(this).addClass("past");
//       } else if (blockHour === currentHour) {
//         $(this).removeClass("past");
//         $(this).addClass("present");
//       } else {
//         $(this).removeClass("past");
//         $(this).removeClass("present");
//         $(this).addClass("future");
//       }
//     });
//   }
//   updateHourlyStatus();

//   // Pull any user input that was saved in the localStorage and set the values of the corresponding textarea elements.
//   $(".description").each(function() {
//     var key = $(this).parent().attr("id");
//     var value = localStorage.getItem(key);

//     if (value) {
//       $(this).val(value);
//     }
//   });

//   // Show the current date and time on the page.
//   $("#currentDay").text(moment().format("dddd, MMMM Do"));
// });


$(document).ready(function() {
  // Listen for click events on the save button.
  $(".saveBtn").on("click", function() {
    // Save the user input in local storage using the id in the time block.
    var key = $(this).parent().attr("id");
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
  });

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

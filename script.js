$(function() {

  // Get current day using Day.js
  const currentDay = dayjs().format("dddd, MMMM D");

  // Display current day in the header
  $("#currentDay").text(currentDay);

  // Got the current hour in 24 hour format using Day.js
  const currentHour = dayjs().format("H");

  // Add event listener for save button clicks
  $(".saveBtn").on("click", function() {

    // Get the ID of the time block containing the save button that was clicked
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get the user input from the description text area within the same time block
    var userInput = $(this).siblings(".description").val();

    // Save the user input to local storage using the time block is as key
    localStorage.setItem(timeBlockId, userInput);


  });

  // Loop through each time block and apply the past, present, or future class based on the current hour
  $(".time-block").each(function() {

    // Get the id of the time block
    var timeBlockId = $(this).attr("id");

    // Get the hour value from the time block id
    var hour = parseInt(timeBlockId.split("-")[1]);

    // Compare the hour to the current hour and apply the appropiate class
    if (hour < currentHour) {

      $(this).addClass("past");

    }
    else if (hour > currentHour) {

      $(this).addClass("future");

    }
    else {

      $(this).addClass("present");

    }

    // Get the user input from local storage and set the value of the corresponding text area element
    var userInput = localStorage.getItem(timeBlockId);

    if (userInput) {

      $(this).find(".description").val(userInput);

    }

  });

});
var date = moment().format("dddd, MMMM Do"); 
$("#currentDay").text(date);

$( ".input-group-text" ).each(function(index, element) {
    if(parseInt($( this ).attr("data-time")) == parseInt(moment().format("H"))) {
        $("#" + index).addClass("present")
    } else if (parseInt($(this).attr("data-time")) > parseInt(moment().format("H"))) {
        $("#" + index).addClass("future")
    } else {
        $("#" + index).addClass("past")
    }
  });

  var tasks = [];

$("button").click(function() {
        var textElid = $(this).siblings().attr("data-time");
        tasks[(textElid - 9)] = $("#" + (textElid - 9)).val();
        storeTasks();
    })

function storeTasks() {
    // Stringify and set key in localStorage to tasks array
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
  
    // Change value for each text area as per stored tasks value
    for (var i = 0; i < tasks.length; i++) {
      var task = tasks[i];
      $("#" + i).val(task);
    }
  }

  // This function is being called below and will run when the page loads.
function init() {
    // Get stored tasks from localStorage
    var storedTasks = JSON.parse(localStorage.getItem("tasks"));
  
    // If tasks were retrieved from localStorage, update the tasks array to it
    if (storedTasks !== null) {
      tasks = storedTasks;
    }
  
    // This is a helper function that will render tasks to the DOM
    renderTasks();
  }

  init();
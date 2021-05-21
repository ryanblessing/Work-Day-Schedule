//current time
var time = moment();
//display time in the header ny selecting the id currentDay
var displayMoment = document.getElementById("currentDay");
// format of moment i want to display
displayMoment.innerHTML = time.format("MMMM Do YYYY, h:mm a");
var nowTime = moment().hours();


//time color changes for current-red, past-grey, future-green
$(".hour").each(function() {

    var nowTime = moment().hours();

    // parseInt turns a string to a integer
    if (parseInt($(this).data("grey")) === nowTime) {
        $(this).next().addClass("bg-danger")
    }

    if (parseInt($(this).data("grey")) < nowTime) {
        $(this).next().addClass("bg-secondary")
    }

    if (parseInt($(this).data("grey")) > nowTime) {
        $(this).next().addClass("big success")
        }
      });
    
  
//return and save into local storage

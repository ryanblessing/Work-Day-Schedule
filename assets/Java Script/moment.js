//current time
var time = moment();
//display time in the header ny selecting the id currentDay
var displayMoment = document.getElementById("currentDay");
//projecting time onto HTML and the type od dat format i want
displayMoment.innerHTML = time.format("MMMM Do YYYY, h:mm a");
var nowTIme = moment().hours()


//time color changes for current-red, past-grey, future-green









//return and save into local storage
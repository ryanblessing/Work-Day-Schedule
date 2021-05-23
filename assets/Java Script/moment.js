//current time
var time = moment();
//display time in the header ny selecting the id currentDay
var displayMoment = document.getElementById("currentDay");
// format of moment i want to display
displayMoment.innerHTML = time.format("MMMM Do YYYY, h:mm a");
var nowTime = moment().hours()


//time color changes for current-red, past-grey, future-green
$(".hour").each(function () {

    var nowTime = moment().hours()
    var currentTimeHourBlock = $(this).attr("data");
    var textareaBlock = $(this).siblings("textarea");


    // parseInt turns a string to a integer
    if (parseInt(currentTimeHourBlock) < nowTime) {
        $(this).addClass("bg-secondary")
        textareaBlock.addClass("bg-secondary")

    }

    if (parseInt(currentTimeHourBlock) === nowTime) {
        $(this).addClass("bg-danger")
        textareaBlock.addClass("bg-danger")
    }

    if (parseInt(currentTimeHourBlock) > nowTime) {
        $(this).addClass("bg-success")
        textareaBlock.addClass("bg-success")
    }

})

var saveBtn = $('.save-btn');

for (var i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener('click', function(){
        var textAreaBlock = $(this).siblings("textarea").val();
        var rowId = $(this).siblings("textarea").attr("id");
        localStorage.setItem(rowId, textAreaBlock);
    });
}

for(var i = 1; i < 18; i++){
    var textAreaInfo = localStorage.getItem(`row-${i}`)
    $(`#row-${i}`).val(textAreaInfo);

}



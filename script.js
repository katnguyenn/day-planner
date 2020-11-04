// Display current date
var currentDate = moment().format("dddd, MM-DD-YYYY");
console.log(currentDate);
document.getElementById("currentDay");
$("#currentDay").text(currentDate);

// Past, Present, Future
var rows = $(".rows");
console.log(rows[0].id)
var currentTime = parseInt(moment().format("H"));
console.log(currentTime);

function changeCalendarColor() {
    $(".rows").each(function(){
        console.log($(this).attr('id'))
        var rowHour = parseInt($(this).attr('id'))
        if (rowHour < currentTime) {
            $(this).addClass("past");
        } else if (rowHour === currentTime) {
            $(this).addClass("present");
        } else if (rowHour > currentTime) 
            $(this).addClass("future");
            console.log(this)
            
    })
}
changeCalendarColor();

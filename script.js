// Display current date
var currentDate = moment().format("dddd, MM-DD-YYYY");
//console.log(currentDate);
$("#currentDay").text(currentDate);

// Past, Present, Future
var rows = $(".rows");
//console.log(rows[0].id)
var currentTime = parseInt(moment().format("H"));
//console.log(currentTime);

function changeCalendarColor() {
    $(".rows").each(function(){
        //console.log($(this).attr('id'))
        var rowHour = parseInt($(this).attr("id"))
        if (rowHour < currentTime) {
            $(this).addClass("past");
        } else if (rowHour === currentTime) {
            $(this).addClass("present");
        } else if (rowHour > currentTime) 
            $(this).addClass("future");
            //console.log(this)
            
    })
}
changeCalendarColor();

// Event saved to local storage

    $("#b9").on("click", function() {
        var textInput = $("#t9").val();
        localStorage.setItem("9AM", textInput);
        // console.log(textInput);
    });
    $("#t9").val(localStorage.getItem("9AM"));
    
    $("#b10").on("click", function() {
        var textInput = $("#t10").val();
        localStorage.setItem("10AM", textInput);
        
    });
    $("#t10").val(localStorage.getItem("10AM"));
    
    $("#b11").on("click", function() {
        var textInput = $("#t11").val();
        localStorage.setItem("11AM", textInput);
        
    });
    $("#t11").val(localStorage.getItem("11AM"));
    
    $("#b12").on("click", function() {
        var textInput = $("#t12").val();
        localStorage.setItem("12PM", textInput);
       
    });
    $("#t12").val(localStorage.getItem("12PM"));
    
    $("#b13").on("click", function() {
        var textInput = $("#t13").val();
        localStorage.setItem("1PM", textInput);
    });
    $("#t13").val(localStorage.getItem("1PM"));
    
    $("#b14").on("click", function() {
        var textInput = $("#t14").val();
        localStorage.setItem("2PM", textInput);
    });
    $("#t14").val(localStorage.getItem("2PM"));
    
    $("#b15").on("click", function() {
        var textInput = $("#t15").val();
        localStorage.setItem("3PM", textInput);
    });
    $("#t15").val(localStorage.getItem("3PM"));
    
    $("#b16").on("click", function() {
        var textInput = $("#t16").val();
        localStorage.setItem("4PM", textInput);
    });
    $("#t16").val(localStorage.getItem("4PM"));
    
    $("#b17").on("click", function() {
        var textInput = $("#t17").val();
        localStorage.setItem("5PM", textInput);
    });
    $("#t17").val(localStorage.getItem("5PM"));
  



var today = new Date();
console.log(today);
var currentDate = today.getDate() + "/" + (today.getMonth() +1) + "/" + today.getFullYear();
document.getElementById("currentDay");
$("#currentDay").text(currentDate);


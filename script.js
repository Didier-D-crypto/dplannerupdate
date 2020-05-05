$(document).ready(function() {
    const didier = 
    JSON.parse(localStorage.getItem("didier")) || {};
    $(".saveBtn").on("click", function() {
        const input = $(this).siblings(".description").val().trim();
        const time = $(this).parent().attr("id");
        didier[time] = input;
       localStorage.setItem("didier", JSON.stringify(didier));
    });

    $.each(didier, function(time, input) {    
        $("#" + time).children(".description").val(input);
    })

    $("#currentDay").text(moment().format("dddd, MMMM Do"));

    var currentTime = getNow();
    var hour = currentTime.charAt(0) + currentTime.charAt(1);
    var hourInt = parseInt(hour);
    
    $(".description").each(function() {
        var hour = parseInt($(this).attr("id"));
        
        // css below for middle slide color -didier
        if (hour < hourInt) {
            $(this).css("background", "#4aaaa5");
        //  css below for background of text input. -didier
        } else if (hour > hourInt) {
            $(this).css("background", "#545454");

        }else if (hour = hourInt) {
            $(this).css("background", "#ff6961");
        }
    })
    
    getNow();
 // initiate a function for the hours min. and seconds AM-PM
    function getNow() {
        const time = moment().format('HH:mm:ss: A');
        return time;
        };   
});



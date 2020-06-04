$(document).ready(function() {
    refresh()
    calendar = {
        nine:'',
        ten:'',
        eleven:'',
        noon:'',
        one:'',
        two:'',
        three:'',
        four:'',
        five:''
    }
    var hours = calendar

    // On-click function
    $(".saveBtn").on("click", function(){

        var descrip = $(this).siblings(".description").text();

        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, descrip)
        ;
        var hours = JSON.parse(localStorage.getItem('calendar')) || {};
        hours[hour] = descrip;
        console.log(hours)
        window.localStorage.setItem('calendar', JSON.stringify(hours))
        refresh()
    });

    // Refresh Function
    function refresh(){
        var hours = JSON.parse(localStorage.getItem('calendar')) || {};
        var keys = Object.keys(hours)
        console.log(keys.length)
        for (var i = 0; i < keys.length; i++) {
            key = keys[i]
            // console.log('key is '+key)
            // console.log('description is '+hours[key])
            if (hours[key] === '') {
                $("#"+key+" .description").text('Plan day here')
            }
            else {
                $("#"+key+" .description").text(hours[key])
            }
    }}

    // Set time at top of screen
    $("#currentDay").text(moment().format('dddd, MMMM Do'));

    // Set time-blocks to past/present/future

    var now = moment().hours();
    var hours = JSON.parse(localStorage.getItem('calendar')) || {};
    var keys = Object.keys(hours)
    for (var i = 0; i < keys.length; i++) {
        key = keys[i]
        console.log($('#nine'))
        console.log($("#"+key).children('.col-md-1 time').HTML)
        time = $("#"+key).children('.col-md-1').text
        console.log(time)
        }

//SET DATA
//Parse to json
// var hours = localStorage.getItem('calendar') || {};
// hours.hour = descrip;
// console.log(calendar)

// localStorage.setItem('calendar', hours);
});
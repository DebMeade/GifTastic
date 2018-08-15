$(document).ready(function() {

    var celebrityName = ["Leonardo DiCaprio", "Emma Stone", "Steve Carell", "Ryan Gosling", "Jennifer Lawrence", "Bill Murray"];

    $(document).on("click", ".celebrityName", function() {
        
    var celebrityName = $(this).attr("data-celebrity");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + celebrityName + "&api_key=mapfgOiQSs9AVBJDK0zgffvEFkvhLLpQ&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);

        var results = response.data;
        for (var i=0; i<results.length; i++) {

        var celebrityDiv = $("<div class='celebrityDiv'>");
        var p = $("<p>").text("Rating: " + results[i].rating);

        var addImage = $("<img>");
        addImage.addClass("gif");
        addImage.attr("src", results[i].images.fixed_height_still.url);
        addImage.attr("data-animate", results[i].images.fixed_height.url);
        addImage.attr("data-still", results[i].images.fixed_height_still.url);

        addImage.attr("data-state", "still");



        celebrityDiv.append(addImage, p);
        $("#newGifs").prepend(celebrityDiv);
        }
    })
// }   //ends displayCelebrityInfo Function
})  //ends button on click


function renderButtons() {
    $("#buttons").empty();

    for (var i=0; i<celebrityName.length; i++) {
        var a = $("<button>");
        a.addClass("celebrityName btn btn-light");
        a.attr("data-celebrity", celebrityName[i]);
        a.text(celebrityName[i]);
        $("#buttons").append(a);
    }
}

$("#add-celebrityName").on("click", function(event) {
    event.preventDefault();
    var celebrity = $("#celebrityName-input").val().trim();
    a.addClass("btn btn-light");
    celebrityName.push(celebrity);
    renderButtons();
});

$(document).on("click", ".gif", function() {

    var state = $(this).attr("data-state");
    var imgStill = $(this).attr("data-still");
    var imgAnimate = $(this).attr("data-animate");

    if(state === "still") {
        $(this).attr("src", imgAnimate);
        $(this).attr("data-state", "animate");
        console.log(imgAnimate);
    
    } else {
        $(this).attr("src", imgStill);
        $(this).attr("data-state", "still");
    }

})



renderButtons();

    



})  //ends document.ready function
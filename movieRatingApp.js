
$(function(){
    $(".coloring").css("color", "black")
                .text("Submit")
    
    $("button").on("click", function(event){
        event.preventDefault();
        console.log("HELLO");
        $titleValue = $(".title").val()
        $ratingValue = $(".rating").val()
        // create an element using jQuery
        $("body").append('<div>')
        $("body").append("<button class='remove'>Remove</button>")
        $("div").append($titleValue).css("display", "None")
        $("div").append( $ratingValue).css("display", "None") 
    })

    $(".remove").on("click", function(evt){
        $("form").text() = null;
        $titleValue.text() = null;
        $(".title").text() = " ";
        $(".rating").val() = " ";
        $("div").remove()
    })
})

/*
Build an application that uses jQuery to do the following:

Contains a form with two inputs for a title and rating along with a button to submit the form.
When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button 
to remove each title and rating from the DOM.
When the button to remove is clicked, remove each title and rating from the DOM.

*/
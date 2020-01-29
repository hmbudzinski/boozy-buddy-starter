// TODO: ON CLICK OF #add-btn, COLLECT THE DATA FROM THE FORM AND SUBMIT TO /api/drinks
//square brackets in jquery mean you are targettig by an attirbute
$("#add-btn").on("click", function(event){
    event.preventDefault();

    const newDrink = {
        name: $("#drink-name").val().trim(),
        type: $("#drink-type").val(), //wine cocktail or beer
        location: $("#drink-location").val(),
        price: $("#drink-price").val(),
        notes: $("#drink-description").val(),
        rating: $("input[name='rating']:checked").val(), 
        love_it: $("#love").is(":checked"),
        hate_it: $("#hate").is(":checked"),
    }

    if (!newDrink.name || !newDrink.type || !newDrink.rating){
        return alert("All drinks must have a name, type, and rating");
    }

    $.post("/api/drinks", newDrink, () => {
        location.href = `/${newDrink.type}s`;
    })
});


// TODO: PREVENT SUBMISSION UNLESS NAME/TYPE/RATING ARE PROVIDED

// TODO: WHEN SUBMISSION IS COMPLETE, REDIRECT TO /type ROUTE (ie /beers)

// TODO: ...AND RESET FORM
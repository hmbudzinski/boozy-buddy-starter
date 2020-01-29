// TODO: FOR EACH ROW OF DATA WE GET BACK FROM OUR QUERY, BUILD/APPEND A CARD TO #drinks
{/* 
<div class="card">
    <div class="card-body">
        <h3>Josh Cabernet Sauvignon</h3>
        <p><strong>Rating: </strong>4</p>
        <p><strong>Loved it? </strong>True | <strong>Hated it? </strong>False</p>
        <p><strong>Type: </strong>Wine</p>
        <p><strong>Location: </strong>Home</p>
        <p><strong>Price: </strong>$21.25</p>
        <p><strong>Description/Notes: </strong>Bought at Total Beverage; great taste: cinnamon, cloves,
                a bit of toasty oak. Would go great with dinner but had with cheese plate and dark chocolate.</p>
    </div>
</div> 
*/}

$.get("/api/beers", (data) => {
    console.log(data);

    for (const drink of data) {
    const card = `
        <div class="card">
        <div class="card-body">
            <h3>${drink.name}</h3>
            <p><strong>Rating: </strong>${drink.rating}</p>
            <p><strong>Loved it? </strong>${drink.love_it === 1} | <strong>Hated it? </strong>${drink.hate_it === 1}</p>
            <p><strong>Type: </strong>${drink.type}</p>
            <p><strong>Location: </strong>${drink.location}</p>
            <p><strong>Price: </strong>$${drink.price}</p>
            <p><strong>Description/Notes: </strong>${drink.notes}</p>
        </div>
    </div> 
    `; 
    $("#drinks").append(card);
    }
})
/*
        ### Instructions

        •	DONE: Add "reset" = 

        •   create an array of strings, each one related to a topic that interests you. Save it to a variable called `topics`.  */

var topics =
    ["Acura", "Alfa Romeo", "Audi", "Bentley Motors", "BMW", "Bugatti", "Cadillac", "Chevrolet", "Corvette", "Chrysler",
        "Citroen", "Ferrari", "Fiat", "Ford", "GMC", "Honda", "Infiniti", "Jaguar", "Jeep", "Kia", "Lamborghini", "Landrover",
        "Lexus", "Lincoln", "Lotus Cars", "Maserati", "Mazda", "Mclaren Automotive", "Mercedes-Benz", "Mg", "Mini Cooper",
        "Mitsubishi", "Nissan", "Porsche", "Ram Trucks", "Scion", "Smart", "Subaru", "Toyota", "Volkswagen", "Volvo Cars",
        "Hyundai", "Tesla Motors"]

function buildTopicButtons(topic, i) {
    // console.log("buildTopicButtons"); 
    // console.log("topic: " ,topic, "   i: ", i);   
    /* TO DO: 
            foreach element in the array    
            create a variable newButton to hold a button element
            set the button id attr to 'topicButton',set the data value and the text to that of the array string */
    var newButton = $("<button>");
    newButton.addClass("topicButton");
    newButton.addClass("btn btn-primary");
    newButton.attr("data-topic", topic);
    newButton.text(topic);
    /* reference exisiting HTML element to insert new element before */
    $("#buttons-anchor").prepend(newButton);


};
// M A I N    
/*    •	Take the topics in this array and create buttons in your HTML using a loop that appends a button for each string in the array. */
topics.forEach(buildTopicButtons);
console.log("Call buildTopicButtons");
/*        
//  •	On user click of a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.*/
//      Reference button class and listen for "click" event
$(".topicButton").on("click", function () {
    console.log("click");
    //  Save "topic" data value that was stored in each button
    var topic = $(this).attr("data-topic");
    console.log(topic);

    var moCarStr = "";

    //   Build AJAX query URL for topic specifying limit of 10 gifs
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        topic + moCarStr + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g";

    //   Submit AJAX request with the query URL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        //  "Promise" to run following function after API data is returned
        .then(function (response) {
            console.log(response);
        // Store the GIF object
        var gifsData = response.data;

        //loop thu the GIF object to add each GIF to the page along with the MPAA rating
        for (i=0; i < gifsData.length;i++) {
            // Each GIF will be in a img element will be in a div with a paragraph for the rating text
            // Create div
            var gifDiv = $("<div>");

            // add a class to gif div
            gifDiv.addClass("topicGif")

            // Create papagraph for rating
            var gifP = $("<p>");

            // Adding rating to paragraph
            gifP.text("(Rated " + gifsData[i].rating + ")" );

            // Create img for gif
            var gifImg = $("<img>");

            // Set the img source URL from the response gif data to that for the "static, non-animated" version of the gif 
            gifImg.attr("src", gifsData[i].images.fixed_height_still.url);

            //append the img to the paragrapgh in the div
            gifDiv.append(gifImg);

            // Append the rating paragraph to the div
            gifDiv.append(gifP);

            //Place the div,p, and img set before the anchor div by referencing it and using the "prepend method"
            $("#images-anchor").prepend(gifDiv);



        }
    
    });
});

/*      •	On user click of one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

        •	Under every gif, display its rating (PG, G, so on).

        •	Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

        •	Deploy your assignment to Github Pages.submit both the deployed Github.io link to your homework AND the link to the Github Repository. Add a link to your updated portfolio in the comments section of your homework

        •	Update README.md

        •	### Bonus Goals

        1. Ensure your app is fully mobile responsive.

        2. Allow users to request additional gifs to be added to the page.
           * Each request should ADD 10 gifs to the page, NOT overwrite the existing gifs.

        3. List additional metadata (title, tags, etc) for each gif in a clean and readable format.

        4. Include a 1-click download button for each gif, this should work across device types.

        5. Integrate this search with additional APIs such as OMDB, or Bands in Town. Be creative and build something you are proud to showcase in your portfolio

        6. Allow users to add their favorite gifs to a `favorites` section.  This should persist even when they select or add a new topic. Look into making this section persist even when the page is reloaded(via localStorage or cookies).
        */
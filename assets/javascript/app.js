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
             
        function buildTopicButtons (topic, i) {
           // console.log("buildTopicButtons"); 
           // console.log("topic: " ,topic, "   i: ", i);   
/* TO DO: 
        foreach element in the array    
        create a variable newButton to hold a button element
        set the button id attr to 'topicButton',set the data value and the text to that of the array string */
        var newButton = $("<button>");
        newButton.addClass("topicButton");
        newButton.attr("value",topic);
        newButton.text(topic);
        /* reference exisiting HTML element to insert new element before */ 
        $("#buttons-anchor").prepend(newButton);


        };
        
  /*    •	Take the topics in this array and create buttons in your HTML using a loop that appends a button for each string in the array. */
        topics.forEach(buildTopicButtons);
        console.log("Call buildTopicButtons");
/*        
        •	On user click of a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
        
        •	On user click of one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.
        
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
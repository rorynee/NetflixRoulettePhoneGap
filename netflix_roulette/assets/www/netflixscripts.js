/**
 * The following function us used to make the api calls. The function makes all the call depending 
 * on the category passed to it.
 * 
 * @param category
 * @param text
 */

function getNetflixDate(category,text){
	
	
	var searchTerm = category + "=" + text;
	
	var api_url = "http://netflixroulette.net/api/api.php?";
	
	/* The Ajax Call   */
    $.ajax({
      type: "GET",
      url: api_url+""+searchTerm,
      dataType: "json",
      cache: false,
      async: false,
      dataType: "text",
      success: function(data, textStatus, jqXHR){ // On success
    	  
    	  var mydate = $.parseJSON(data);
    	  onSuccess(mydate);
    	 // Change the page to a different page so the user can see the results because the result do not show
    	 // on the search pages.
    	 $.mobile.changePage( "#result_page", { transition: "slide", changeHash: true });
    	 
    	 /*
    	  * When the result goes through and it is the right result i am then clearing the
    	  * any error results and clearing the input boxes
    	  * */
    	 if(category == "title")
    	 {
	    	 $("#error_result").text(""); 
			 $("#title_input").val("");
    	 }else if(category == "actor"){
    		 
    		 $("#error_result_actor").text("");
  		   	$("#actor_input").val("");
  	   
  	  
    	 }else{
  		   $("#error_result_director").text("");
  		   $("#director_input").val("");
    	 }
    	  
    	  
      },
      error: function(jqXHR, textStatus, errorThrown){ // on error
    	  var responseText = ""; // Text for the alert screen
    	  
    	  if(jqXHR.status == 404){ // 404 not found error
    		  responseText = "Sorry! We couldn't find a movie with that title!";
    		  if(category == "title"){
    			  responseText = "Sorry! We couldn't find a movie with that title!";
    			  $("#error_result").html("Error: "+responseText);
    		    	 
    	    	 }else if(category == "actor"){
    	    		 responseText = "Sorry! We couldn't find an Actor with that name!";
    	    		 $("#error_result_actor").html("Error: "+responseText);
    	  	   
    	  	  
    	    	 }else{
    	    	   responseText = "Sorry! We couldn't find a director with that name!";
    	  		   $("#error_result_director").html("Error: "+responseText);
    	    	 }
    		 
    	  }else if(jqXHR.status == 400){ // 400 Bad request
    		  responseText = "Sorry! Your input length must be greater than 5";
    		  	if(category == "actor"){
    	    		 
    	    		 $("#error_result_actor").html("Error: "+responseText);
    	  	   
    	  	  
    	    	 }else{
    	  		   $("#error_result_director").html("Error: "+responseText);
    	    	 }
    	  } else { // Connection error
    		  
    		  responseText = "Error: There was a problem with the connection. Please try again later.";
    		  if(category == "title"){
    			  $("#error_result").html(responseText);  
    		    	 
    	    	 }else if(category == "actor"){
    	    		 
    	    		 $("#error_result_actor").html(responseText);  
    	  	   
    	  	  
    	    	 }else{
    	  		   $("#error_result_director").html(responseText);  
    	    	 }
    	  }
    	 
    	  // adding the notification alert and the beep sound for errors
    	 navigator.notification.vibrate(2000);  
 	     var alert_title = "Error Message";
 	     var buttonName = "Alert";
 	     navigator.notification.alert(responseText, alert_title, buttonName);
 		 navigator.notification.beep(1);
    	  
    	  
      }
    });

    /**
     * If the aJax method is successful call the following function  
     * @param data
     */
    function onSuccess(data)
    {
    	
    	
    	$("#result").text("");
    	
    	// Due to the API only sending back single object like --- { .. info .. }
    	// and for more than one an array of objects -- [{},{},{},{}]
    	// I have had to check the lenght doing it this way instead of 
    	// if(typeof date = "Object")
    	//
    	
    	/* Adding the results to the results page */
    	if(data.length > 1){
    		
    		$.each(data, function(index, result){
                $('#result').append('<p><img src="'+result.poster+'" alt="'+result.show_title+'" data-role="dynamic-image"></p>'+
               		 '<table class="resulttable"><tbody><tr><td class="label">Show Title: </td><td>'+result.show_title+'</td></tr>'+
               		 '<tr><td class="label">Release Year: </td><td>'+result.release_year+'</td></tr>'+
               		 '<tr><td class="label">Rating: </td><td>'+result.rating+'</td></tr>'+
               		 '<tr><td class="label">Runtime: </td><td>'+result.runtime+'</td></tr>'+
               		 '<tr><td class="label">Category: </td><td>'+result.category+'</td></tr>'+
               		 '<tr><td class="label">Show Id: </td><td>'+result.show_id+'</td></tr>'+
               		 '<tr><td class="label">Director: </td><td>'+result.director+'</td></tr>'+
               		 '<tr><td class="label">Show Cast: </td><td>'+result.show_cast+'</td></tr>'+
               		 '<tr><td class="label">Summary: </td><td>'+result.summary+'</td></tr>'+
               		 
               		 '</tbody></table>');
              });
    		
    		
    	}else{
    		
    		 $('#result').append('<p><img src="'+data.poster+'" alt="'+data.show_title+'" data-role="dynamic-image"></p>'+
               		 '<table class="resulttable"><tbody><tr><td class="label">Show Title: </td><td>'+data.show_title+'</td></tr>'+
               		 '<tr><td class="label">Release Year: </td><td>'+data.release_year+'</td></tr>'+
               		 '<tr><td class="label">Rating: </td><td>'+data.rating+'</td></tr>'+
               		 '<tr><td class="label">Runtime: </td><td>'+data.runtime+'</td></tr>'+
               		 '<tr><td class="label">Category: </td><td>'+data.category+'</td></tr>'+
               		 '<tr><td class="label">Show Id: </td><td>'+data.show_id+'</td></tr>'+
               		 '<tr><td class="label">Director: </td><td>'+data.director+'</td></tr>'+
               		 '<tr><td class="label">Show Cast: </td><td>'+data.show_cast+'</td></tr>'+
               		 '<tr><td class="label">Summary: </td><td>'+data.summary+'</td></tr>'+
               		
               		 '</tbody></table>');
           
      } 
    	 
    }

	
	
}


/**
 * Checking for an empty input text box
 * 
 */
function checkEmptyTextBox(textlength){
	if(textlength == 0){
		
		 navigator.notification.vibrate(2000);  
		 var  message = "Error: Value enter was invalid";
	     var alert_title = "Error Message";
	     var buttonName = "Alert";
	     navigator.notification.alert(message, alert_title, buttonName);
		 navigator.notification.beep(1);
		 return false;
	   }else{
		   return true;
	   }
}

$(document).ready(function(){
	

	    /* the following function clears all the input boxes because i did not want the user to reenter 
	     * a page and see the last thing the user searched for */
		$("[data-myclear='clear']").on("click", function(evt){
			$( "input[name*='name']" ).val("");
		   });
	
		// The on click functions for the search screens
		$("#title_btn").on("click", function(evt){
		   var title = $("#title_input").val();
		   var text =  title.trim().length;
		   
		   // using the function that checks to make sure the input field has data in it
		   if(checkEmptyTextBox(text)){
			   getNetflixDate("title",title.trim());
		   }
		   
		   
	   });
		
	   $("#actor_btn").on("click", function(evt){
		   var actor = $("#actor_input").val();
		   var text =  actor.trim().length;
		   
		   if(checkEmptyTextBox(text)){
			   getNetflixDate("actor",actor.trim());
		   }
		   
		   
	   });
	   
	   $("#director_btn").on("click", function(evt){
		   var director = $("#director_input").val();
		   var text =  director.trim().length;
		   
		   if(checkEmptyTextBox(text)){
			   getNetflixDate("director",director.trim());
		   }
		   
		   
	   });
	   /*
	    * Reset button to clear the input field and clear the error field. */
	   $("#reset_title").on("click", function(evt){
		   $("#error_result").text("");
		   $("#title_input").val("");
	   });
	   
	   $("#reset_actor").on("click", function(evt){
		   $("#error_result_actor").text("");
		   $("#actor_input").val("");
	   });
	   
	   $("#reset_director").on("click", function(evt){
		   $("#error_result_director").text("");
		   $("#director_input").val("");
	   });   

});

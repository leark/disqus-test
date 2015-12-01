$(function() {

	var ACCESS_TOKEN = "d1a4145e953c4c4e9f0ee0c61c202486";
	var API_KEY = "zFYDrRp7UkXfhX3xWuGaLQfi2T0hBjUeJLAszIKIC0RObnKclNc1yPkDGslOotqB";
	var api_secret = "pn6sboBzfjR73EczCcJuRizm4QGbrB7WJFdykUF1XeNksXqH1Dmp1esoz4LY1rmn";

	// $.post( "https://disqus.com/api/3.0/forums/create.json", {}, function( data ) {
 // 		$( ".result" ).html( data );
 //  		alert( "Load was performed." );
	// });

	var data = {
		access_token: ACCESS_TOKEN,
	  api_key: API_KEY,
		website: "http://students.washington.edu/shl7/info343/disqus-test", 
		name: "forum1",
		shortname: "uwexample1" 
	};

	$.ajax({
		type: "POST",
		url: "https://disqus.com/api/3.0/forums/create.json",
	  data: data,
	  success: success,
	  dataType: "JSON"
	});
})

var success = function() {
	console.log("success");
}
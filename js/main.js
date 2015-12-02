$(function() {

	var ACCESS_TOKEN = "d1a4145e953c4c4e9f0ee0c61c202486";
	var API_KEY = "zFYDrRp7UkXfhX3xWuGaLQfi2T0hBjUeJLAszIKIC0RObnKclNc1yPkDGslOotqB";
	var api_secret = "pn6sboBzfjR73EczCcJuRizm4QGbrB7WJFdykUF1XeNksXqH1Dmp1esoz4LY1rmn";

	// $.post( "https://disqus.com/api/3.0/forums/create.json", {}, function( data ) {
 // 		$( ".result" ).html( data );
 //  		alert( "Load was performed." );
	// });

	var data;

// 	$.ajax({
// 		type: "POST",
// 		url: "https://disqus.com/api/3.0/forums/create.json",
// 	  data: JSON.stringify({
// 			access_token: ACCESS_TOKEN,
// 		  api_key: API_KEY,
// 			website: "http://students.washington.edu/shl7/info343/disqus-test", 
// 			name: "forum1",
// 			shortname: "uwexample1" 
// 	  }),
// 	  success: success,
// 	  dataType: "JSON"
// 	});
// })
	$.get("https://disqus.com/api/3.0/users/listForums.json", 
		{	access_token: ACCESS_TOKEN,
		  api_key: API_KEY,
			user: "185257554",
			order: "asc" }, function(response) {
		data = response.response;
		console.log(data);
		forums(data);
	})


	$.get("https://disqus.com/api/3.0/forums/listPosts.json", 
		{	access_token: ACCESS_TOKEN,
		  api_key: API_KEY,
			forum: "uwexample1",
			order: "asc" }, function(response) {
		data = response.response;
		console.log(data);
		comments(data);
	})

	$.post("https://disqus.com/api/3.0/threads/create.json", 
		{	access_token: ACCESS_TOKEN,
		  api_key: API_KEY,
			forum: "uwexample1",
			title: "thread1" }, function(response) {
		data = response;
		console.log("ceating thread1");
		console.log(data);
	})	

	// $.post("https://disqus.com/api/3.0/forums/create.json", 
	// 	{	access_token: ACCESS_TOKEN,
	// 	  api_key: API_KEY,
	// 		website: "uwexample3.disqus.com",
	// 		name: "uwexample3",
	// 		short_name: "uwexample3" }, function(response) {
	// 	data = response;
	// 	console.log(data);
	// })
})

var comments = function(data) {
	$.each(data, function(i) {
		var message = data[i];
		var singleM = $("<div>");
		singleM.append($("<h4>").text(message.author.name));
		singleM.append(message.message);

		$("#comments").append(singleM);
	})
}

var forums = function(data) {
	$.each(data, function(i) {
		var forum = data[i];
		var name = $("<li>").text(forum.name);

		$("#forums").append(name);
	})
}
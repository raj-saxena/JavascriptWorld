
$(document).ready(function () {
	$.ajax({
		type: "POST",
  		url: "detectFace",
  		data: { uuid: "data to be sent"}
	}).done(function( o ) {
   		console.log("python script called => ");
   		console.log(o);// do something
	});


	console.log("ready!");

	var container = $("#container");
	container.append("<div>Hello world.!</div>");
	container.append("<a href='http://jquery.com/'>jQuery</a>");
	container.append("<div>Hello world again.!</div>");

	$( "a" ).click(function( event ) {
		event.preventDefault();
		$( this ).hide( "slow" );
		// $.get( "http://www.example.com/", myCallBack );
	});
});

function myCallBack(argument) {
	console.log(argument);
}


function doThisOnReady () { // Equal to $(function() {
	
}

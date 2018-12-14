//check off specific todos by clicking 
//here just .click(function) would have worked but that doesnt 
//support for the lists that will be added in the future
$("ul").on("click", "li", function(){
	//
	// $(this).css("color", "gray");
	// $(this).css("text-decoration", "line-through")

//this is the better way but here text decoration doesnt have dashed
//its because in javascript it doesnt work. Only in css is valid

//THIS CODE IS BEFORE WE MAKE CLASS=COMPLETED IN CSS
	// if($(this).css("color") === "rgb(128, 128, 128)"){
	// 	$(this).css({
	// 	  color: "black",
	// 	  textDecoration:  "none"
	// 	});
	// }else{
	// 	$(this).css({
	// 	  color: "gray",
	// 	  textDecoration:  "line-through"
	// 	});
	// }

	//AFTER (COMPLETED) CLASS IS CREATED
	//THIS IS THE ADVANTAGE OF TOGGLE
	$(this).toggleClass("completed");
});

//CLICK ON X TO DELETE TODO
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	}); 
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.which === 13){
		var todoText = $(this).val();//grabs new list from user from input text
		$(this).val("");
		//create new lit and add to ul
		$("ul").append("<li><span>X </span>" + todoText + "</li>")
	}
})
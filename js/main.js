//everything here is a comment. when a page loads the browser looks through code and creates something called a DOM which is a family tree of the code. 
function askQuestions(){


var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');

var fullName = firstName + ' ' + lastName;

if (firstName.toLowerCase() == 'general' && lastName.toLowerCase() != 'assembly') {
	console.log('Hello ' + fullName)
	$('h2').text('Hello ' + fullName);
}
 //this is useful to make sure data things are working



var userAge = prompt('How old are you?');
userAge = parseInt(userAge);

if (userAge >= 18) {
	console.log('User is an adult!');
} else if (userAge >=13) {
	alert('Come back in 5 years.');
}
else {
	alert('Go away, child!');
}

}

//when the page has loaded - $ calls jquery / function is a shortcut to tell jquery to do the function when DOM is ready
//function is pointing to do the stuff in the curly brackets
$(function(){

	$('img').on('click', askQuestions);

	// hide the content
	$('h3').next().hide();

	//when the user clicks on an h3 - this is telling jquery to go through DOM and find the h3s 
	$('h3').on('click', function() {

		//find the next element and hide it
		$(this).next().slideToggle(100);
		//toggle a class of open when cliccked
		$(this).toggleClass('open');

	});

});
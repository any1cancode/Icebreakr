//Defining the 'next' button and the container for the question text
var button = document.getElementById('nextQuestion'), question = document.getElementById('icebreaker'), objectData;

//Saves data to variable. I would do this normally, but variables cannot be saved in the normal sense within .then promises
function saveData(data)
{
	objectData = data;
}

//Function for populating the question container with a random question from the .json
function getRandomQuestion()
{
	fetch('questions.json')
		.then(response => response.json())
		.then(data => {
			saveData(data);
			
			//Generate a random number between one and thirty, and then select the question with that index number from the JSON list
			question.innerHTML = data[Math.floor(Math.random() * 30) + 1];
		});
}

//Populating the question container with a random question from the .json when the content is loaded
document.addEventListener('DOMContentLoaded', function()
{
	getRandomQuestion();
});

//Listener detecting clicks on the "NEXT" button
var previousIndex, index;
button.addEventListener('click', function(){
	
	//Rerolls if the previous random number is equal to the new one, to prevent duplicates
	previousIndex = index;
	index = Math.floor(Math.random() * 30) + 1;
	if (previousIndex == index) index = Math.floor(Math.random() * 30) + 1;
	
	question.innerHTML = objectData[Math.floor(Math.random() * 30) + 1]; 
});
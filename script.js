
function createPoll() {
    
    var question = document.getElementById('pollQuestion').value;
    var options = document.getElementById('pollOptions').value.split(',');

    
    if (question === '' || options.length === 0 || options[0] === '') {
        alert("Please enter both a question and options.");
        return;
    }

 
    document.getElementById('pollDisplayQuestion').innerText = question;

    
    var pollOptionsDisplay = document.getElementById('pollOptionsDisplay');
    pollOptionsDisplay.innerHTML = ''; 

   
    for (var i = 0; i < options.length; i++) {
        pollOptionsDisplay.innerHTML += `
            <label>
                <input type="radio" name="pollOption" value="${i}"> ${options[i].trim()}
            </label><br>`;
    }

    
    document.getElementById('poll-creation').style.display = 'none';
    document.getElementById('poll-voting').style.display = 'block';
}

// Function to submit the vote
function submitVote() {
    // Get the selected option
    var selectedOption = document.querySelector('input[name="pollOption"]:checked');

    // If no option is selected, show an alert
    if (!selectedOption) {
        alert("Please select an option before voting.");
        return;
    }

    // Get the selected option value
    var selectedValue = selectedOption.value;

    // Display the results (in a basic way, we assume there's just one vote per submission)
    displayResults(selectedValue);
}
function displayResults(selectedValue) {
    var options = document.getElementById('pollOptions').value.split(',');

    // Create an array to count votes (mock data, assuming each vote is counted once)
    var results = new Array(options.length).fill(0);

    
    results[selectedValue]++;

  
    var resultsDisplay = document.getElementById('resultsDisplay');
    resultsDisplay.innerHTML = ''; // Clear previous results
    for (var i = 0; i < options.length; i++) {
        resultsDisplay.innerHTML += `<li>${options[i].trim()}: ${results[i]} votes</li>`;
    }

    
    document.getElementById('poll-voting').style.display = 'none';
    document.getElementById('poll-results').style.display = 'block';
}


document.getElementById('pollForm').addEventListener('submit', function(event) {
    event.preventDefault();
    createPoll();
});

document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitVote();
});

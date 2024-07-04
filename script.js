document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    const loveScore = calculateLoveScore(name1, name2);
    displayResult(loveScore);
});

function calculateLoveScore(name1, name2) {
    const combinedNames = name1 + name2;
    let score = 0;
    
    for (let i = 0; i < combinedNames.length; i++) {
        score += combinedNames.charCodeAt(i);
    }

    return score % 101; // Return a value between 0 and 100
}

function displayResult(score) {
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your love score is ${score}%!`;
}

function checkAnswer(isCorrect) {
    const result = document.getElementById("quiz-result");

    if (isCorrect) {
        result.textContent = "Correct! ✅ You should verify the message through the official website.";
        result.className = "correct";
    } else {
        result.textContent = "Incorrect! ❌ Do not click suspicious links or share your password.";
        result.className = "incorrect";
    }
}
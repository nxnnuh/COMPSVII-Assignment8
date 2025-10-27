console.log("script.js connected!");

// Select all answer buttons
const answerButtons = document.querySelectorAll('.answer-btn');

// When a button is clicked, highlight it and store its choice
answerButtons.forEach(button => {
  button.addEventListener('click', () => {
    const parentBlock = button.closest('.question-block');
    
    // Remove active state from all buttons in that question
    parentBlock.querySelectorAll('.answer-btn').forEach(btn => btn.classList.remove('active'));
    
    // Highlight selected button
    button.classList.add('active');
  });
});


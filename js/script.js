console.log("script.js connected!");

// Store user answers
let answers = [];

// Select all question blocks
const questionBlocks = document.querySelectorAll(".question-block");

// Loop through each question
questionBlocks.forEach((block, index) => {
  const buttons = block.querySelectorAll(".answer-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove highlight from all buttons in that question
      buttons.forEach((b) => b.classList.remove("selected"));
      // Highlight clicked button
      button.classList.add("selected");
      // Store the selected answer (A, B, C, or D)
      answers[index] = button.dataset.answer;
    });
  });
});

// When "Show Results" button is clicked
document.getElementById("show-result").addEventListener("click", () => {
  // Check if all questions were answered
  if (answers.length < questionBlocks.length || answers.includes(undefined)) {
    alert("Please answer all the questions!");
    return;
  }

  // Count how many times each letter appears
  const counts = {};
  answers.forEach((a) => {
    counts[a] = (counts[a] || 0) + 1;
  });

  // Find the answer letter that appears most
  let result = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));

  // DOM elements
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result-text");

  // Define result info 
  let title = "";
  let description = "";
  let image = "";

  switch (result) {
    case "A":
      title = "You’re Goku! 🐉";
      description = "Energetic, determined, and always ready for a challenge!";
      image = "./img/goku.png";
      break;
    case "B":
      title = "You’re Levi Ackerman! ⚔️";
      description = "Disciplined, calm, and quietly powerful, a true leader.";
      image = "./img/levi.png";
      break;
    case "C":
      title = "You’re Luffy! ☠️";
      description = "Optimistic, adventurous, and loyal to your friends.";
      image = "./img/luffy.png";
      break;
    case "D":
      title = "You’re Saitama! 🥊";
      description = "Cool-headed, simple, and unbeatable, you take life easy.";
      image = "./img/saitama.png";
      break;
    default:
      title = "You’re a Mystery Protagonist!";
      description = "You don’t fit into one category, you’re truly unique.";
      image = "./img/ideas.png";
  }

  // Display the result in the DOM
  resultText.innerHTML = `
    <h4>${title}</h4>
    <p>${description}</p>
    <img src="${image}" alt="${title}" class="img-fluid mt-3 rounded shadow">
  `;
  resultContainer.style.display = "block";
});

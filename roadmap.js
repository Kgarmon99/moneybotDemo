// Function to handle clicks on challenges
function handleChallengeClick(event) {
  // Check if the clicked element is a challenge
  if (event.target.classList.contains("challenge")) {
    // Add your code to handle challenge clicks here
    // For example, you can open a new page or display more information about the challenge.
    // You can access the challenge text using event.target.innerText.
    // Example: const challengeText = event.target.innerText;
    // You can then use challengeText to perform the desired action.
  }
}

// Add event listener to the roadmap container
const roadmapContainer = document.querySelector(".roadmap-container");
roadmapContainer.addEventListener("click", handleChallengeClick);

// Get references to the container elements
const registrationContainer = document.getElementById('registration-container');
const avatarContainer = document.getElementById('avatar-container');
const financialContainer = document.getElementById('financial-container');
const goalSettingContainer = document.getElementById('goal-container'); // Updated ID
const dashboardContainer = document.getElementById('dashboard-container');

// Get references to the "Next" buttons
const registrationNextBtn = document.getElementById('registration-next');
const avatarNextBtn = document.getElementById('avatar-next');
const financialNextBtn = document.getElementById('financial-next');
const goalSettingNextBtn = document.getElementById('goal-next'); // Updated ID

// Handle "Next" button clicks
registrationNextBtn.addEventListener('click', function() {
    registrationContainer.style.display = 'none';
    avatarContainer.style.display = 'block';
});

avatarNextBtn.addEventListener('click', function() {
    avatarContainer.style.display = 'none';
    financialContainer.style.display = 'block';
});

financialNextBtn.addEventListener('click', function() {
    financialContainer.style.display = 'none';
    goalSettingContainer.style.display = 'block';
});

goalSettingNextBtn.addEventListener('click', function() {
    goalSettingContainer.style.display = 'none';
    dashboardContainer.style.display = 'block';
});

// Functions and interactions for the goal-setting section
const goalForm = document.getElementById('goal-form');
goalForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Process the goal-setting data here
    // You can add code to send this data to your server or perform other actions
    const goalDescription = document.getElementById('goal-description').value;
    const goalAmount = document.getElementById('goal-amount').value;

    // You can add your own logic to handle goal data (e.g., sending to a server)
    console.log('Goal Description:', goalDescription);
    console.log('Goal Amount:', goalAmount);

    // Example: Clear form fields after submission
    goalForm.reset();
});

// Additional JavaScript code for the dashboard or other sections
// Example: Handling a button click in the dashboard
const trackIncomeButton = document.getElementById('track-income-button');
trackIncomeButton.addEventListener('click', function() {
    // Implement what happens when the "Track Income" button is clicked
});

// Example: Adding dynamic content to the dashboard
const dashboardContent = document.querySelector('.dashboard-content');
// Create a new dashboard item
const newDashboardItem = document.createElement('div');
newDashboardItem.className = 'dashboard-item';
newDashboardItem.innerHTML = `
    <h2 class="dashboard-item-title">New Feature</h2>
    <p class="dashboard-item-description">This is a new feature in MoneyBot.</p>
    <a href="#" class="dashboard-item-button">Explore</a>
`;
// Append the new item to the dashboard
dashboardContent.appendChild(newDashboardItem);

// You can add more interactions and functionality for specific sections as needed
// Get references to the HTML elements
const confidenceSlider = document.getElementById('confidence');
const confidenceValue = document.getElementById('confidence-value');

// Define your confidence levels
const confidenceLevels = ['Newbie👶🏾','Getting There📈', 'Average👌', 'Confident🫡', 'Super Confident🦸🏾‍♂️','Im Rich Bitch🤑'];

// Add an event listener to the slider to update the displayed value
confidenceSlider.addEventListener('input', function() {
    const sliderValue = parseInt(confidenceSlider.value);
    // Update the displayed value based on the slider value and confidence levels
    confidenceValue.textContent = confidenceLevels[sliderValue];

  // Handle "Add Goal" button click to add selected goals to the list
  const addGoalButton = document.getElementById('add-goal');
  addGoalButton.addEventListener('click', function () {
      const shortTermGoalSelect = document.getElementById('short-term-goal');
      const longTermGoalSelect = document.getElementById('long-term-goal');
      const goalDescription = document.getElementById('goal-description').value;
      const goalAmount = document.getElementById('goal-amount').value;
      const goalDeadline = document.getElementById('goal-deadline').value;

      const selectedShortTermGoal = shortTermGoalSelect.options[shortTermGoalSelect.selectedIndex].text;
      const selectedLongTermGoal = longTermGoalSelect.options[longTermGoalSelect.selectedIndex].text;

      // You can add code to display or store these selected goals as needed
      // For now, I'll just log them as an example
      console.log('Goal Description:', goalDescription);
      console.log('Goal Amount:', goalAmount);
      console.log('Goal Deadline:', goalDeadline);
      console.log('Short-Term Goal:', selectedShortTermGoal);
      console.log('Long-Term Goal:', selectedLongTermGoal);

    // First, add an ID to your profile picture element in your HTML:
    // <div class="profile-picture" id="profile-picture">
    //    <img src="profile-picture.jpg" alt="Your Profile Picture">
    // </div>

    // Next, add JavaScript to handle the click event and toggle between the dashboard and user profile:
    const profilePicture = document.getElementById("profile-picture");
    const dashboardPage = document.getElementById("user-dashboard-page-2");

    // Initially, hide the user profile page
    dashboardPage.style.display = "none";

    // Add a click event listener to the profile picture
    profilePicture.addEventListener("click", function () {
      // Check if the dashboard page is currently visible
      if (dashboardPage.style.display === "none") {
        // If it's hidden, show it
        dashboardPage.style.display = "block";
      } else {
        // If it's visible, hide it
        dashboardPage.style.display = "none";
      }
      // Get references to the button and the user profile visualization container
      const showUserProfileButton = document.getElementById('showUserProfileButton');
      const userProfileVisualization = document.getElementById('user-profile-visualization'); // This should match the ID of your user profile visualization container

      // Add an event listener to the button
      showUserProfileButton.addEventListener('click', function () {
          // Check if the user profile visualization is currently hidden
          if (userProfileVisualization.style.display === 'none') {
              // If it's hidden, show it
              userProfileVisualization.style.display = 'block';
          } else {
              // If it's visible, hide it
              userProfileVisualization.style.display = 'none';
            
          }
      });
    });
  });
  
});
// Get references to the container elements
const registrationContainer = document.getElementById('registration-container');
const avatarContainer = document.getElementById('avatar-container');
const financialContainer = document.getElementById('financial-container');
const goalSettingContainer = document.getElementById('goal-container');
const dashboardContainer = document.getElementById('dashboard-container');

// Get references to the "Next" buttons
const registrationNextBtn = document.getElementById('registration-next');
const avatarNextBtn = document.getElementById('avatar-next');
const financialNextBtn = document.getElementById('financial-next');
const goalSettingNextBtn = document.getElementById('add-goal');

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
const goalDescriptionInput = document.getElementById('goal-description');
const goalAmountInput = document.getElementById('goal-amount');
const goalList = document.getElementById('goal-list');

goalForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const goalDescription = goalDescriptionInput.value;
    const goalAmount = goalAmountInput.value;

    // You can add your own logic to handle goal data (e.g., sending to a server)
    console.log('Goal Description:', goalDescription);
    console.log('Goal Amount:', goalAmount);

    // Example: Display added goals in a list
    const goalItem = document.createElement('div');
    goalItem.textContent = `Goal: ${goalDescription}, Amount: $${goalAmount}`;
    goalList.appendChild(goalItem);

    // Clear form fields after submission
    goalForm.reset();
});

// Additional JavaScript code for the dashboard or other sections
// Example: Handling a button click in the dashboard
const trackIncomeButton = document.getElementById('track-income-button');
if (trackIncomeButton) {
    trackIncomeButton.addEventListener('click', function() {
        // Implement what happens when the "Track Income" button is clicked
    });
}

// Example: Adding dynamic content to the dashboard
const dashboardContent = document.querySelector('.dashboard-content');
if (dashboardContent) {
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
}

// You can add more interactions and functionality for specific sections as needed
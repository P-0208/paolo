// Function to handle tab switching
function openTab(event, tabId) {
    // Hide all tab content
    let tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));

    // Remove active class from all buttons
    let tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));

    // Show the selected tab and activate the button
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// Set the first tab as active by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button').click();
});

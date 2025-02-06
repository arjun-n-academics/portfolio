// Calculate experience dynamically with accurate month difference
const startDate = new Date('2025-01-01'); // Start date of current role
const currentDate = new Date();
const startMonth = startDate.getMonth();
const startYear = startDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

// Calculate the difference in months
let diffMonths = (currentYear - startYear) * 12 + (currentMonth - startMonth);
if (currentDate.getDate() < startDate.getDate()) {
    diffMonths--;  // Adjust if the current date hasn't reached the start date in the current month
}

document.getElementById('experience-duration').innerText = `Jan 2025 - Present · ${diffMonths} months`;

// Copy functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Get the text inside the <a> tag
        const targetText = this.previousElementSibling.textContent.trim();  // <a> is previous to the button
        navigator.clipboard.writeText(targetText).then(() => {
            this.innerText = 'Copied';
            setTimeout(() => {
                this.innerText = 'Copy';
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});

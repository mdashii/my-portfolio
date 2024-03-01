const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const section = document.getElementById('projects'); 

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        section.style.backgroundColor = '#334'; // Reset background color when switching to dark mode
    } else {
        localStorage.setItem('theme', 'light');
        if (window.innerWidth > 500) {
            section.style.backgroundColor = 'darkgrey'; // Set light mode background color for screen size above 500px
        } else {
            section.style.backgroundColor = '#f0f0f0'; // Reset background color for smaller screens
        }
    }
});

// Check for user's preferred theme
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (userPrefersDark || localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
} else {
    body.classList.remove('dark-mode');
    if (window.innerWidth > 500 && localStorage.getItem('theme') !== 'dark') {
        section.style.backgroundColor = '#f0f0f0'; // Set light mode background color for screen size above 500px and when theme is not explicitly set to dark
    }
}


//theme-button end



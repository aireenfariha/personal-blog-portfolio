// Dark Mode Toggle Feature
const btn = document.getElementById('darkModeBtn');

if (btn) {
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save preference
        localStorage.setItem(
            'darkMode',
            document.body.classList.contains('dark-mode')
        );
    });
}

// Load preference on refresh
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}
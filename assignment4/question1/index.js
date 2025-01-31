const toggleButton = document.getElementById('theme-toggle');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleButton.textContent = 'Enable Light Mode';
}


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        toggleButton.textContent = 'Enable Light Mode';
        localStorage.setItem('theme', 'dark');  
    } else {
        toggleButton.textContent = 'Enable Dark Mode';
        localStorage.setItem('theme', 'light');
    }
});

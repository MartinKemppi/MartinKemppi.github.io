const AA = new Date().getFullYear();

const footer = document.querySelector('footer p');
if (footer) {
    footer.innerHTML = `&copy; ${AA} Martin Kemppi`;
}

const teema = document.getElementById('teema');
const body = document.body;

function kinnitaTeema(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        teema.textContent = '🌙';
    } else {
        body.classList.remove('dark-theme');
        teema.textContent = '🌞';
    }
}

const salvestatudTeema = localStorage.getItem('theme') || 'light';
kinnitaTeema(salvestatudTeema);

teema.addEventListener('click', () => {
    const onMust = body.classList.toggle('dark-theme');
    const uusTeema = onMust ? 'dark' : 'light';
    localStorage.setItem('theme', uusTeema);
    teema.textContent = onMust ? '🌙' : '🌞';
});
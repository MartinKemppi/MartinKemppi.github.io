const AA = new Date().getFullYear();
const languageSelector = document.getElementById('lang-emoji');
const teemaButton = document.getElementById('teema');
const languages = ['et', 'en', 'ru'];
let currentLanguage = 'et';
const translations = {
    et: {
        title: 'Martin Kemppi koduleht',
        aboutTitle: 'Mina',
        aboutSubtitle: 'Endast',
        skillsTitle: 'Oskused',
        projectsTitle: 'Projektid',
        portfolioTitle: 'Portfoolio',
        nav: {
            about: 'Endast',
            skills: 'Oskused',
            projects: 'Projektid',
            portfolio: 'Portfoolio'
        },
        skills: {
            languageSkills: 'Keeleoskused',
            programmingSkills: 'Arvutioskused',
            languageList: [
                'Eesti keel - B2',
                'Inglise keel - B2',
                'Vene keel - C2',
                'Soome keel - B1',
                'Saksa keel - A1'
            ],
            programmingList: [
                '<strong>Programmeerimiskeeled</strong>: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                '<strong>Teadmiste haldus ja juhendmaterjalide koostamine</strong>: WordPress',
                '<strong>Riistvara</strong>: Arvutite komplekteerimine',
                '<strong>Projektihaldus ja koostöövahendid</strong>: Atlassian Jira, Trello, Miro',
                '<strong>Tehisintellekti tööriistad</strong>: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                '<strong>Testimine</strong>: Postman, Cypress, Selenium',
                '<strong>Operatsioonisüsteemid</strong>: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                '<strong>Virtualiseerimine</strong>: VirtualBox, Hyper-V',
                '<strong>Serveritarkvara ja andmebaasid</strong>: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                '<strong>Kontoritarkvara</strong>: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                '<strong>Veebilehitsejad</strong>: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                '<strong>Graafika ja multimeedia</strong>: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                '<strong>Võrgundus</strong>: Cisco',
                '<strong>Side ja e-post</strong>: MS Mail',
                '<strong>Versioneerimine ja CI/CD</strong>: Git, GitHub'
            ]
        },
        about: [
            '<strong>Nimi</strong>: Martin Kemppi',
            '<strong>Haridustase</strong>: Kutsekeskharidus',
            '<strong>Elukutse</strong>: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Noorem tarkvaraarendaja</a>',
            '<strong>Elukoht</strong>: Tallinn'
        ]
    },
    en: {
        title: 'Martin Kemppi website',
        aboutTitle: 'About Me',
        aboutSubtitle: 'Myself',
        skillsTitle: 'Skills',
        projectsTitle: 'Projects',
        portfolioTitle: 'Portfolio',
        nav: {
            about: 'Myself',
            skills: 'Skills',
            projects: 'Projects',
            portfolio: 'Portfolio'
        },
        skills: {
            languageSkills: 'Language Skills',
            programmingSkills: 'Computer Skills',
            languageList: [
                'Estonian - B2',
                'English - B2',
                'Russian - C2',
                'Finnish - B1',
                'German - A1'
            ],
            programmingList: [
                '<strong>Programming languages</strong>: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                '<strong>Knowledge management and documentation</strong>: WordPress',
                '<strong>Hardware</strong>: Computer assembly',
                '<strong>Project management and collaboration tools</strong>: Atlassian Jira, Trello, Miro',
                '<strong>AI tools</strong>: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                '<strong>Testing</strong>: Postman, Cypress, Selenium',
                '<strong>Operating systems</strong>: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                '<strong>Virtualization</strong>: VirtualBox, Hyper-V',
                '<strong>Server software and databases</strong>: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                '<strong>Office software</strong>: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                '<strong>Browsers</strong>: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                '<strong>Graphics and multimedia</strong>: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                '<strong>Networking</strong>: Cisco',
                '<strong>Communication and mail</strong>: MS Mail',
                '<strong>Version control and CI/CD</strong>: Git, GitHub'
            ]
        },
        about: [
            '<strong>Name</strong>: Martin Kemppi',
            '<strong>Education</strong>: Vocational secondary education',
            '<strong>Profession</strong>: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Junior Software Developer</a>',
            '<strong>Location</strong>: Tallinn'
        ]
    },
    ru: {
        title: 'Сайт Мартина Кемппи',
        aboutTitle: 'Обо мне',
        aboutSubtitle: 'О себе',
        skillsTitle: 'Навыки',
        projectsTitle: 'Проекты',
        portfolioTitle: 'Портфолио',
        nav: {
            about: 'О себе',
            skills: 'Навыки',
            projects: 'Проекты',
            portfolio: 'Портфолио'
        },
        skills: {
            languageSkills: 'Языковые навыки',
            programmingSkills: 'Компьютерные навыки',
            languageList: [
                'Эстонский - B2',
                'Английский - B2',
                'Русский - C2',
                'Финский - B1',
                'Немецкий - A1'
            ],
            programmingList: [
                '<strong>Языки программирования</strong>: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                '<strong>Управление знаниями и документация</strong>: WordPress',
                '<strong>Аппаратное обеспечение</strong>: Сборка компьютеров',
                '<strong>Управление проектами и инструменты для совместной работы</strong>: Atlassian Jira, Trello, Miro',
                '<strong>Инструменты ИИ</strong>: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                '<strong>Тестирование</strong>: Postman, Cypress, Selenium',
                '<strong>Операционные системы</strong>: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                '<strong>Виртуализация</strong>: VirtualBox, Hyper-V',
                '<strong>Серверное ПО и базы данных</strong>: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                '<strong>Офисные программы</strong>: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                '<strong>Браузеры</strong>: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                '<strong>Графика и мультимедиа</strong>: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                '<strong>Сетевые технологии</strong>: Cisco',
                '<strong>Связь и почта</strong>: MS Mail',
                '<strong>Контроль версий и CI/CD</strong>: Git, GitHub'
            ]
        },
        about: [
            '<strong>Имя</strong>: Мартин Кемппи',
            '<strong>Образование</strong>: Профессиональное среднее образование',
            '<strong>Профессия</strong>: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Младший разработчик программного обеспечения</a>',
            '<strong>Место жительства</strong>: Таллинн'
        ]
    }
};

const footer = document.querySelector('footer p');
if (footer) {
    footer.innerHTML = `&copy; ${AA} Martin Kemppi`;
}

const body = document.body;
const teema = document.getElementById('teema');

function kinnitaTeema(theme) {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        teema.textContent = '🌙';
    } else {
        body.classList.remove('dark-theme');
        teema.textContent = '🌞';
    }
}

const savedTheme = localStorage.getItem('theme') || 'light';
kinnitaTeema(savedTheme);

teema.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-theme');
    const newTheme = isDark ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    teema.textContent = isDark ? '🌙' : '🌞';
});

function changeLanguage(language) {
    currentLanguage = language;

    document.querySelector('h1').textContent = translations[currentLanguage].title;
    document.querySelector('#about h2').textContent = translations[currentLanguage].aboutTitle;
    document.querySelector('#about h3').textContent = translations[currentLanguage].aboutSubtitle;
    document.querySelector('#skills h2').textContent = translations[currentLanguage].skillsTitle;
    document.querySelector('#projects h2').textContent = translations[currentLanguage].projectsTitle;
    document.querySelector('#portfoolio h2').textContent = translations[currentLanguage].portfolioTitle;

    document.querySelector('nav ul li:nth-child(1) a').textContent = translations[currentLanguage].nav.about;
    document.querySelector('nav ul li:nth-child(2) a').textContent = translations[currentLanguage].nav.skills;
    document.querySelector('nav ul li:nth-child(3) a').textContent = translations[currentLanguage].nav.projects;
    document.querySelector('nav ul li:nth-child(4) a').textContent = translations[currentLanguage].nav.portfolio;

    document.querySelector('.language-skills').textContent = translations[currentLanguage].skills.languageSkills;
    document.querySelector('.programming-skills').textContent = translations[currentLanguage].skills.programmingSkills;

    const languageList = document.querySelector('.language-list');
    const programmingList = document.querySelector('.programming-list');
    const aboutList = document.querySelector('.about-list');

    languageList.querySelectorAll('li').forEach((li, index) => {
        li.innerHTML = translations[currentLanguage].skills.languageList[index];
    });

    programmingList.querySelectorAll('li').forEach((li, index) => {
        li.innerHTML = translations[currentLanguage].skills.programmingList[index];
    });

    aboutList.querySelectorAll('li').forEach((li, index) => {
        li.innerHTML = translations[currentLanguage].about[index];
    });
}


languageSelector.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'et';
    const newLanguage = languages[(languages.indexOf(currentLang) + 1) % languages.length];
    languageSelector.textContent = newLanguage === 'et' ? '🇪🇪' : (newLanguage === 'en' ? '🇺🇸' : '🇷🇺');
    localStorage.setItem('language', newLanguage);
    changeLanguage(newLanguage);
});

const savedLanguage = localStorage.getItem('language') || 'et';
changeLanguage(savedLanguage);
languageSelector.textContent = savedLanguage === 'et' ? '🇪🇪' : (savedLanguage === 'en' ? '🇺🇸' : '🇷🇺');

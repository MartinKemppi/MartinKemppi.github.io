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
                'Programmeerimiskeeled: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                'Teadmiste haldus ja juhendmaterjalide koostamine: WordPress',
                'Riistvara: Arvutite komplekteerimine',
                'Projektihaldus ja koostöövahendid: Atlassian Jira, Trello, Miro',
                'Tehisintellekti tööriistad: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                'Testimine: Postman, Cypress, Selenium',
                'Operatsioonisüsteemid: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                'Virtualiseerimine: VirtualBox, Hyper-V',
                'Serveritarkvara ja andmebaasid: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                'Kontoritarkvara: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                'Veebilehitsejad: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                'Graafika ja multimeedia: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                'Võrgundus: Cisco',
                'Side ja e-post: MS Mail',
                'Versioneerimine ja CI/CD: Git, GitHub'
            ]
        },
        about: [
            'Nimi: Martin Kemppi',
            'Haridustase: Kutsekeskharidus',
            'Elutse: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Noorem tarkvaraarendaja</a>',
            'Elukoht: Tallinn'
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
                'Programming languages: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                'Knowledge management and documentation: WordPress',
                'Hardware: Computer assembly',
                'Project management and collaboration tools: Atlassian Jira, Trello, Miro',
                'AI tools: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                'Testing: Postman, Cypress, Selenium',
                'Operating systems: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                'Virtualization: VirtualBox, Hyper-V',
                'Server software and databases: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                'Office software: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                'Browsers: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                'Graphics and multimedia: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                'Networking: Cisco',
                'Communication and mail: MS Mail',
                'Version control and CI/CD: Git, GitHub'
            ]
        },
        about: [
            'Name: Martin Kemppi',
            'Education: Vocational secondary education',
            'Profession: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Junior Software Developer</a>',
            'Location: Tallinn'
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
                'Языки программирования: SQL, C#, Python, PHP, JavaScript, HTML, CSS, .NET, Java, XSL, XML',
                'Управление знаниями и документация: WordPress',
                'Аппаратное обеспечение: Сборка компьютеров',
                'Управление проектами и инструменты для совместной работы: Atlassian Jira, Trello, Miro',
                'Инструменты ИИ: ChatGPT, Microsoft 365 Copilot, Google Gemini',
                'Тестирование: Postman, Cypress, Selenium',
                'Операционные системы: Windows 7, Windows 8.1, Windows 10, Windows 11, Ubuntu Desktop, Ubuntu Server',
                'Виртуализация: VirtualBox, Hyper-V',
                'Серверное ПО и базы данных: MySQL, MS SQL, MongoDB, MS Access, ASP.NET MVC',
                'Офисные программы: MS Word, MS Excel, MS PowerPoint, MS Visio, MS Project, MS Outlook, MS Teams, MS Planner, MS SharePoint',
                'Браузеры: Google Chrome, Mozilla Firefox, Opera, Internet Explorer',
                'Графика и мультимедиа: Adobe Photoshop, Adobe Illustrator, Adobe After Effects, Adobe Audition, Gimp, Inkscape',
                'Сетевые технологии: Cisco',
                'Связь и почта: MS Mail',
                'Контроль версий и CI/CD: Git, GitHub'
            ]
        },
        about: [
            'Имя: Мартин Кемппи',
            'Образование: Профессиональное среднее образование',
            'Профессия: <a href="https://www.kutseregister.ee/ctrl/et/Tunnistused/vaata/11410898">Младший разработчик программного обеспечения</a>',
            'Место жительства: Таллинн'
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
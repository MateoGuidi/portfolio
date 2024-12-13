window.langData = {};

// ONLOAD FUNCTIONS

window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'us';
    window.langData = await fetchLanguageData(userPreferredLanguage);
    const basePath = window.location.pathname.includes('/subpages/') || window.location.pathname.includes('/projects/') ? '../' : '';
    updateContent();
    let actualLang;
    let otherLang1;
    let otherLang2;
    switch (userPreferredLanguage) {
        case 'us':
            actualLang = document.getElementById("usLangButton");
            otherLang1 = document.getElementById("frLangButton");
            otherLang2 = document.getElementById("jpLangButton");
            document.getElementById("CV").href = `${basePath}assets/MateoGUIDI-CV-EN.pdf`;
            document.documentElement.lang = "en";
            break;
        case 'fr':
            actualLang = document.getElementById("frLangButton");
            otherLang1 = document.getElementById("usLangButton");
            otherLang2 = document.getElementById("jpLangButton");
            document.getElementById("CV").href = `${basePath}assets/MateoGUIDI-CV-FR.pdf`;
            document.documentElement.lang = "fr";
            break;
        case 'jp':
            actualLang = document.getElementById("jpLangButton");
            otherLang1 = document.getElementById("frLangButton");
            otherLang2 = document.getElementById("usLangButton");
            document.getElementById("CV").href = `${basePath}assets/MateoGUIDI-CV-EN.pdf`;
            document.documentElement.lang = "jp";
            break;
    }
    actualLang.classList.add('bg-blue-300', 'text-blue-500');
    otherLang1.classList.add('bg-gray-300', 'text-gray-500');
    otherLang2.classList.add('bg-gray-300', 'text-gray-500');

    if (typeof showContainers === 'function') {
        showContainers();
    }
});


// LANGUAGE FUNCTIONS

function changeLanguage() {
    const language = document.getElementById("language").value;
    console.log(language);
}

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = window.langData[key];
    });
}

async function fetchLanguageData(lang) {
    const basePath = window.location.pathname.includes('/subpages/') || window.location.pathname.includes('/projects/') ? '../' : '';
    const response = await fetch(`${basePath}languages/${lang}.json`);
    return await response.json();
}

function setLanguagePreference(langSelected) {
    const lang = langSelected;
    localStorage.setItem('language', lang);
    location.reload();
}


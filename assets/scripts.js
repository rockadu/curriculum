tailwind.config = {
  darkMode: 'class',
};

function toggleTheme() {
  const html = document.documentElement;
  const indicator = document.getElementById("themeIndicator");

  // Alternar tema e salvar no localStorage
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

if (localStorage.getItem("theme") === "dark") {
  document.documentElement.classList.add("dark");
}

if (localStorage.getItem("lang") != undefined) {
  toggleLanguageSite(localStorage.getItem("lang"));
}

function toggleMobileMenu() {
  const menu = document.getElementById('menu-mobile');
  menu.classList.toggle('hidden');
}

function toggleLanguageMenu(event) {
  event.stopPropagation();
  const menu = document.getElementById('language-menu');
  menu.classList.toggle('hidden');
}

document.addEventListener('click', function(event) {
  const menu = document.getElementById('language-menu');
  const button = document.getElementById('language-button');
  
  if (!menu.classList.contains('hidden') &&
      !menu.contains(event.target) &&
      !button.contains(event.target)) {
    menu.classList.add('hidden');
  }
});

function toggleLanguageSite(lang){
  const html = document.documentElement;
  localStorage.setItem("lang", lang);

  if(lang === "pt"){
    document.body.classList.remove('lang-en');
    document.body.classList.add('lang-pt');
  }

  else if(lang === "en"){
    document.body.classList.remove('lang-pt');
    document.body.classList.add('lang-en');
  }

  const menu = document.getElementById('language-menu');
  menu.classList.add('hidden');
}
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

function toggleMobileMenu() {
  const menu = document.getElementById('menu-mobile');
  menu.classList.toggle('hidden');
}
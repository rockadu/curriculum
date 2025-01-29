tailwind.config = {
    darkMode: 'class',
};

// Toggle dark mode
function toggleTheme() {
    const root = document.documentElement;
    if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  // Apply saved theme on load
  document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark');
    }
  });

  function toggleMobileMenu() {
    const menu = document.getElementById('menu-mobile');
    menu.classList.toggle('hidden');
  }
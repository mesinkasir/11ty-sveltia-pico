      const body = document.body;
      const html = document.documentElement;
      const themeToggle = document.getElementById('themeToggle');
      const setPreference = (theme) => {
        html.setAttribute('data-theme', theme);
        body.classList.toggle('dark', theme === 'dark');
        localStorage.setItem('theme', theme);
      };
      const getInitialTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
          return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      };
      const initialTheme = getInitialTheme();
      setPreference(initialTheme);
      themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setPreference(newTheme);
      });
      const hamburger = document.querySelector('.hamburger[data-astro-cid-3weo6hls]');
      const navLinks = document.querySelector('.nav-links[data-astro-cid-pux6a34n]');
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
          navLinks.classList.toggle('expanded');
        });
      }
import './style.css'

const themeToggle = document.querySelector('.button');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
  if (htmlElement.classList.contains('dark')) {
    htmlElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    
  } else {
    htmlElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  htmlElement.classList.add('dark');
} else {
  htmlElement.classList.remove('dark');
}

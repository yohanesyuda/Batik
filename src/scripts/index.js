import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import '../styles/contact.css';
import App from './views/app';

const app = new App({
  button: document.querySelector('.navbar-toggler-icon'),
  drawer: document.querySelector('#menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
  });

  window.addEventListener('load', () => {
    app.renderPage();
  });

  
// import '../styles/contact.css';
const languageButtons = document.querySelectorAll('[data-language]');
const languageContent = document.querySelectorAll('[data-content]');
const translatedLinks = document.querySelectorAll('[data-es][data-en]');
const _0x6e = document.querySelectorAll('.email-link');
const _0x3a = [109, 111, 99, 46, 108, 105, 97, 109, 103, 64, 110, 97, 109, 114, 101, 116, 110, 105, 111, 112, 116, 99, 117, 114, 116, 115]
  .reverse()
  .map((_0x1c) => String.fromCharCode(_0x1c))
  .join('');

_0x6e.forEach((_0x2f) => {
  _0x2f.textContent = _0x3a;
  _0x2f.href = `mailto:${_0x3a}`;
});

const applyLanguage = (language) => {
  languageButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.language === language));
  languageContent.forEach((content) => content.classList.toggle('is-hidden', content.dataset.content !== language));
  translatedLinks.forEach((link) => { link.textContent = link.dataset[language]; });
  document.documentElement.lang = language;
};

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyLanguage(button.dataset.language);
  });
});

const browserLanguage = navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
applyLanguage(browserLanguage);
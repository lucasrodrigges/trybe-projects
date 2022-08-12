const $ = (id) => document.getElementById(id);
const pth = (path) => document.querySelector(path);

function validateLogin() {
  const email = $('email');
  const password = $('password');

  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    window.alert('Olá, Tryber!');
  } else window.alert('Email ou senha inválidos.');
}

function toggleButton() {
  const btn = $('submit-btn');

  if (this.checked) btn.disabled = false;
  else btn.disabled = true;
}

function updateRemainingCharacters() {
  $('counter').innerText = 500 - this.value.length;
}

function fadeCard() {
  const card = $('card');

  $('main').style.animation = 'hidden 1s forwards';
  card.style.visibility = 'visible';
  card.style.animation = 'fade 1s forwards';
}

function createCard(e) {
  e.preventDefault();
  fadeCard();

  [...new FormData(this)].forEach((data) => {
    const element = pth(`#form-data #${data[0]}`);

    if (!element.innerText.length) element.innerText += data[1];
    else element.innerText += `, ${data[1]}`;
  });
}

window.onload = () => {
  $('login').onclick = validateLogin;
  $('agreement').onchange = toggleButton;
  $('textarea').oninput = updateRemainingCharacters;
  $('evaluation-form').onsubmit = createCard;
};

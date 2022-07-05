const TEXT_INPUT = document.getElementById('text-input');
const MEME_TEXT = document.getElementById('meme-text');
const MEME_INSERT = document.getElementById('meme-insert');

function insertText() {
  MEME_TEXT.innerText = TEXT_INPUT.value;
}
// referência da solução https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function insertImage() {
  const preview = document.querySelector('img');
  const file = document.querySelector('input[type=file]').files[0];
  const reader = new FileReader();
  reader.addEventListener('load', () => {
    // convert image file to base64 string
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}

window.addEventListener('load', () => {
  TEXT_INPUT.addEventListener('input', insertText);
  MEME_INSERT.addEventListener('change', insertImage);
});

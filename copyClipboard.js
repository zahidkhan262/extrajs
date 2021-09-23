let Text = document.querySelector('p');

const copyClipBoard = (text) => navigator.clipboard.writeText(text);

Text.copyClipBoard(text)
'use strict';

import model from '../model/index.js';

const sourceStrEl = document.getElementById('sourceStr');
const modeBtnEl = document.getElementById('modeBtn');
const modeEl = document.getElementById('mode');
const resultStrEl = document.getElementById('resultStr');

modeBtnEl.addEventListener('click', changeModeString);

function changeModeString() {
  const result = new model(sourceStrEl.value, modeEl.value).changeMode();
  console.log(result);
  resultStrEl.innerHTML = result;
}
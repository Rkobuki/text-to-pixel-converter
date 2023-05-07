import { CommonModule } from './src/textToPixel.js';

const inputText = document.getElementById("input-text");
const pixelDisplay = document.getElementById("pixel-display");

inputText.addEventListener("input", () => {
  const text = inputText.value;
  const pixels = CommonModule.textToPixel(text);

  const pixelString = pixels.map(row => row.join("")).join("\n");
  pixelDisplay.textContent = pixelString;
});

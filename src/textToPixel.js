export class CommonModule{
  constructor(){};
  static textToPixel(text, fontSize = 16,fontStyle = 'sans-serif') {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
  
    canvas.width = fontSize * text.length;
    canvas.height = fontSize;
  
    ctx.font = `${fontSize}px ${fontStyle}`;
    ctx.fillText(text, 0, fontSize);
  
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = [];
  
    for (let y = 0; y < canvas.height; y++) {
      const row = [];
      for (let x = 0; x < canvas.width; x++) {
        const index = (y * canvas.width + x) * 4;
        const alpha = imageData.data[index + 3];
        row.push(alpha > 0 ? 1 : 0);
      }
      pixels.push(row);
    }
  
    return pixels;
  }
}
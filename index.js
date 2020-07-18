const points = [
  [50, 0],
  [50, 6],
  [49, 6],
  [49, 22],
  [48, 22],
  [49, 31],
  [49, 33],
  [50, 33],
  [50, 39],
  [51, 39],
  [51, 40],
  [52, 40],
  [52, 41],
  [53, 41],
  [53, 42],
  [57, 42],
  [57, 41],
  [58, 41],
  [58, 40],
  [59, 40],
  [59, 39],
  [60, 39],
  [60, 38],
  [61, 38],
  [61, 37],
  [62, 37],
  [62, 30],
  [63, 30],
  [63, 28],
  [64, 28],
  [64, 26],
  [66, 26],
  [66, 25],
  [68, 25],
  [68, 24],
  [75, 24],
  [81, 30],
  [81, 32],
  [84, 34],
  [84, 37],
  [85, 37],
  [85, 47],
  [84, 47],
  [84, 52],
  [83, 52],
  [83, 56],
  [80, 61],
  [70, 61],
  [65, 53],
  [59, 53],
  [57, 55],
  [54, 55],
  [54, 58],
  [53, 58],
  [53, 61],
  [52, 61],
  [52, 66],
  [51, 66],
  [51, 76],
  [52, 84],
  [51, 84],
  [51, 94],
  [50, 94],
  [50, 100],
];

const generateCutImage = setDataUrl => {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.width = 100;
  image.height = 100;
  image.onload = () => {
    ctx.drawImage(image, 0, 0);

    ctx.beginPath();
    ctx.moveTo(50, 0);
    points.forEach(point => ctx.lineTo(...point));
    ctx.lineTo(0, 100);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.clip();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    console.log(ctx.isPointInPath(20, 20));

    // const dataUrl = canvas.toDataURL('image/png', 1);
    setDataUrl(canvas);
  };

  image.src = './brown-noise-sq.jpg';
};

const main = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  document.body.appendChild(canvas);
  canvas.width = 300;
  canvas.height = 300;
  canvas.style.border = '1px solid black';
  canvas.style.backgroundColor = 'orange';

  new Promise(generateCutImage).then(dataUrl => {
    ctx.drawImage(dataUrl, -50, 0);
    ctx.drawImage(dataUrl, -20, 0);
    ctx.drawImage(dataUrl, 0, 50);
    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(dataUrl, 50, 50);
    }, 2000);
  });
};

main();

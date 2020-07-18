const konvaInit = () => {
  const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const layer = new Konva.Layer();
  const group = new Konva.Group({
    clipFunc: function (ctx) {
      ctx.arc(250, 120, 50, 0, Math.PI * 2, false);
      ctx.arc(150, 120, 60, 0, Math.PI * 2, false);
    },
    draggable: true,
  });
  stage.add(layer);
  layer.add(group);

  const blueBlob = new Konva.Line({
    points: [73, 140, 340, 23, 500, 109, 300, 170],
    stroke: 'blue',
    strokeWidth: 10,
    fill: '#aaf',
    tension: 0.8,
    closed: true,
  });

  const redBlob = new Konva.Line({
    points: [73, 140, 340, 23, 500, 109],
    stroke: 'red',
    strokeWidth: 10,
    fill: '#faa',
    tension: 1.2,
    scale: { x: 0.5, y: 0.5 },
    x: 100,
    y: 50,
    closed: true,
  });

  group.add(blueBlob);
  group.add(redBlob);

  const imageObj = new Image();
  imageObj.onload = function () {
    const yoda = new Konva.Image({
      x: 50,
      y: 50,
      image: imageObj,
      width: 106,
      height: 118,
    });

    // add the shape to the layer
    group.add(yoda);
    layer.batchDraw();
  };
  layer.batchDraw();
  imageObj.src = 'https://konvajs.org/assets/yoda.jpg';
};

const test1 = () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    //

    ctx.beginPath();
    ctx.moveTo(20, 20);

    ctx.lineTo();

    //
    const dataUrl = canvas.toDataURL();
    const imgEl = document.createElement('img');
    imgEl.src = dataUrl;
    document.body.appendChild(imgEl);
  };
  image.src = './brown-noise-sq.jpg';

  const svgContainer = document.createElement('div');
  svgContainer.innerHTML =
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 640"><defs><path d="" id="dA2P8Z1P4"></path><path d="M144.88 221.07L261.73 221.07L261.73 337.93L144.88 337.93L144.88 470.79L261.73 470.79L261.73 563.63L392.99 563.63L392.99 470.79L521.05 470.79L521.05 337.93L455.42 337.93L455.42 221.07L521.05 221.07L521.05 120.23L392.99 120.23L392.99 38.59L261.73 38.59L261.73 113.82L144.88 113.82L144.88 221.07Z" id="a5eeYQ7PDY"></path></defs><g><g><g><g><use xlink:href="#dA2P8Z1P4" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#a5eeYQ7PDY" opacity="1" fill-opacity="0" stroke="#000000" stroke-width="1" stroke-opacity="1"></use></g></g></g></g></svg>';
  document.body.appendChild(svgContainer);
  svgContainer.style.width = '50px';
  svgContainer.style.height = '50px';
};

// test1();

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

const test2 = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(50, 0);
  points.forEach(point => ctx.lineTo(...point));
  ctx.stroke();
  ctx.closePath();

  document.body.appendChild(canvas);
};

// test2();

const test3 = () => {
  const canvas = document.createElement('canvas');
  canvas.width = 100;
  canvas.height = 100;
  const ctx = canvas.getContext('2d');

  const image = new Image();
  image.width = 100;
  image.height = 100;
  image.onload = () => {
    ctx.drawImage(image, 0, 0);
    // ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    //

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

    const dataUrl = canvas.toDataURL('image/png', 1);
    const imgEl = document.createElement('img');
    imageObj.src = dataUrl;
    const link = document.createElement('a');
    link.href = dataUrl;
    document.body.appendChild(link);
    document.body.appendChild(imgEl);
  };
  image.src = './brown-noise-sq.jpg';

  // document.body.appendChild(canvas);

  const stage = new Konva.Stage({
    container: 'container',
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const layer = new Konva.Layer();
  stage.add(layer);

  const imageObj = new Image();
  imageObj.onload = function () {
    const yoda = new Konva.Image({
      x: 50,
      y: 50,
      image: imageObj,
      width: 100,
      height: 100,
      draggable: true,
    });

    yoda.on('dragstart', ev => {
      console.log(ev);
      ev.evt.preventDefault();
      console.log('abc');
    });

    // add the shape to the layer
    layer.add(yoda);
    layer.batchDraw();
  };
  const imageObj2 = new Image();
  imageObj2.onload = function () {
    const yoda = new Konva.Image({
      x: 150,
      y: 150,
      image: imageObj2,
      width: 100,
      height: 100,
      draggable: true,
    });

    // add the shape to the layer
    layer.add(yoda);
    layer.batchDraw();
  };
  imageObj2.src = './xyz.png';
  layer.batchDraw();
};

test3();

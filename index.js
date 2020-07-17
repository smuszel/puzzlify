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

var blueBlob = new Konva.Line({
  points: [73, 140, 340, 23, 500, 109, 300, 170],
  stroke: 'blue',
  strokeWidth: 10,
  fill: '#aaf',
  tension: 0.8,
  closed: true,
});

var redBlob = new Konva.Line({
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
  var yoda = new Konva.Image({
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

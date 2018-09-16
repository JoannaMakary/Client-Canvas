var clientWidth = screen.width;
var clientHeight = screen.height;

// Creating Konva Stage
var stage = new Konva.Stage({
    container: 'client-canvas', // id of container <div>
    width: screen.width * 0.75,
    height: screen.height * 0.75
});

// Konva Layer
var layer = new Konva.Layer();

// Konva Shape
var circle = new Konva.Circle({
    x: stage.getWidth() / 2,
    y: stage.getHeight() / 2,
    radius: 70,
    fill: 'red',
    stroke: 'black',
    strokeWidth: 4
});

// Movable shape
circle.draggable('true');

// Adding shape to layer
layer.add(circle);

// Adding layer to stage
stage.add(layer);

// Draw layer
layer.draw();
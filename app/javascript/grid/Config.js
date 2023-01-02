export default class Config {
  // TODO: Make these some multiple of 25 +- some remainder
  GRID_WIDTH_IN_NODES = 20;
  GRID_HEIGHT_IN_NODES = 20;
  constructor(canvas) {
    this.canvas = canvas;
    this.initializeGridSize();
  }

  initializeGridSize() {
    this.NODE_WIDTH = this.canvas.width / this.GRID_WIDTH_IN_NODES;
    this.NODE_HEIGHT = this.canvas.height / this.GRID_HEIGHT_IN_NODES;
  }
}

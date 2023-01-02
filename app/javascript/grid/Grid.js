import Node from "./Node";
import NodeType from "./NodeType";

export default class Grid {
  constructor(config, nodeTypes) {
    this.nodes = [];
    this.config = config;
    this.nodeTypes = nodeTypes;

    this.generateNodes();
  }
  generateNodes() {
    for (let x = 0; x < this.config.GRID_WIDTH_IN_NODES; x++) {
      for (let y = 0; y < this.config.GRID_HEIGHT_IN_NODES; y++) {
        this.nodes.push(
          new Node(
            x * this.config.NODE_WIDTH,
            y * this.config.NODE_HEIGHT,
            this.nodeTypes.get("grass")
          )
        );
      }
    }
  }
}

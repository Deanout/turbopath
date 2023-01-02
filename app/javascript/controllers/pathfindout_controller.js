import { Controller } from "@hotwired/stimulus";
import Grid from "../grid/Grid.js";
import Config from "../grid/Config";
import NodeTypes from "../grid/NodeTypes";

// Connects to data-controller="pathfindout"
export default class extends Controller {
  static targets = ["canvas"];
  connect() {
    console.log("Hello, Stimulus!", this.element);
    this.setup();
    this.draw();
  }

  setup() {
    this.canvas = this.canvasTarget;
    this.ctx = this.canvas.getContext("2d");
    this.navbar = document.getElementById("navbar");

    // set canvas size to window size without navbar
    this.canvas.width = window.innerWidth;

    // Navbar height can vary, so we grab it from the DOM
    this.canvas.height = window.innerHeight - this.navbar.offsetHeight;

    // set canvas background color
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.config = new Config(this.canvas);
    this.nodeTypes = new NodeTypes();
    this.grid = new Grid(this.config, this.nodeTypes);
  }
  draw() {
    this.drawNodes();
  }
  drawNodes() {
    this.grid.nodes.forEach((node) => {
      this.ctx.fillStyle = "#00FF00";
      console.log(node);
      this.ctx.fillRect(
        node.x,
        node.y,
        this.config.NODE_WIDTH + 1,
        this.config.NODE_HEIGHT + 1
      );
    });
  }
}

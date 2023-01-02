import NodeType from "./NodeType";

export default class NodeTypes {
  constructor() {
    this.types = [];
    this.createTypes();
  }

  createTypes() {
    const air = new NodeType("air", "#ffffff");
    const grass = new NodeType("grass", "#00ff00");
    const wall = new NodeType("wall", "#000000");

    this.add(air);
    this.add(grass);
    this.add(wall);
  }

  /**
   * Adds a new node type to the list of types.
   * @param {NodeType} nodeType
   * @returns {void}
   * @memberof NodeTypes
   * @example
   * const nodeTypes = new NodeTypes();
   * nodeTypes.add(new NodeType("wall", "black"));
   */
  add(nodeType) {
    this.types.push(nodeType);
  }

  /**
   * Returns the node type with the given name.
   * @param {string} name
   * @returns {NodeType}
   * @memberof NodeTypes
   * @example
   * const nodeTypes = new NodeTypes();
   * nodeTypes.add(new NodeType("wall", "black"));
   * nodeTypes.get("wall");
   */
  get(name) {
    return this.types.find((type) => type.name === name);
  }
}

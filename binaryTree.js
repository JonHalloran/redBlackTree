import Vertex from './vertex';

class BinaryTree {
  constructor() {
    this.root = undefined;
    this.left = undefined;
    this.right = undefined;
  }

  addVertex(value) {
    if (!this.root) {
      this.root = new Vertex(undefined, value);
      this
        .root
        .checkRed();
    } else {
      this
        .root
        .addVertex(value);
    }
    this.printNodes();
  }

  printNodes(node = this.root) {
    console.log(node);
    if (node.left) {
      this.printNodes(node.left);
    }
    if (node.right) {
      this.printNodes(node.right);
    }
  }
}

export default BinaryTree;
import Vertex from './vertex';

class binaryTree {
  constructor() {
    this.root;
    this.left;
    this.right;
  }

  addVertex(value) {
    if (!this.root) {
      this.root = Vertex.new(value);
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
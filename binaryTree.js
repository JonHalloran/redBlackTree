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
  }

}
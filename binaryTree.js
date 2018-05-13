import Vertex from './vertex'

class binaryTree {
  constructor() {
    this.root;
    this.left;
    this.right
  }

  addVertex(value, vertex = this.root) {
    if (!this.root) {
      this.root = Vertex.new(value);
    } else if (vertex.value > value) {
      vertex.left
        ? addVertex(value, vertex.left)
    }
  }
}
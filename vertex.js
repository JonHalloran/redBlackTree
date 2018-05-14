class Vertex {
  constructor(parent, value) {
    this.parent = parent;
    this.value = value;
    this.color = "RED";
    this.left = undefined;
    this.right = undefined;
  }

  get isRightChild() {
    return this.parent
      ? this.parent < self
      : false;
  }

  get grandparent() {
    return this.parent
      ? this.parent.parent
      : undefined;
  }

  get uncle() {
    return this.grandparent
      ? (this.parent.isRightChild()
        ? this.grandparent.left
        : this.grandparent.right)
      : undefined;
  }

  get isLeaf() {
    return this.right && this.left;
  }

  addVertex(value) {
    if (value < this.value) {
      this.left
        ? this
          .left
          .addVertex(value)
        : this.left = Vertex.new(this, value);
    } else {
      this.right
        ? this
          .right
          .addVertex(value)
        : this.right = Vertex.new(this, value);
    }
  }
}
export default Vertex;

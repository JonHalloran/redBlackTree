class Vertex {
  constructor(parent, value) {
    this.parent = parent;
    this.value = value;
    this.color = "RED";
    this.left;
    this.right;
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

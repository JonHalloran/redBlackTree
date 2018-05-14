class Vertex {
  constructor(parent, value) {
    this.parent = parent;
    this.value = value;
    this.color = "RED";
    this.left = undefined;
    this.right = undefined;
  }

  get isRoot() {
    return this.parent === undefined;
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

  leftRotate() {
    this.isRightChild()
      ? this.parent.right = this.right
      : this.parent.left = this.right
    this.right.parent = this.parent
    this.parent = this.right
    this.right = this.right.left

  }

  rightRotate() {
    this.isRightChild()
      ? this.parent.right = this.left
      : this.parent.left = this.left
    this.left.parent = this.parent
    this.parent = this.left
    this.left = this.left.right
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

  checkRed() {
    if (this.isRoot()) {
      // Case 0
      this.color = "BLACK"
    } else if (this.parent.color === "RED") {
      if (this.uncle().color === "RED") {
        this.caseOne()
      } else if (this.uncle().color === "BLACK") {
        const rightLine = this.isRightChild() && this
          .parent
          .isRightChild();
        const leftLine = !this.siRightChild() && !this
          .parent
          .isRightChild();
        if (rightLine || leftLine) {
          this.caseThree();
        }
      }
    }
  }

  caseOne() {
    // recolor only
    this
      .grandparent()
      .color() = "RED"
    this
      .uncle()
      .color() = "BLACK"
    this.parent.color = "BLACK"
    this
      .grandparent()
      .checkRed()
  }

  caseTwo() {
    if (this.isRightChild()) {
      this
        .parent
        .leftRotate()
    } else {
      this
        .parent
        .rightRotate()
    }
  }

  caseThree() {
    if (this.parent.isRightChild) {
      this
        .grandparent()
        .rightRotate()
    } else {
      this
        .grandparent()
        .leftRotate()
    }

    this.color = "BLACK"
    this.left.color = "RED"
    this.right.color = "RED"
  }

}
export default Vertex;

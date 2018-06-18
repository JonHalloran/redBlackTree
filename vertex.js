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
      ? this.parent.right === this
      : false;
  }

  get grandparent() {
    return this.parent
      ? this.parent.parent
      : undefined;
  }

  get uncle() {
    return this.grandparent
      ? (this.parent.isRightChild
        ? this.grandparent.left
        : this.grandparent.right)
      : undefined;
  }

  get isLeaf() {
    return this.right && this.left;
  }

  addVertex(value) {
    console.log("addVertex", value);
    if (value < this.value) {
      if (this.left) {
        return this
          .left
          .addVertex(value);
      } else {
        this.left = new Vertex(this, value);
        return this.left;
      }
    } else {
      if (this.right) {
        let toReturn = this.right.addVertex(value);
        console.log("return", toReturn);
        return toReturn;
      } else {
        this.right = new Vertex(this, value);
        return this.right;
      }
    }
  }

  leftRotate() {
    if (this.parent) {
      this.isRightChild
        ? this.parent.right = this.right
        : this.parent.left = this.right;
    }
    if (this.right) 
      this.right.parent = this.parent;
    this.parent = this.right;
    this.right = this.parent.left;
    this.parent.left = this;
    if (this.right) 
      this.right.parent = this;

    }
  
  rightRotate() {
    console.log("right", this, this.left);
    if (this.parent) {
      this.isRightChild
        ? this.parent.right = this.left
        : this.parent.left = this.left;
    }
    this.left.parent = this.parent;
    this.parent = this.left;
    this.left = this.parent.right;
    this.parent.right = this;
    if (this.left) 
      this.left.parent = this;
    }
  
  checkRed() {
    if (this.isRoot) {
      // Case 0
      this.color = "BLACK";
    } else if (this.parent.color === "RED") {
      if (this.uncle && this.uncle.color === "RED") {
        return this.caseOne();
      } else {
        const rightLine = this.isRightChild && this.parent.isRightChild;
        const leftLine = !this.isRightChild && !this.parent.isRightChild;
        if (rightLine || leftLine) {
          return this.caseThree();
        } else {
          return this.caseTwo();
        }
      }
    } else {
      return null;
    }
  }

  caseOne() {
    // recolor only
    this.grandparent.color = "RED";
    this.uncle.color = "BLACK";
    this.parent.color = "BLACK";
    return this
      .grandparent
      .checkRed();
  }

  caseTwo() {
    if (this.isRightChild) {
      this
        .parent
        .leftRotate();
      return this.left;
    } else {
      this
        .parent
        .rightRotate();
      return this.right;
    }
  }

  caseThree() {
    if (this.parent.isRightChild) {
      this
        .grandparent
        .leftRotate();
    } else {
      this
        .grandparent
        .rightRotate();
    }

    this.parent.color = "BLACK";
    this.parent.left.color = "RED";
    this.parent.right.color = "RED";
    return null;
  }

}
export default Vertex;

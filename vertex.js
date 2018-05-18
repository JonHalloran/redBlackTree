class Vertex {
  constructor(parent, value) {
    console.log("parent", parent);
    this.parent = parent;
    this.value = value;
    this.color = "RED";
    this.left = undefined;
    this.right = undefined;
    if (this.parent) 
      console.log("preRed", this.parent.left);
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

  leftRotate() {
    console.log("leftRotate", this);
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
    console.log("rightRotate", this);
    if (this.parent) {
      this.isRightChild
        ? this.parent.right = this.left
        : this.parent.left = this.left;
    }
    if (this.left) 
      this.left.parent = this.parent;
    this.parent = this.left;
    this.left = this.parent.right;
    this.parent.right = this;
    if (this.left) 
      this.left.parent = this;

    }
  
  addVertex(value) {
    if (value < this.value) {
      if (this.left) {
        this
          .left
          .addVertex(value);
      } else {
        this.left = new Vertex(this, value);
        this
          .left
          .checkRed();
      }

    } else {
      if (this.right) {
        this
          .right
          .addVertex(value);
      } else {
        this.right = new Vertex(this, value);
        this
          .right
          .checkRed();
      }
    }
  }

  checkRed() {
    console.log("checkRed", this.isRoot);
    if (this.isRoot) {
      // Case 0
      this.color = "BLACK";
    } else if (this.parent.color === "RED") {
      console.log(this.uncle, "uncle");
      if (this.uncle && this.uncle.color === "RED") {
        this.caseOne();
      } else {
        console.log("self Right child", this.isRightChild, this.value, this.parent.value);
        console.log("parent Right child", this.parent.isRightChild, this.parent.value, this.parent.parent.value);
        const rightLine = this.isRightChild && this.parent.isRightChild;
        const leftLine = !this.isRightChild && !this.parent.isRightChild;
        console.log(leftLine, rightLine);
        if (rightLine || leftLine) {
          this.caseThree();
        } else {
          this.caseTwo();
        }
      }
    }
  }

  caseOne() {
    console.log("CaseOne");
    // recolor only
    this.grandparent.color = "RED";
    this.uncle.color = "BLACK";
    console.log("uncle ", this.uncle);
    this.parent.color = "BLACK";
    this
      .grandparent
      .checkRed();
  }

  caseTwo() {
    console.log("caseTwo");
    if (this.isRightChild) {
      this
        .parent
        .leftRotate();
      this
        .left
        .checkRed();
    } else {
      this
        .parent
        .rightRotate();
      this
        .right
        .checkRed();
    }
  }

  caseThree() {
    console.log("caseThree");
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
  }

}
export default Vertex;

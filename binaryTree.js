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
    this.newRoot(this.root);
  }

  newRoot(node) {
    if (node.parent) {
      this.root = node.parent;
      this.newRoot(this.root);
    }
  }

  printNodes(node) {
    console.log("node", node && node.value);
    if (node === undefined) 
      return undefined;
    let jason = {
      value: node.value,
      color: node.color
    };
    if (node.left || node.right) {
      console.log("test", node);
      jason["children"] = [];
      if (node.left) 
        jason["children"].push(this.printNodes(node.left));
      if (node.right) 
        jason["children"].push(this.printNodes(node.right));
      }
    return jason;
  }
}

export default BinaryTree;
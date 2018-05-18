import Vertex from './vertex';

const blankNode = {
  text: {
    val: ''
  },
  connectors: {
    opacity: 1,
    "fill-opacity": 1
  }
};
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
      text: {
        val: node.value
      },
      HTMLclass: node.color
      // innerHTML: node.value
    };
    if (node.left || node.right) {
      jason["children"] = [];
      if (node.left) {
        jason["children"].push(this.printNodes(node.left));
      } else {
        jason["children"].push(blankNode);
      }

      if (node.right) {
        jason["children"].push(this.printNodes(node.right));
      } else {
        jason["children"].push(blankNode);
      }
    }
    return jason;
  }
}

export default BinaryTree;
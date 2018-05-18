import Vertex from './vertex';

const blankNode = {
  text: {
    val: ''
  },
  HTMLclass: "BLACK null",
  connectors: {
    style: {
      'stroke': '#ffffff',
      "stroke-dasharray": "- .", //"", "-", ".", "-.", "-..", ". ", "- ", "--", "- .", "--.", "--.."
      'arrow-start': 'classic-wide-long'
    }
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
    if (node === undefined) 
      return undefined;
    let jason = {
      text: {
        val: node.value
      },
      HTMLclass: node.color
      // innerHTML: node.value
    };

    jason["children"] = [blankNode, blankNode];
    if (node.left || node.right) {
      if (node.left) 
        jason["children"][0] = this.printNodes(node.left);
      if (node.right) 
        jason["children"][1] = this.printNodes(node.right);
      }
    return jason;
  }
}

export default BinaryTree;
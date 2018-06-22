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
    this.balance = this
      .balance
      .bind(this);
  }

  addVertex(value) {
    console.log("addVertex");
    if (!this.root) {
      this.root = new Vertex(undefined, value);
      this
        .root
        .checkRed();
    } else {
      let returned = this
        .root
        .addVertex(value);
      let that = this;
      setTimeout(() => that.balance(returned), 2000);
    }
    this.newRoot(this.root);
  }

  balance(node) {
    console.log("balance before", node);
    node = node.checkRed(node);
    console.log("balance after", node);
    this.newRoot(this.root);
    window.treeStructure["nodeStructure"] = this.printNodes(this.root);
    window.Treant(window.treeStructure);
    if (node) {
      console.log("if", node);
      setTimeout(() => this.balance(node), 3000);
    } else {
      let randButton = document.getElementsByClassName('rand-node')[0];
      randButton.disabled = false;
      let subButton = document.getElementsByClassName('new-node-submit')[0];
      subButton.disabled = false;
    }
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
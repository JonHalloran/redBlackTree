import BinaryTree from "./binaryTree";
import Treant from "./Treant";

let tree = new BinaryTree();
tree.addVertex(50);
// tree.addVertex(44); tree.addVertex(94);
tree.addVertex(3);
// tree.addVertex(80);
tree.addVertex(3);

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  newNode(value);
  console.log("newValue", value);
  tree.addVertex(value);
  treeStructure["nodeStructure"] = tree.printNodes(tree.root);
  window.Treant(treeStructure);
});

let form = document.getElementsByClassName('add-node')[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  newNode(e.target[0].value);
});

const newNode = (value) => {
  tree.addVertex(value);
  treeStructure["nodeStructure"] = tree.printNodes(tree.root);
  window.Treant(treeStructure);
};

var treeStructure = {
  chart: {
    container: "#red-black-tree",
    levelSeparation: 20,
    siblingSeparation: 5,
    subTeeSeparation: 5,
    rootOrientation: "NORTH",

    node: {
      HTMLclass: "",
      drawLineThrough: false
    },
    connectors: {
      type: "straight",
      style: {
        "stroke-width": 2,
        "stroke": "#000000"
      }
    }
  },

  nodeStructure: tree.printNodes(tree.root)
};

window.treeStructure = treeStructure;
import BinaryTree from "./binaryTree";
import Treant from "./Treant";

let tree = new BinaryTree();


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

tree.addVertex(50);
// tree.addVertex(44); tree.addVertex(94);
tree.addVertex(3);
// tree.addVertex(80);
tree.addVertex(3);


let button = document.getElementsByClassName('rand-node')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  newNode(value);
  // // tree.addVertex(value);
  treeStructure["nodeStructure"] = tree.printNodes(tree.root);
  window.Treant(treeStructure);
});

let form = document.getElementsByClassName('add-node')[0];
form.addEventListener("submit", (e) => {

  e.preventDefault();
  e.stopPropagation();
  const value = e.target[0].value;
  if (value === 0) {
    setMessage('Please enter a number');
  } else {
    newNode(value);
    // e.target[0].value = '';
  }
});

const newNode = (value) => {
  let addNode = tree.addVertex(value);
  let randButton = document.getElementsByClassName('rand-node')[0];
  randButton.disabled = true;
  let subButton = document.getElementsByClassName('new-node-submit')[0];
  subButton.disabled = true;
  // console.log(addNode);
  // treeStructure["nodeStructure"] = tree.printNodes(tree.root);
  // window.Treant(treeStructure);
  // const nodeInput = document.getElementsByClassName('new-node-input')[0];
  // nodeInput.value = 0;

};

const setMessage = (msg) => {
  const message = document.getElementById('message');
  message.innerHTML = msg;
};
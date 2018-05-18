import BinaryTree from "./binaryTree";
import Treant from "./Treant";

let tree2 = new BinaryTree();
tree2.addVertex(50);

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  console.log("newValue", value);
  tree2.addVertex(value);
  console.log(tree2.printNodes(tree2.root));
  treeStructure["nodeStructure"] = tree2.printNodes(tree2.root);
  window.Treant(treeStructure);
});

var treeStructure = {
  chart: {
    container: "#OrganiseChart6",
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

  nodeStructure: {
    text: {
      name: {
        val: "50"
      }
    },
    HTMLclass: "BLACK"
  }
};

window.treeStructure = treeStructure;
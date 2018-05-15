import BinaryTree from "./binaryTree";
import {tree, json, hierarchy, select} from "d3";

let tree2 = new BinaryTree();
tree2.addVertex(50);
tree2.addVertex(51);
tree2.addVertex(52);
let treeData = tree2.printNodes(tree2.root);
console.log(treeData);
let data = [1, 2, 3, 4, 5];

let treeRoot = hierarchy(treeData);
console.log(treeRoot);

let toRender = makeData(treeRoot);
console.log(toRender);

let svg = select("body")
  .append("svg")
  .attr("width", 1000)
  .attr("height", 1000);

let elem = svg
  .selectAll("g myCircleText")
  .data(toRender);

let elemEnter = elem
  .enter()
  .append("g")
  .attr("transform", function (d) {
    console.log(d);
    return "translate(" + 1000 / ((d[1] + 1) * 2) + "," + (80 + (d[1] * 80)) + ")";
  });

let circle = elemEnter
  .append("circle")
  .attr("r", 20)
  .attr("stroke", (d) => d[2])
  .attr("fill", (d) => d[2]);

function makeData(node) {
  let toMake = [];
  let out = [];
  toMake.push(node);
  while (toMake.length > 0) {
    let element = toMake.shift();
    console.log("element", element);
    for (let child in element.children) {
      toMake.push(element.children[child]);
    }
    out.push([element.value, element.depth, element.data.color]);
    console.log("makeData", element);
  }
  return out;
}

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  console.log("newValue", value);
  tree2.addVertex(value);
  treeData = [tree2.printNodes(tree2.root)];
  console.log(treeData);
});
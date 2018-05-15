import BinaryTree from "./binaryTree";
import {tree, json, hierarchy, select} from "d3";

let tree2 = new BinaryTree();
tree2.addVertex(50);
tree2.addVertex(51);
tree2.addVertex(52);
let treeData = tree2.printNodes(tree2.root);
console.log(treeData);

var svg = select("svg"),
  width = Number(svg.attr("width")),
  height = Number(svg.attr("height")),
  g = svg
    .append("g")
    .attr("transform", "translate(40,0)");

let binTree = new tree(treeData).size([1000, 1000]);
console.log(binTree);

var root = hierarchy(treeData);
tree(root);

var link = g
  .selectAll(".link")
  .data(root.descendants().slice(1))
  .enter()
  .append("path")
  .attr("class", "link")
  .attr("d", function (d) {
    return "M" + d.y + "," + d.x + "C" + (d.parent.y + 100) + "," + d.x + " " + (d.parent.y + 100) + "," + d.parent.x + " " + d.parent.y + "," + d.parent.x;
  });

var node = g
  .selectAll(".node")
  .data(root.descendants())
  .enter()
  .append("g")
  .attr("class", function (d) {
    return "node" + (d.children
      ? " node--internal"
      : " node--leaf");
  })
  .attr("transform", function (d) {
    return "translate(" + d.y + "," + d.x + ")";
  });

node
  .append("circle")
  .attr("r", 2.5);

node
  .append("text")
  .attr("dy", 3)
  .attr("x", function (d) {
    return d.children
      ? -8
      : 8;
  })
  .style("text-anchor", function (d) {
    return d.children
      ? "end"
      : "start";
  })
  .text(function (d) {
    return d.data.name;
  });

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  let value = Math.floor(Math.random(100) * 100);
  console.log("newValue", value);
  tree2.addVertex(value);
  treeData = tree2.printNodes(tree2.root);
  console.log(treeData);
});
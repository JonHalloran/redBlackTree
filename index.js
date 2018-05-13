let height = 480;
let width = 640;
let data = [32];
let svg = d3
  .select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

let makeData = () => {
  svg
    .selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cy", 60)
    .attr("cx", function (d, i) {
      return i * 100 + 30;
    })
    .attr("r", function (d) {
      return Math.sqrt(d);
    });
};

let button = document.getElementsByClassName('data')[0];
button.addEventListener("click", () => {
  data.push(Math.floor(Math.random(100) * 100));
  console.log(data);
  makeData();
});

console.log('test');
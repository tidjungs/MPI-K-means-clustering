const fs = require('fs');
const lines = fs.readFileSync('./output.txt', 'utf-8').split("\n");

const clusters = {};
const series = [];

lines.pop();
lines.shift();

lines.forEach(line => {
  const l = line.split(/\s+/);
  const x = parseFloat(l[0]);
  const y = parseFloat(l[1]);
  const group = parseInt(l[2]);
  if (clusters[group]) {
    clusters[group].push([x, y])
  } else {
    clusters[group] = [[x, y]]
  }
})

for (let key in clusters) {
  series.push({
    type: 'scatter',
    data: clusters[key]
  })
}

console.log(JSON.stringify(series))
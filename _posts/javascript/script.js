let nodeAnchor = document.querySelector("a");

let props = [];

for (let key in nodeAnchor) {
  props.push(key);
}

console.log(props.sort());

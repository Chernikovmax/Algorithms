const stack1 = [];
const stack2 = [];
const textField = document.querySelector(".display");

function addTo1() {
  const valueTo1 = document.getElementById('add-in-first').value;
  stack1.push(parseInt(valueTo1, 10));
  console.log(stack1);
  showStack1();
}

function deleteFromStack1() {
  if (stack1[0] === undefined) return;
  const newElem = textField.appendChild(document.createElement('span'));
  newElem.innerHTML = `"${stack1[stack1.length-1]}" - just deleted from the top of Stack №1`;
  stack1.pop();
  showStack1();
}

function addTo2() {
  const valueTo2 = document.getElementById('add-in-second').value;
  stack2.push(parseInt(valueTo2, 10));
  showStack2();
}

function deleteFromStack2() {
  if (stack2[0] === undefined) return;
  const newElem = textField.appendChild(document.createElement('span'));
  newElem.innerHTML = `"${stack2[stack2.length-1]}" - just deleted from the top of Stack №2`;
  stack2.pop();
  showStack2();
}

function showStack1() {
  const stack1Info = textField.querySelector(".stack1");
  stack1Info.innerHTML = `Stack №1: ${stack1}`;
}

function showStack2() {
  const stack1Info = textField.querySelector(".stack2");
  stack1Info.innerHTML = `Stack №2: ${stack2}`;
}

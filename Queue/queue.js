const queue = [];

const textField = document.querySelector(".display");

function enqueue() {
  const value = document.getElementById("add").value;
  queue.push(value);
  return showQueue();
}

function dequeue() {
  if (queue[0] === undefined) return;
  const newReport = textField.appendChild(document.createElement('span'));
  newReport.innerHTML = `"${queue[0]}" - was deleted from the start of Queue.`
  queue.shift();
  return showQueue();
}


function showQueue() {
  textField.querySelector(".printed-queue").innerHTML = `Queue: ${queue}`;
  textField.querySelector(".queue-start").innerHTML = `Start of queue: ${queue[0]}`;
  textField.querySelector(".queue-end").innerHTML = `End of queue: ${queue[queue.length-1]}`;
}

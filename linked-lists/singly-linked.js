class LinkedList {
  constructor(...values) {
    this.head = null;
    this.length = 0;
    this.addToHead(...values);
  }
  _addSingleItemToHead(value) {
    const newNode = {value};
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  addToHead(...values) {
    values.forEach(value => this._addSingleItemToHead(value));
    return this;
  }
  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    return value;
  }
  find(val) {
    let result = this.head;

    while(result) {
      if(result.value === val) {
        return result;
      }
      result = result.next;
    }
    return result;
  }
  findElementByN(n) {
    let result = this.head;
    let counter = 0;

    while(result) {
      if(counter === n-1 ) {
        return result;
      }
      result = result.next;
      counter++;
    }
    return result;
  }
  remove(val) {
    if(this.length === 0) {
        return undefined;
    }

    if (this.head.value === val) {
        this.removeFromHead();
        return this;
    }

    let previousNode = this.head;
    let thisNode = previousNode.next;

    while(thisNode) {
        if(thisNode.value === val) {
          break;
        }

        previousNode = thisNode;
        thisNode = thisNode.next;
    }

    if (thisNode === null) {
      return undefined;
    }

    previousNode.next = thisNode.next;
    this.length--;
    return this;
  }
}

const list = new LinkedList("1").addToHead('2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12');

list.remove("10");

console.log(list);

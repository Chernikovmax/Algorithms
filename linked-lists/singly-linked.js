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

  _addValueAtIndex(i, value) {
    if (this.length === 0  && i !== 0) {
      alert(`You have entered an index "${i}", but this list is empty, therefore, the value you entered will be added to the top of the list.`)
      return this._addSingleItemToHead(value);
    }

    if (i === 0) {
      return this._addSingleItemToHead(value);
    }

    let newNode = {value};
    let previous = this.head;
    let counter = 0;

    while(previous) {
      if(counter === i-1 ) {
        break;
      }
      previous = previous.next;
      counter++;
    }
    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;
    return this;
  }

  addValuesAtIndex(i, ...values) {
    if (this.length === 0 && i !== 0) {
      alert(`You have entered an index "${i}", but this list is empty, therefore, the values you entered will be added to the top of the list.`)
      return values.forEach(value => this._addSingleItemToHead(value));
    }

    values.forEach((value) => this._addValueAtIndex(i, value));

    return this;
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
  getFromIndex(i) {
    let result = this.head;
    let counter = 0;

    while(result) {
      if(counter === i ) {
        return result;
      }
      result = result.next;
      counter++;
    }
    return result;
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

const list = new LinkedList("1").addToHead('2', '3', '4', '5', '6');


list.addValuesAtIndex(0, "Джигурда", "Пизда", "Хуй");
console.log(list);

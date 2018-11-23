class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.append(...values);
  }
  _appendItem(value) {
    let newNode = new Node(value);
    if(!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  append(...values) {
    return values.forEach(value => this._appendItem(value));
  }

  _appToHead(value) {
    let newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  appToHead(...values) {
    return values.forEach(value => this._appToHead(value));
  }

  _appendSingleAt(position, value) {
    if (position === this.length-1) {
      return this.append(value);
    }
    if (position === 0) {
      return this._appToHead(value);
    }

    let newNode = new Node(value);
    let current = this.head;
    let counter = 1;

    if (position <= (this.length-1 / 2)) {
      while(current) {
        current = current.next;
        if (counter === position) {
          newNode.prev = current.prev;
          current.prev.next = newNode;
          newNode.next = current;
          current.prev = newNode;
          this.length++;
        }
        counter++;
      }
    }
    if (position >= (this.length-1 / 2)) {
      counter = this.length -1;
      current = this.tail;
      while(current) {
        current = current.prev;
        if (counter === position) {
          newNode.prev = current.prev;
          current.prev.next = newNode;
          newNode.next = current;
          current.prev = newNode;
          this.length++;
        }
        counter--;
      }
    }
  }
  appendAt(position, ...values) {
    let i = position;
    return values.forEach((value) => {
      this._appendSingleAt(i, value);
      i++;
    });
  }

  removeFromHead() {
    this.head.next.prev = this.head.prev;
    this.head = this.head.next;
    this.length--;
  }

  removeFromTail() {
    this.tail.prev.next = this.tail.next;
    this.tail = this.tail.prev;
    this.length--;
  }

  _remove(value) {
    let current = this.head;
    if (value === this.head.value) {
      return this.removeFromHead();
    }
    if (value === this.tail.value) {
      return this.removeFromTail();
    }
    while (current) {
      if (value === current.value) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        this.length--;
        return this;
      }
      current = current.next;
    }
  }
  remove(...values) {
    return values.forEach(value => this._remove(value));
  }

  removeAt(position) {
    if (position === 0) {
      return removeFromHead();
    }
    if (position === this.length - 1) {
      return removeFromTail();
    }

    let current = this.head;
    let counter = 1;

    if (position <= (this.length-1 / 2)) {

      while (current) {
        current = current.next;
        if (counter === position) {
          current.prev.next = current.next;
          current.next.prev = current.prev;
          this.length--;
          return this;
        }
        counter++;
      }
    }

    if (position >= (this.length-1 / 2)) {
      current = this.tale;
      while (current) {
        current = current.prev;
        if (counter === position) {
          current.next.prev = current.prev;
          current.prev.next = current.next;
          this.length--;
          return this;
        }
        counter++;
      }
    }
  }
  // removeAt(position, ...values) {
  //   let i = position;
  //   return values.forEach((value) => {
  //     this.removeAt(i, value);
  //     i++;
  //   });
  // }
}

const list = new DoublyLinkedList('1', '2', '3', '4');


console.log(list.removeAt(1, ));

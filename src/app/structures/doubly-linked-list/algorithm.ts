// class DoublyLinkedList {
//     head: any;
//     tail: any;
//     length: number;
//
//     constructor(...values: any) {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//         this.append(...values);
//     }
//
//     _appendItem(value: any) {
//         const newNode = new ListNode(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++;
//         } else {
//             newNode.prev = this.tail;
//             this.tail.next = newNode;
//             this.tail = newNode;
//             this.length++;
//         }
//     }
//
//     append(...values: any) {
//         return values.forEach((value: any) => this._appendItem(value));
//     }
//
//     _appToHead(value: any) {
//         const newNode = new ListNode(value);
//         this.head.prev = newNode;
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//     }
//
//     appToHead(...values: any) {
//         return values.forEach((value: any) => this._appToHead(value));
//     }
//
//     _appendSingleAt(position: number, value: any) {
//         if (position === this.length - 1) {
//             return this.append(value);
//         }
//         if (position === 0) {
//             return this._appToHead(value);
//         }
//
//         const newNode = new ListNode(value);
//         let current = this.head;
//         let counter = 1;
//
//         if (position <= (this.length - 1 / 2)) {
//             while (current) {
//                 current = current.next;
//                 if (counter === position) {
//                     newNode.prev = current.prev;
//                     current.prev.next = newNode;
//                     newNode.next = current;
//                     current.prev = newNode;
//                     this.length++;
//                 }
//                 counter++;
//             }
//         }
//         if (position >= (this.length - 1 / 2)) {
//             counter = this.length - 1;
//             current = this.tail;
//             while (current) {
//                 current = current.prev;
//                 if (counter === position) {
//                     newNode.prev = current.prev;
//                     current.prev.next = newNode;
//                     newNode.next = current;
//                     current.prev = newNode;
//                     this.length++;
//                 }
//                 counter--;
//             }
//         }
//     }
//
//     appendAt(position: number, ...values: any) {
//         let i = position;
//         return values.forEach((value: any, i) => {
//             this._appendSingleAt(i, value);
//             i++;
//         });
//     }
//
//     removeFromHead() {
//         this.head.next.prev = this.head.prev;
//         this.head = this.head.next;
//         this.length--;
//     }
//
//     removeFromTail() {
//         this.tail.prev.next = this.tail.next;
//         this.tail = this.tail.prev;
//         this.length--;
//     }
//
//     _remove(value: any) {
//         let current = this.head;
//         if (value === this.head.value) {
//             return this.removeFromHead();
//         }
//         if (value === this.tail.value) {
//             return this.removeFromTail();
//         }
//         while (current) {
//             if (value === current.value) {
//                 current.prev.next = current.next;
//                 current.next.prev = current.prev;
//                 this.length--;
//                 return this;
//             }
//             current = current.next;
//         }
//     }
//
//     remove(...values: any) {
//         return values.forEach((value: any) => this._remove(value));
//     }
//
//     removeAt(position: number) {
//         if (position === 0) {
//             return this.removeFromHead();
//         }
//         if (position === this.length - 1) {
//             return this.removeFromTail();
//         }
//
//         let current = this.head;
//         let counter = 1;
//
//         if (position <= (this.length - 1 / 2)) {
//
//             while (current) {
//                 current = current.next;
//                 if (counter === position) {
//                     current.prev.next = current.next;
//                     current.next.prev = current.prev;
//                     this.length--;
//                     return this;
//                 }
//                 counter++;
//             }
//         }
//
//         if (position >= (this.length - 1 / 2)) {
//             current = this.tail.prev;
//             while (current) {
//                 current = current.prev;
//                 if (counter === position) {
//                     current.next.prev = current.prev;
//                     current.prev.next = current.next;
//                     this.length--;
//                     return this;
//                 }
//                 counter++;
//             }
//         }
//     }
//
//     removeSeveralAt(position: number, quantity: number) {
//         let pieces = 1;
//
//         if (position === this.length - 1) {
//             while (pieces <= quantity) {
//                 this.removeFromTail();
//                 pieces++;
//             }
//             return this;
//         }
//
//         if (quantity > (this.length - (position + 1))) {
//             return console.error(`There is(are) "${this.length - (position + 1)}" element(s) after selected position.`);
//         }
//
//         while (pieces <= quantity) {
//             this.removeAt(position);
//             pieces++;
//         }
//         return this;
//     }
//
//     reverse() {
//         let current = this.head;
//         let prev = null;
//
//         while (current) {
//             let next = current.next
//             current.next = prev;
//             current.prev = next;
//             prev = current;
//             current = next;
//         }
//         this.tail = this.head;
//         this.head = prev;
//         return this;
//     }
//
//     swap(nodeOne: any, nodeTwo: any) {
//         if (nodeOne < nodeTwo || (nodeOne < 0 || nodeOne > this.length - 2) || (nodeTwo > this.length - 1)) {
//             return console.error(`Wrong number! The length of this Linked list is "${this.length}" and the first value must be less than the second. please enter a valid values.`);
//         }
//
//         let current = this.head;
//         let counter = 0;
//
//         while (counter < nodeOne) {
//             current = current.next;
//             counter++;
//         }
//
//         let firstSought = current;
//
//         while (counter < nodeTwo) {
//             current = current.next;
//             counter++;
//         }
//
//         let secondSought = current;
//
//         current = firstSought.value;
//
//         firstSought.value = secondSought.value;
//         secondSought.value = current;
//
//         return this;
//     }
//
//     isEmpty() {
//         if (this.length > 0) {
//             return console.log(`It's not empty! The length is "${this.length}".`);
//         }
//         if (this.length === 0) {
//             return console.log("It's empty!");
//         }
//     }
//
//     traverse(fn: (value: any) => void) {
//         let current = this.head;
//
//         while (current !== null) {
//             fn(current);
//             current = current.next;
//         }
//         return this;
//     }
//
//     traverseReverse(fn: (value: any) => void) {
//         let current = this.tail;
//
//         while (current !== null) {
//             fn(current);
//             current = current.prev;
//         }
//         return this;
//     }
//
//     findPosition(position: number) {
//         let current = this.head;
//         let counter = 0;
//
//         if (position > this.length - 1 || position < 0) {
//             return console.error(`The length of this Linked list is "${this.length}", you should enter a valid position.`);
//         }
//
//         while (current) {
//             if (counter === position) {
//                 return console.log(current.value);
//             }
//             current = current.next
//             counter++
//         }
//         return console.error("There is no a node at this position!");
//     }
// }

// const doublyLinkedList = new DoublyLinkedList('1', '2', '3', '4', '5', '6', '7');

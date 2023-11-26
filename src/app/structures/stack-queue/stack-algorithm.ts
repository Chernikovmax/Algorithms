import {StackNodeT, StackT} from "./types";

class StackNode implements StackNodeT {
    value: object | null;
    next: StackNodeT | null = null;

    constructor(value: object | null) {
        this.value = value;
    }
}

export class Stack implements StackT {
    head: StackNodeT | null = null;
    tail: StackNodeT | null = null;
    length = 0;

    constructor(...values: object[]) {
         values.forEach(obj => this.add(obj));
    }

    add(value: object | null) {
        const node = new StackNode(value);
        node.next = this.head;

        this.head = node;

        if (!this.head) { // for the first adding node
            this.tail = node;
        }

        this.length++;
        return this;
    }

    remove() {
        if (!this.head) {
            return this.head;
        }

        const prevHead = this.head;
        this.head = this.head.next as StackNodeT;
        this.length--;

        if (!this.head) { // if removed node was the last
            this.tail = null;
        }

        return prevHead;
    }
}

export class StrStack {
    private stack: string[] = [];

    get length(): number {
        return this.stack.length;
    }

    add(str: string) {
        return this.stack.push(str);
    }

    remove() {
        return this.stack.pop();
    }
}

class StackNode {
    value: any;
    next = null;

    constructor(value: any) {
        this.value = value;
    }
}

export class Stack {
    head: any = null;
    tail: any = null;
    length = 0;

    constructor(...values: any) {

    }

    add(value: any) {
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
        this.head = this.head.next;
        this.length--;

        if (!this.head) { // if removed node was the last
            this.tail = null;
        }

        return prevHead;
    }
}

// '()[]{}'
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

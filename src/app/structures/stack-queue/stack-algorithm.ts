import {LinkedStructureAlgorithm, NodeT} from "./types";
import {LinkedNode, LinkedStructure} from "./common";

export class Stack extends LinkedStructure implements LinkedStructureAlgorithm {

    constructor(...values: object[]) {
        super();
        values.forEach(obj => this.add(obj));
    }

    add(value: object): LinkedStructureAlgorithm {
        const node: NodeT = new LinkedNode(value);
        node.next = this.head;

        this.head = node;

        if (!this.head) { // for the first adding node
            this.tail = node;
        }

        this.length++;
        return this;
    }

    remove(): object | null {
        if (!this.head) {
            return this.head;
        }

        const prevHead = this.head;
        this.head = this.head.next as NodeT | null;
        this.length--;

        if (!this.head) { // if removed node was the last
            this.tail = null;
        }

        return prevHead.value;
    }
}

export class StrStack {
    private stack: string[] = [];
    constructor(str?: string) {
        if (!str?.length) {
            return;
        }
        for (const char of str) {
            this.add(char);
        }
    }

    get length(): number {
        return this.stack.length;
    }

    add(str: string): number {
        return this.stack.push(str);
    }

    remove(): string | undefined {
        return this.stack.pop();
    }
}

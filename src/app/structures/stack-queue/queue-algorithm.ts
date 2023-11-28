import {LinkedNode, LinkedStructure} from "./common";
import {LinkedStructureAlgorithm, NodeT} from "./types";

export class Queue extends LinkedStructure implements LinkedStructureAlgorithm {
    constructor(...values: object[]) {
        super();
        values.forEach(val => this.add(val));
    }

    add(value: object): LinkedStructureAlgorithm {
        const node: NodeT = new LinkedNode(value);
        if (!this.tail) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    remove(): object | null {
        const prevTail: NodeT | null = this.tail;
        if (!prevTail) {
            return prevTail;
        }
        this.tail = prevTail.next as NodeT | null;
        if (!this.tail) { // It was the last one element in structure
            this.head = null;
        }
        this.length--;
        return prevTail.value;
    }
}

export class StrQueue {
    private queue: string[] = [];

    constructor(str?: string) {
        if (!str?.length) {
            return;
        }
        for (const char of str) {
            this.enqueue(char);
        }
    }

    get length(): number {
        return this.queue.length;

    }

    enqueue(str: string): number {
        return this.queue.push(str);
    }

    dequeue(): string | undefined {
        return this.queue.shift();
    }
}

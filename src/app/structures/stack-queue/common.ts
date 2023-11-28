import {LinkedStructureT, NodeT} from "./types";

export class LinkedNode implements NodeT {
    value: object | null;
    next: NodeT | null = null;

    constructor(value: object | null) {
        this.value = value;
    }
}

export class LinkedStructure implements LinkedStructureT {
    head: NodeT | null = null;
    tail: NodeT | null = null;
    length: number = 0;
}

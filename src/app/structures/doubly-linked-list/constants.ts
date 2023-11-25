import {LinkedNode} from "../linked-list/constants";

export class DoublyLinkedNode extends LinkedNode {
    prev: any;

    constructor(value: any) {
        super(value);
        this.prev = null;
    }
}

export type NodeT = {
    value: object | null;
    next: object | null;
}

export type LinkedStructureT = {
    head: NodeT | null;
    tail: NodeT | null;
    length: number;
}

export interface LinkedStructureAlgorithm extends LinkedStructureT {
    add(value: object): LinkedStructureAlgorithm;

    remove(): object | null;
}

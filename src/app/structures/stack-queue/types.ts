export type StackNodeT = {
    value: object | null;
    next: object | null;
}

export type StackT = {
    head: StackNodeT | null;
    tail: StackNodeT | null;
    length: number;
}

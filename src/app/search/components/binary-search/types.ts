export type Person = {
    name: string;
}

export type Options = {
    pattern: string;
    storage: Person[];
    key: string;
    from: number;
    to: number;
}

export type BinarySearchResult = {
    obj: Person | null;
    idx: number | null;
}

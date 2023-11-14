import {BinarySearchResult, Options, Person} from "./types";

function binarySearchIdx(options: Options): BinarySearchResult {
    const {pattern, storage, key, from, to} = options;
    const result: BinarySearchResult = {idx: null, obj: null};

    if (storage.length === 0) {
        return result;
    }
    const idx: number = Math.floor(from + (to - from) / 2);
    const loweredName = storage[idx][key as keyof Person].toLowerCase();
    const loweredPattern = pattern.toLowerCase();

    if (loweredName.includes(loweredPattern)) {
        result.idx = idx;
        result.obj = storage[idx];
        return result;
    } else if (loweredName > loweredPattern) {
        // Нужно назад
        // debugger;
        return binarySearchIdx({pattern, storage, key, from: from, to: idx});
    } else {
        // Нужно вперед
        // debugger;
        return binarySearchIdx({pattern, storage, key, from: idx, to});
    }
}

export function binarySearch(
    pattern: string,
    storage: Person[],
    key: string,
): BinarySearchResult {
    return binarySearchIdx({
        pattern,
        storage,
        key,
        from: 0,
        to: storage.length,
    });
}

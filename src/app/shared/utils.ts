export function stringSortingComparator(valueA: string, valueB: string) {
    if (valueA === valueB) return 0;
    return valueA.toLowerCase() > valueB.toLowerCase() ? 1 : -1;
}

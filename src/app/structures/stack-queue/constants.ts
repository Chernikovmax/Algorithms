import {DynamicObject} from "../../shared/types";

export const closingParenthesesPairs: DynamicObject<string> = {
    ')': '(',
    ']': '[',
    '}': '{',
}

export const validParenthesesSet = new Set<string>([
    '[',
    ']',
    '(',
    ')',
    '{',
    '}'
]);

export const QUEUE_RESULT_TEXT = 'A char that was first in queue: '

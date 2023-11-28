import {Component, OnInit} from '@angular/core';
import {closingParenthesesPairs, QUEUE_RESULT_TEXT, validParenthesesSet} from "./constants";
import {StrStack} from "./stack-algorithm";
import {StrQueue} from "./queue-algorithm";
import {SECOND} from "../../shared/constants";

@Component({
    selector: 'app-stack-queue',
    templateUrl: './stack-queue.component.html',
    styleUrls: ['./stack-queue.component.scss']
})
export class StackQueueComponent implements OnInit {
    stackResults = '';

    queueResults = '';
    private queueInterval: NodeJS.Timeout | undefined;

    constructor() {
    }

    ngOnInit(): void {
    }

    checkByStack(testStackStr: string) {
        if (!testStackStr.length) {
            return;
        }
        const stack = new StrStack();
        for (const char of testStackStr) {
            if (!validParenthesesSet.has(char)) {
                this.stackResults = 'false';
                return
            }
            const openingParenthesis: string | undefined = closingParenthesesPairs[char];

            if (!stack.length && openingParenthesis) { // stack is empty and opening parenthesis missed
                this.stackResults = 'false';
                return
            }

            if (!openingParenthesis) {
                stack.add(char);
            } else {
                const stackHead = stack.remove();
                if (stackHead !== openingParenthesis) {
                    this.stackResults = 'false';
                    return
                }
            }
        }
        this.stackResults = `${!stack.length}`;
    }

    clearStackCheckingResult() {
        this.stackResults = '';
    }

    processByQueue(testStr: string) {
        if (!testStr?.length) {
            return;
        }
        const queue = new StrQueue(testStr);
        this.queueResults = QUEUE_RESULT_TEXT + queue.dequeue();
        this.queueInterval = setInterval(() => {
            this.queueResults = QUEUE_RESULT_TEXT + queue.dequeue();
            if (!queue.length) {
                clearInterval(this.queueInterval);
            }
        }, SECOND)
    }

    clearQueueCheckingResult() {
        this.queueResults = '';
        clearInterval(this.queueInterval);
    }
}

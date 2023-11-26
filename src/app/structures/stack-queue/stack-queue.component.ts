import {Component, OnInit} from '@angular/core';
import {closingParentheses, validParenthesesSet} from "./constants";
import {StrStack} from "./stack-algorithm";

@Component({
    selector: 'app-stack-queue',
    templateUrl: './stack-queue.component.html',
    styleUrls: ['./stack-queue.component.scss']
})
export class StackQueueComponent implements OnInit {
    testStackStr = '';
    stackResults = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    checkString() {
        if (!this.testStackStr.length) {
            return;
        }
        const stack = new StrStack();
        for (let i = 0; i < this.testStackStr.length; i++) {
            const curSym = this.testStackStr[i];
            if (!validParenthesesSet.has(curSym)) {
                this.stackResults = 'false';
                return
            }
            const awaitingSym: string | undefined = closingParentheses[curSym];

            if (!stack.length && awaitingSym) {
                this.stackResults = 'false';
                return
            }

            if (!awaitingSym) {
                stack.add(curSym);
            } else {
                const sliced = stack.remove();
                if (sliced !== awaitingSym) {
                    this.stackResults = 'false';
                    return
                }
            }
        }
        this.stackResults = `${!stack.length}`;
        return;
    }

    clearTest() {
        this.testStackStr = '';
        this.stackResults = '';
    }

    clearPrevResult() {
        this.stackResults = '';
    }
}

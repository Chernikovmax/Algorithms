import {Component, OnInit} from '@angular/core';
import {StrStack} from "./algorithm";
import {closingParentheses, validParenthesesSet} from "./constants";

@Component({
    selector: 'app-stack',
    templateUrl: './stack.component.html',
    styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
    testStr = '';
    testResults = '';

    constructor() {
    }

    ngOnInit(): void {
    }

    checkString() {
        if (!this.testStr.length) {
            return;
        }
        const stack = new StrStack();
        for (let i = 0; i < this.testStr.length; i++) {
            const curSym = this.testStr[i];
            if (!validParenthesesSet.has(curSym)) {
                this.testResults = 'false';
                return
            }
            const awaitingSym: string | undefined = closingParentheses[curSym];

            if (!stack.length && awaitingSym) {
                this.testResults = 'false';
                return
            }

            if (!awaitingSym) {
                stack.add(curSym);
            } else {
                const sliced = stack.remove();
                if (sliced !== awaitingSym) {
                    this.testResults = 'false';
                    return
                }
            }
        }
        this.testResults = `${!stack.length}`;
        return;
    }

    clearTest() {
        this.testStr = '';
        this.testResults = '';
    }

    clearPrevResult() {
        this.testResults = '';
    }
}

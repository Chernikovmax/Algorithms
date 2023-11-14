import {Component, OnInit} from '@angular/core';
import {nameKey, objNames} from "./constants";
import {BinarySearchResult} from "./types";
import {binarySearch} from "./algorithm";

@Component({
    selector: 'app-binary-search',
    templateUrl: './binary-search.component.html',
    styleUrls: ['./binary-search.component.scss']
})
export class BinarySearchComponent implements OnInit {
    private objNames = objNames;
    readonly recordsList: string | null;
    nameToFind: string | null = null;
    searchResult: BinarySearchResult | null = null;
    result: string = '';

    constructor() {
        this.recordsList = objNames.reduce((resStr, person, idx, arr) => {
            resStr += `[${idx}]  ${person.name} (${person.age})`;
            if (idx !== arr.length - 1) {
                resStr += '\n';
            }
            return resStr;
        }, '')
    }

    ngOnInit(): void {
    }

    searchName() {
        this.searchResult = binarySearch(this.nameToFind as string, this.objNames, nameKey);
        this.result = JSON.stringify(this.searchResult);
    }

    clearSearch() {
        this.nameToFind = '';
        this.searchResult = null;
        this.result = '';
    }
}

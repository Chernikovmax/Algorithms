import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    constructor(readonly router: Router,) {
    }

    ngOnInit() {
        this.routeTo('binary-search');
    }

    routeTo(path: string) {
        this.router.navigate([`/${path}`]).then();
    }
}

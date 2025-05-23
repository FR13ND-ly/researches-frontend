import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CategoryHeaderComponent } from '../../core/components/category-header/category-header.component';

@Component({
    selector: 'app-literature',
    imports: [CategoryHeaderComponent, RouterOutlet],
    templateUrl: './literature.component.html',
    styleUrl: './literature.component.scss',
    standalone: true
})
export class LiteratureComponent {

}
